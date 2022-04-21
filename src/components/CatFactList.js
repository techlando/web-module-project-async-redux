import React from "react";
import Fact from "./fact";
import { connect } from "react-redux";

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

const mapStateToProps = (state) => {
    return {
        facts: state.facts
    }
}

export default connect(mapStateToProps)(CatFactList);