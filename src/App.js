import React, { useState, useEffect } from 'react';
import './App.css';

import { getFacts } from "./reducer/actions"
 
import CatFactList from "./components/CatFactList";
import { connect } from "react-redux";



function App(props) {
 const [searchTerm, setSearchTerm] = useState("");
  const { loading, error, getFacts } = props;
 
useEffect(() => {
  getFacts(3);
 
},[])  
const handleSubmit = (e) => {
  e.preventDefault()
  getFacts(searchTerm)
}
const handleChange = (e) => {

  setSearchTerm(e.target.value)
}

  return (
    <div className="App">
      <h1>Cat Facts For Everyone</h1>

      <form>
      
        <label>How many cat facts do you want?
          <input type="number" onChange={handleChange} placeholder="E.g. 20"/>
        </label>
        <button onClick={handleSubmit}>Search</button>
        
      </form>
      <div className='catPic'>
      <img src="https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
      <img src="https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"/>
      <img src="https://images.unsplash.com/photo-1570824104453-508955ab713e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1611&q=80"/>
      </div>
      {
        (error !== "") &&
           <h3>{error}</h3>
        }
      

      { 
      loading ? <h3>WE ARE LOADING...</h3> : <CatFactList />
      }

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    
    loading: state.loading,
    error: state.error
  }
}
export default connect(mapStateToProps,{ getFacts} )(App);