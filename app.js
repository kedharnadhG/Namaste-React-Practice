//nested-example (div->div->h1)

/*
ReactElement(Object) ==> HTML (Browser Understands)
*/

//core-of react
const parent = React.createElement("div", {id:"paremt"},

    [   React.createElement("div", {id:"child1"},
            [React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h2", {}, "I am h2 tag")]
        ),
    
        React.createElement("div", {id:"child2"},
        [React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")]
    )]
)  






 console.log(parent);  //returns an object 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);  //"render" responsible for rendering that object