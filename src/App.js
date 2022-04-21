import React from 'react';
import './App.css';
// import data from "./data/factdata";
import CatFactList from "./components/CatFactList";
import { connect } from "react-redux";

function App(props) {
  // console.log(props)
  const { loading, facts } = props;
  // const facts = data;
  // const loading = false;
  // const error = "";

  return (
    <div className="App">
      <h1>Cat Facts For Everyone</h1>

      <form>
        <label>How long of a cat fact?
        <input/>
        </label><br/>
        <label>How many cat facts do you want?
          <input />
        </label><br/>
        <button>Search</button>
        
      </form>

      { 
      loading ? <h3>WE ARE LOADING</h3> : <CatFactList facts={facts}/>
      }

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    facts: state.facts,
    loading: state.loading
  }
}
export default connect(mapStateToProps)(App);