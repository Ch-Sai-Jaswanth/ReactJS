import React from "react";
import ReactDOM from "react-dom/client";

const Relement = function () { 
    return (
    <h1 className="head" tabIndex="5">Hello World of React</h1>
);
}

const heading = (
    <div id="reactelement">
        <h1 className="sai">Sairam</h1>
    </div>
);

const val = 12;
//Component composition
const Heading = () => {
    return (
        <div className="func.comp">
            {Relement()}
            <Relement />
            <Relement></Relement>
            <h1>React Functional Component</h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);