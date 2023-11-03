import './List.css';

export const List = ({ header, listItems, topHeader, formatHeader, findURL, findText }) => {
  const formatList = list => (
    list.children.map((child, index) => {
      if (child.children?.length > 1) {
        return <List
          header={child.children[0]}
          listItems={child.children[1]}
          key={index}
          formatHeader={formatHeader}
          findURL={findURL}
          findText={findText}
        />
      } else {
        return (
          <ListItem
            text={findText(child)}
            url={findURL(child)}
            key={index}
          />
        );
      };
    })
  );

  return (
    <ul className='list'>
      {formatHeader(header)}
      {formatList(listItems)}
    </ul>
  );
};

const ListItem = ({ text, url }) => {
  return (
    <li onClick={() => console.log(url)} className="list-item">
      {text}
    </li>
  );
}; 

