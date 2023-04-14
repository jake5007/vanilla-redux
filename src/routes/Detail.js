import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <>
            <h1>Detail: {id}</h1>
        </>
    )
}

export default Detail;