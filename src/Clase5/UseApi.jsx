import { useEffect, useState } from "react";

function useApi(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            setData(datos);
        });
    }, [url]);

    return data;
}

export default useApi;