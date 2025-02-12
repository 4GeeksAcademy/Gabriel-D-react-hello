import React from "react";
import ReactDOM from "react-dom";
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Final from "./Final";

//create your first component
const Home = () => {
	return (
	<div className="text-center">
	  <NavBar />
	  <Jumbotron />
	  <Cards />
	  <Final />
	  </div>
	);
  };
  
  export default Home;