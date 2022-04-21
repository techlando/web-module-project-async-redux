import React from "react";
import Fact from "./fact";

const CatFactList = props => {
    const { facts } = props;

    return (<div id="catList">
        {facts.map(fact => {
            return(
                <Fact fact={fact}/>
            )
        })}
    </div>)
};

export default CatFactList;