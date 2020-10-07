import React from 'react';

type Item = {
  id: number
  title: string
}

const items: Item[] = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' }
]

function MyList() {
  return (
    <ul>
      {items.map((item: Item) => {
        return <li key={item.id}>{item.title}</li>
      })}
    </ul>
  );
}

export default MyList;