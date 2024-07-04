import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="error">
            <h1>Oops!!!</h1>
            <h3>This page does not exists!..</h3>
            <h4>{ error.status } : { error.statusText }</h4>
        </div>
    )
}

export default Error;