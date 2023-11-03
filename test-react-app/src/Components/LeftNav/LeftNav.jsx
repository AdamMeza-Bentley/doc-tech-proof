import { List } from "../List/List";
import './LeftNav.css';
import { createElement } from "react";

export const LeftNav = ({data}) => {

  const formatHeader = (header, index) => {
    const headerProps = {
        hValue: header.depth,
        url: findURL(header),
        text: findText(header)
    };

    return ( <Header props={headerProps} key={index}/> );
  };

  const findURL = item => {
    if (item.url) return item.url;
    else return item.children ? findURL(item.children[0]) : null; 
  };

  const findText = item => {
    if (item.type === 'text') return item.value;
    else return findText(item.children[0]);
  };

  const consecutiveHeaders = (first, second) => first.type === "heading" && second?.type === "heading";

  const parseData = data => {
    let mainHeader= '';

    const content = data.map((elem, index) => {
      if (elem.type === "heading" && data[index + 1]?.type === "list" ) {
        return ( 
          <List header={elem}
              listItems={data[index + 1]}
              key={index} 
              formatHeader={formatHeader}
              findURL={findURL}
              findText={findText}
          />
        );
      } else if (consecutiveHeaders(elem, data[index + 1])) {
        mainHeader = formatHeader(elem);
      };
    });

    content.unshift(mainHeader);
    return content;
  };

  return (
    <nav className="left-nav">
      {parseData(data.children)}
    </nav>
  );
};

const Header = ({props}) => {
  const {text, url, hValue} = props;
  const headerJSX = createElement(`h${hValue}`, undefined, text);

  return (
    <div
      className="header"
      onClick={()=> console.log(url)}
    >
      {headerJSX}
    </div>
  );
};