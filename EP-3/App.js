import React from "react";
import ReactDOM from "react-dom/client";


/*
    // React.createElement ==> gives ReactElement at EOD i.e "JS-Object" ==>HTMLElement (when rendered)
    const heading = React.createElement("h1", {id:"heading"}, "Namaste React🚀");  //(this is using core-React: not user-friendly, clumsy ==> so JSX came)
    console.log(heading);
*/

/*

    // "h1" in JSX   :  JSX - is not HTML in JS  (we can say JSX is HTML-like of XML-like syntax with mix of JS)(not understandable by browser| JS-Engine)(so  JSX- transpiled before it reaches the JS-Engine) - managed by Parcel --gives work to --> Babel (i.e a JS-Compiler/transpiler)(which converts JSX into JS)
    // JSX => Babel transpiles it to React.CreateElement ==> ReactElement - JS Object => HTMLElement (when rendered)
    const jsxHeading = (
    <h1 id="jsxHeading" className="head" tabIndex="1">
        Namaste React using JSX 🚀
    </h1>
    );  // (cleaner & user-friendly) ( if  multiple lines use "()" )

*/

/*
    // Functional-component using normal js-function
    const Title = function () {

        return (
            <h1 id="jsxHeading" className="head" tabIndex="1">
                Namaste React using JSX 🚀
            </h1>
        ); 
    }

*/

const Title = () => (

    <h1 id="jsxHeading" className="head" tabIndex="1">
        Namaste React using JSX 🚀
        (it's a functional component)
    </h1>
);

//ReactElements inside ReactElements
const elem = <span>React Element</span>
// these are jsx
 const title = (    
    <h1 id="jsxHeading" className="head" tabIndex="1">
        {elem}
        Namaste React using JSX 🚀
    </h1>
); 

// React Functional Component (using arrow function)
/*      //1-way
        const HeadingComponent = () => {
            return <h1>Namaste React Functional Component</h1>;
        }
*/

const number = 10000;

//2nd-way (mostly used by developers)
const HeadingComponent2 = () =>  (
   <div id="container">
        {/* injecting Title-component i.e( Component-Composition ) */}
        {/* <Title />  */}
        {/* <Title> </Title>  */}

        {/* React-Element inside component */}
        {title}

        {/* Title- at the EOD it is JS-Function: so we can call like this also like a function  */}
        {Title()}

        <h2>Number: {number + 9999}</h2>
        <h1 className="heading2">Namaste React Functional Component</h1>
   </div>
);


// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//when we do "root.render(heading)" ==> takes "Object" and converts it into "HTMLElement" & push it into browser  
// root.render(jsxHeading);

//rendering Fn-component
root.render(<HeadingComponent2 />);
