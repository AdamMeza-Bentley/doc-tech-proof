import './List.css'

export const List = ({header, listItems, topHeader}) => {
    const formatList = list => (
        list.children.map((child, index) => {
            if (child.children?.length > 1) {
                return <List
                            header={child}
                            listItems={child.children[1]}
                            key={index}
                        />
            } else {
                return (
                    <ListItem
                        text={findText(child)}
                        url={findURL(child)}
                        key={index}
                    />
                );

            }

        })
    );

    const formatHeader = header => {
        const headerProps = {
            id: header.id,
            hValue: header.depth,
            url: findURL(header),
            text: findText(header)
        };

        return ( <Header props={headerProps}/> );
    };

    const findURL = item => {
        if (item.url) return item.url;
        else return item.children ? findURL(item.children[0]) : null; 
    };
    
    const findText = item => item.value ? item.value : findText(item.children[0]);

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