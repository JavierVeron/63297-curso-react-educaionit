import { useEffect, useState } from "react";

const Address = ({datos}) => {
    return (
        <div>
            <p><b>Address:</b><br />
            Street: {datos.street}<br />
            Suite: {datos.suite}<br />
            City: {datos.city}<br />
            Zip Code: {datos.zipcode}</p>
        </div>
    )
}

const Company = ({datos}) => {
    return (
        <div>
            <p><b>Company:</b><br />
            Name: {datos.name}<br />
            catchPhrase: {datos.catchPhrase}<br />
            bs: {datos.bs}</p>
        </div>
    )
}

const User = ({id}) => {
    const [user, SetUser] = useState({});
    const [address, SetAddress] = useState({});
    const [company, SetCompany] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + id)
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos);
            SetUser(datos);
            SetAddress(datos.address);
            SetCompany(datos.company);
        })
    }, [id]);

    return (
        <div className="card text-bg-light mb-3">
            <div className="card-header">{user.username}</div>
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Email: {user.email}<br />Phone: {user.phone}<br />Website: {user.website}</p>
                <Address datos={address} />
                <Company datos={company} />
            </div>
        </div>
    )
}

export default User;