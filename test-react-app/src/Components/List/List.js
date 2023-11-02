import React, {useEffect, useState} from "react";

export const List = ({header, listItems, topHeader}) => {
    const [headerDisplay, setHeaderDisplay] = useState(''),
          [listDisplay, setListDisplay] = useState('');

    useEffect(() => {
        setHeaderDisplay(formatHeader(header));
        setListDisplay(formatList(listItems));
        console.log(listItems)
    }, []);

    const formatList = list => (
        list.children.map((child, index) => {
            return (
                <ListItem
                    text={child.children[0].children[0].children[0].value}
                    url={child.children[0].children[0].url}
                    key={index}
                />
            );
        })
    );
                    
    const formatHeader = header => {
        const headerProps = {
            id: header.id,
            hValue: header.depth,
            url: header.children[0].type === "link" ? header.children[0].url : null,
            text: header.children[0].value ? header.children[0].value : header.children[0].children[0].value
        };

        return ( <Header props={headerProps}/> );
    };

    return (
        <ul>
            {headerDisplay}
            {listDisplay}
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