import React, { useState, useMemo } from 'react';
import { List } from 'react-virtualized';

const MyComponent = () => {
  const [data, setData] = useState(Array.from({ length: 1000 }, (_, index) => index + 1));

  const getExpensiveResult = useMemo(() => {
    return () => {
      console.log('Expensive computation');
      let result = 0;
      for (let i = 0; i < 10000000; i++) {
        result += Math.random();
      }
      return result;
    };
  }, []);


  const rowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        Item {data[index]}
      </div>
    );
  };

  return (
    <div>
      <List
        width={300}
        height={300}
        rowCount={data.length}
        rowHeight={20}
        rowRenderer={rowRenderer}
      />

      <p>Expensive Result: {getExpensiveResult()}</p>
    </div>
  );
};

export default MyComponent;
