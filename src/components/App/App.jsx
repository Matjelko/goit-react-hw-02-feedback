import { Component } from "react";
import Section from '../Section/Section';
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Notification from "../Notification/Notification";
import "./Container.css";
import PropTypes from 'prop-types';

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

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  handleFeedback: PropTypes.func
}

export default App;