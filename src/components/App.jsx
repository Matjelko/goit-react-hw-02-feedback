import { Component } from "react";
import Section from './Section';
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";
import "./Container.css";

class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleFeedback = (option) => {
    this.setState((prevState) => ({ [option]: prevState[option] + 1}))
  }

  render(){
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = total ? Math.round((good / total) * 100) : 0;

    return(
      <div className="container">
        <Section title = "Please leave your feedback">
          <FeedbackOptions
            options = {["good", "neutral", "bad"]}
            onLeaveFeedback = {this.handleFeedback}
          />
        </Section>

        {total === 0 
        ? (<Notification message="There is no feedback"/>)
        : ( <Section title = "Statistics">
              <Statistics
                good = {good}
                neutral = {neutral}
                bad = {bad}
                total = {total}
                positivePercentage = {positivePercentage}
              />
            </Section>
          )
        }
      </div>
    )
  }
}

export default App;