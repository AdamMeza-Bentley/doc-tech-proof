import { List } from "../List/List";
import './LeftNav.css';

export const LeftNav = ({data}) => {
  console.log(data)
    const parseData = data => {
        return data.map((elem, index) => {
          if (elem.type === "heading" && data[index + 1]?.type === "list" ) {
            return ( <List header={elem}
                        listItems={data[index + 1]}
                        key={index} 
                    /> );
          } else if (elem.type === "heading" && data[index + 1]?.type === "heading" ) {
            
            // this is gonna see if a heading is next to another heading 
            // if it is it should someone pair the two with the first one becoming a "SuperHeader"
            // console.log('test')'
            // same here except it has a superHeader Prop
          };
        });
    };
    

    return (
        <nav className="left-nav">
            {parseData(data.children)}
        </nav>
    );
};



// YAML STUFF THAT IS NO LONGER USEFUL BUT ONE DAY MIGHT BE 
    // const [yaml, setYAML] = useState('');

    // const formatYAML = data => {
    //     const yamlObj = data.find(child => child.type === "yaml")

    //     // this is going to be a lot more involved in formatting the frontMatter
    //     // getting rid of the extra strings
    //     // we're gonan be going into the .value prop and turning that into an object 
    //     return yamlObj;
    // };

    
    // useEffect(() => {
    //     setYAML(formatYAML(data.children));
    // }, []);