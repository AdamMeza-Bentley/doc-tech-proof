import React, {useState, useEffect} from "react";
import { List } from "../List/List";
import './LeftNav.css'

export const LeftNav = ({data}) => {
    const [yaml, setYAML] = useState(''),
          [content, setContent] = useState('')

    const formatYAML = data => {
        const yamlObj = data.find(child => child.type === "yaml")

        // this is going to be a lot more involved in formatting the frontMatter
        // getting rid of the extra strings
        // we're gonan be going into the .value prop and turning that into an object 
        return yamlObj
    }

    useEffect(() => {
        setYAML(formatYAML(data.children))
        setContent(parseData(data.children))
    }, [])

    const parseData = data => {
        return data.map((elem, index) => {
          if (elem.type === "heading" && data[index + 1]?.type === "list" ) {
            return <List header={elem}
                        listItems={data[index + 1]}
                        key={index} 
                    />
          } else if (elem.type === "heading" && data[index + 1]?.type === "heading" ) {
            // this is gonna see if a heading is next to another heading 
            // if it is it should someone pair the two with the first one becoming a "SuperHeader"
            // console.log('test')'
            // same here except it has a superHeader Prop
          }
        })
      }
    

    return (
        <nav className="left-nav">
            {content}
        </nav>
    )
}