import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const res = await response.json();
      setData(res);
    };

    fetchData();
  }, []); 

  return (
    <div>
          <p>{data.title}</p>
          <p>{data.body}</p>
    </div>
  );
};

export default DataFetcher;
