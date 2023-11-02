import * as fs from 'fs'
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkFrontmatter from 'remark-frontmatter'

import rehypeStringify from 'rehype-stringify';
import remarkStringify from 'remark-stringify';

const markdownContent = fs.readFileSync('./leftNav.md', 'utf-8')
const bisContent = fs.readFileSync('./bisLeftNav.md', 'utf-8')

// Turn it into HTML 
const html = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)  
    .use(remarkRehype) 
    // ^^ this turns it into HTML
    .use(rehypeStringify)
    // HTML into string 
    .process(markdownContent);

// console.log(String(html));

// This one is Turning it into JSON 
//Turn this into a function that tkaes in a file and returns the object. 
// or maybe use closures???
const markdownIntoJSON = async (markdown) => await unified()
    .use(remarkParse) // takes markdown and turns it into a syntax tree(mdast)
    .use(remarkStringify)
    .use(remarkFrontmatter, ['yaml', 'toml']) // Turns the Abstract Syntax tree into JSON
    .use(function () {
        return function (tree) {

            var buf = Buffer.from(JSON.stringify(tree)); // turn into a buffer

            fs.writeFile(`../test-react-app/src/tree.json`, buf, 'utf-8', (err) => {
                if (err) throw err;
                console.log("great success")
            })
        }
    })
    .process(markdown);


markdownIntoJSON(markdownContent)


