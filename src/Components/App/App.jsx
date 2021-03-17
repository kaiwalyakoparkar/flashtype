import React from 'react';
import "./App.css";
import Nav from './../Nav/Nav';
import Landing from './../Landing/Landing';
import Footer from './../Footer/Footer';
import ChallengeSection from './../ChallengeSection/ChallengeSection';
import { SAMPLE_PARAGRAPHS } from './../../data/sampleParagraphs'

const totalTime = 60;
const serviceUrl = "http://metaphorpsum.com/paragraphs/1/9";
const defaultState = {
        selectedParagraph: "",
        timerStarted: false,
        timeRemaining : totalTime,
        words:0,
        characters:0,
        wpm: 0,
        testInfo:[],
    }

class App extends React.Component {
    state = defaultState;

    fetchNewParagraphFallback = () => {
        const data = SAMPLE_PARAGRAPHS[
            Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
        ];

        const selectedParagraphArray  = data.split("");
            const testInfo = selectedParagraphArray.map(selectedLetter => {
                return{
                    testLetter:selectedLetter,
                    status : "notAttempted",
                };
            });

            this.setState({
                ...defaultState,
                testInfo, 
                selectedParagraph:data
            });
    }

    // fetchNewParagraph = () => {
    //     fetch(serviceUrl)
    //     .then((response) => response.text())
    //     .then((data) => {
    //         const selectedParagraphArray  = data.split("");
    //         const testInfo = selectedParagraphArray.map(selectedLetter => {
    //             return{
    //                 testLetter:selectedLetter,
    //                 status : "notAttempted",
    //             };
    //         });

    //         this.setState({
    //             ...defaultState,
    //             testInfo, 
    //             selectedParagraph:data});
    //         })
    // }

    componentDidMount () {
        this.fetchNewParagraphFallback();
    }

    startTimer = () => {
        this.setState({timerStarted:true});
        const timer = setInterval(() => {
            if(this.state.timeRemaining > 0){
                //Change the wpm
                const timeSpent = totalTime - this.state.timeRemaining;
                const wpm = timeSpent > 0
                    ? (this.state.words / timeSpent)*totalTime
                    : 0;
                this.setState({
                    timeRemaining : this.state.timeRemaining-1,
                    wpm:parseInt(wpm),
                }) 
            }else{
                clearInterval(timer)
            }
        },1000);
    }

    startAgain = () => this.fetchNewParagraphFallback();


    handleUserInput = (inputValue) => {
      if(!this.state.timerStarted)this.startTimer();

      const characters = inputValue.length;
      const words = inputValue.split(" ").length;
      const index = characters - 1;

      //Handling underflow
      if(index< 0){
        this.setState({
            testInfo : [
                {
                    testLetter : this.state.testInfo[0].testLetter,
                    status: "notAttempted"
                },
                ...this.state.testInfo.slice(1)
            ],
            characters,
            words,
        })

        return;
      }
      
      //Handling overflow
      if(index > this.state.selectedParagraph.length){
        this.setState({characters,words});  
        return;
      }

      const testInfo = this.state.testInfo;
      if(!(index === this.state.selectedParagraph.length-1)){
          testInfo[index + 1].status = "notAttempted";
      }

      const isCorrect = inputValue[index] === testInfo[index].testLetter;

      testInfo[index].status = isCorrect ? "correct" : "incorrect";

      this.setState({
          testInfo,
          words,
          characters
      })
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
                onInputChange={this.handleUserInput}
                startAgain={this.startAgain}
            />
            {/**footer component */}
            <Footer />
            </div>
        )
    }
}

export default App;