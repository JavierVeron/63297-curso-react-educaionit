//import axios from "axios";
import { useEffect, useState } from "react";
import apiClient from "./Api";

const ApiAxios = () => {
    const [users, setUsers] = useState([]);

    /* useEffect(() => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users'
        })
        .then(respuesta => {
            console.log(respuesta.data);
            setUsers(respuesta.data);
        });
    }, []); */

    useEffect(() => {
        (async() => {
            const respuesta = await apiClient.get("/users");
            setUsers(respuesta.data);
        })();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <ul>
                        {users.map(item => <li key={item.id}>{item.name} ({item.username}) - {item.email}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ApiAxios;