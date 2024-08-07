import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactTElement -> JS Object => HTMLElement(render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Nameste React from Gabbar Saturo"
);
// !JSX - it is not HTML inside JavaScript / it is HTML like syntex
//?JSX -> Transpiled before it reaches the JS -> PARCEL -> Bable
//todo JSX => React.createElement => ReactTElement -> JS Object => HTMLElement(render)
const title = <h1 id="heading">Nameste React using JSX again..!!</h1>;

//!React Components -> component name should always start with capital leter
//!-> A JS function that returns a JSX code are React coomponents
//*-> Class Based Components - Old way
//todo Will be done later
const num = 100200;
//*-> Funcational Components - New way
//Component Composition -> Adding one react component inside another component
const HeadingComponent1 = () => (
  <div>
    <h2>{num}</h2>
    <h1 id="heading"> Nameste React Funcational component1</h1>;
    <HeadingComponent2 />
  </div>
);

const HeadingComponent2 = () => {
  return <h1 id="heading"> Nameste React Funcational component2</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent1 />);
