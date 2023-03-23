import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";

class Statistics extends Component{

    state = {
      good: 0,
      neutral: 0,
      bad: 0
    };
  
    handleGood = () => {
      this.setState({good: this.state.good + 1})
    }
  
    handleNeutral = () => {
      this.setState({neutral: this.state.neutral + 1})
    }
  
    handleBad = () => {
      this.setState({bad: this.state.bad + 1})
    }
  
    render() {
      const { good, neutral, bad } = this.state;
      const countTotalFeedback = good + neutral + bad;
      const countPositiveFeedbackPercentage = Math.round((good / countTotalFeedback) * 100);
  
      return (
        <div>
            <div>
                <button type="button" onClick={this.handleGood}>
                    Good
                </button>
                <button type="button" onClick={this.handleNeutral}>
                    Neutral
                </button>
                <button type="button" onClick={this.handleBad}>
                    Bad
                </button>
            </div>

            Statistics
  
            Good: {good}
            Neutral: {neutral}
            Bad: {bad}
            Total: {countTotalFeedback}
            Postitive feedback: {countPositiveFeedbackPercentage}%
        </div>
      )
    }
}

export default Statistics;