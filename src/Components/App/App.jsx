import React from 'react';
import "./App.css";
import Nav from './../Nav/Nav';
import Landing from './../Landing/Landing';
import Footer from './../Footer/Footer';

class App extends React.Component {
    render(){
        return(
            <div className="app">
            {/*Nav section*/}
            <Nav />
            {/*Landing page*/}
            <Landing />
            {/**Challenge section */}
            {/**footer component */}
            <Footer />
            </div>
        )
    }
}

export default App;