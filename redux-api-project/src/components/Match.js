import React from "react";

function Match(props){
    console.log(props)
return(
    <>
    <h2>{props.title}</h2>
    <video src={props.url} />
    </>
);
};

export default Match;