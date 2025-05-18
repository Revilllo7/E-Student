import { useEffect, useState } from "react";

export default function Dashboard() {
    const [data, setData] = useState(null);

    useEffect(() => {
    const token = window.location.hash.split("&")[0].split("=")[1];
    fetch("http://localhost:8000/secure-data", {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    })
        .then((res) => res.json())
        .then(setData);
    }, []);

    return <div>{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Ładowanie..."}</div>;
}
