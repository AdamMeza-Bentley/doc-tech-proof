import * as fs from 'fs';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkStringify from 'remark-stringify';

//this is reading all the relevant markdown files based on keyword
const keywords = ['main', 'bis', 'presentation', 'changeHistory'];
const markdownContent = keywords.map(keyword => fs.readFileSync(`./${keyword}.md`, 'utf-8'));

const markdownIntoJSON = async (markdown, keyword) => await unified()
  .use(remarkParse) // Takes markdown and turns it into a syntax tree(mdast)
  .use(remarkStringify)  // Turns the abstract syntax tree into JSON
  .use(remarkFrontmatter, ['yaml', 'toml']) // Handles FrontMatter
  .use(() => {
    return (tree) => {

      const buf = Buffer.from(JSON.stringify(tree)); // turn into a buffer

      // Add it to the React App
      fs.writeFile(`../test-react-app/src/${keyword}.json`, buf, 'utf-8', (err) => {
        if (err) throw err;
        console.log("great success");
      }) 
    };
  })
  .process(markdown);

markdownContent.forEach((file, i) => markdownIntoJSON(file, keywords[i]));


