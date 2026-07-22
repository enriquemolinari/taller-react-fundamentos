import { useState, useEffect } from 'react'

export default function WithAjax() {
    const [data, setData] = useState([]);

    //sin useEffect el fetch se ejecuta en cada renderizado, lo que genera un bucle infinito.
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Table Data from Ajax Call</h2>
            <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td style={{ whiteSpace: 'pre-wrap' }}>{item.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
