import React from "react";

const Fact = (props) => {
    const { fact } = props;

    return(<div className="fact">
        <h3>CF: {fact.fact}</h3>
    </div>)
}

export default Fact;