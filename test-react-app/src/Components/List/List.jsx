
export const List = ({header, listItems, topHeader}) => {
    const formatList = list => (
        list.children.map((child, index) => {
            return (
                <ListItem
                    text={getListItemText(child)}
                    url={getListItemURL(child)}
                    key={index}
                />
            );
        })
    );
    
    const getListItemURL = item => item.children[0].children.url;
    const getListItemText = item => findItemText(item)
                    
    const findItemText = item => {
        return item.value ? item.value : findItemText(item.children[0])
    }

    const formatHeader = header => {
        const headerProps = {
            id: header.id,
            hValue: header.depth,
            url: checkForURL(header),
            text: findText(header)
        };

        return ( <Header props={headerProps}/> );
    };

    const checkForURL = header => header.children[0].type === "link" ? header.children[0].url : null;
    const findText = header => header.children[0].value ? header.children[0].value : header.children[0].children[0].value;
    // in order to use a .find() for this we'd have to ues recursion(???) to juts serach until we hit a text 

    return (
        <ul>
            {formatHeader(header)}
            {formatList(listItems)}
        </ul>
    );
};

const Header = ({props}) => {
    const {text, url, hValue} = props;
    let headerJSX;

    switch (hValue) {
        case 1:
            headerJSX = <h1>{text}</h1>
            break
        case 2:
            headerJSX =  <h2>{text}</h2>
            break
        case 3:
            headerJSX = <h3>{text}</h3>
    };

    return (
        <div
            className="header"
            onClick={()=> console.log(url)}
        >
            {headerJSX}
        </div>
    );
};

const ListItem = ({text, url}) => {
    return (
        <li onClick={() => console.log(url)} className="list-item">
            {text}
        </li>
    );
};