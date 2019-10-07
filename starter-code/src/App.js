//import React from "react"; 
import React, { Component } from "react";
import "./App.css";

//class App extends React.Component {
class App extends Component {
    render() {
        return (
            <div className="App">
                <div id="Nav">
                    <img src="images/ironhack-logo.svg" />
                    <img src="images/menu-top.svg" />
                </div>
                <div id="Main">
                    <div id="LeftContent">
                        <h1>Say hello to ReactJS</h1>
                        <p>You will learn a Frontend</p><p>framework from scratch, to became</p><p>an Ninja Developer</p>
                        <h3>Awesome !</h3>
                    </div>
                    <div id="RightContent">
                    </div>
                </div>
                <div id="icons">
                    <div id="icon1">
                        <img src="images/icon1.png" />
                        <h2>Declarative</h2>
                        <p>React makes it painless to create interactive UIs.</p>
                    </div>
                    <div id="icon2">
                        <img src="images/icon2.png" />
                        <h2>Components</h2>
                        <p>Build encapsulated components that manage their state.</p>
                    </div>
                    <div id="icon3">
                        <img src="images/icon3.png" />
                        <h2>Single-Way</h2>
                        <p>A set of immutable values are passed to the component´s.</p>
                    </div>
                    <div id="icon4">
                        <img src="images/icon4.png" />
                        <h2>JSX</h2>
                        <p>Statically-typed. designed to run on modern browsers.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;