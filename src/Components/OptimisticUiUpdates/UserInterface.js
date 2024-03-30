import React, { useState } from 'react';

const Ui = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setData([...data, 'New Data']);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <button onClick={handleClick} disabled={loading}>
        Add Data
      </button>
      {loading && <p>Loading...</p>}
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ui;
