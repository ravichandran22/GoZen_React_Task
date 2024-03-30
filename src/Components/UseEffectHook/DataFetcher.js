import React, { useEffect, useState } from "react";

const DataFetcher = () => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if(!response.ok){
                    throw Error('Failed to fetch the data')
                }
                const responseData = await response.json();
                setData(responseData);
                setLoading(false);
            }
            catch(err){
                setErr(err.message);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return(
        <div>
            {loading && <p>...Loading</p>}
            {err && <p>Error: {err}</p>}
            {data && (
                <ul>
                    {data.map(item => (
                        <li style={list} key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default DataFetcher;

const list ={
    listStyleType: 'none'
}