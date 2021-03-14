import React from 'react';
import "./App.css";
import Nav from './../Nav/Nav';
import Landing from './../Landing/Landing';
import Footer from './../Footer/Footer';
import ChallengeSection from './../ChallengeSection/ChallengeSection';

const totalTime = 60;
const serviceUrl = "http://metaphorpsum.com/paragraphs/1/9";

class App extends React.Component {
    state = {
        selectedParagraph: "Hello I am Kaiwalya",
        timerStarted: false,
        timeRemaining : totalTime,
        words:0,
        characters:0,
        wpm: 0,
        testInfo:[],
    }

    componentDidMount () {
        // fetch(serviceUrl)
        // .then((response) => response.text())
        // .then((information) => {
        //     this.setState({selectedParagraph:information})
        // })

        const selectedParagraphArray  = this.state.selectedParagraph.split("");
        const testInfo = selectedParagraphArray.map(selectedLetter => {
            return{
                testLetter:selectedLetter,
                status : "notAttempted",
            };
        });

        this.setState({testInfo});
    }

    render(){
        return(
            <div className="app">
            {/*Nav section*/}
            <Nav />
            {/*Landing page*/}
            <Landing />
            {/**Challenge section */}
            <ChallengeSection 
                selectedParagraph={this.state.selectedParagraph}
                words = {this.state.words}
                characters ={this.state.characters}
                wpm = {this.state.wpm} 
                timeRemaining = {this.state.timeRemaining}
                timerStarted = {this.state.timerStarted}
                testInfo={this.state.testInfo}
            />
            {/**footer component */}
            <Footer />
            </div>
        )
    }
}

export default App;