const heading = React.createElement("div", {id:"parent"}, 
    [React.createElement("h1", { id: "h1" }, React.createElement("p", {}, "Hai")),
     React.createElement("h1", { id: "h2" }, "Child2")]
    );

const root = ReactDOM.createRoot(document.getElementById("header"));

root.render(heading);