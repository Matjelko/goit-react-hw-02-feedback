// import { Component } from "react";
import Section from './Section';
import Statistics from "./Statistics";
// import FeedbackOptions from './FeedbackOptions';

// class Counter extends Component{

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };

//   handleGood = () => {
//     this.setState({good: this.state.good + 1})
//   }

//   handleNeutral = () => {
//     this.setState({neutral: this.state.neutral + 1})
//   }

//   handleBad = () => {
//     this.setState({bad: this.state.bad + 1})
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const countTotalFeedback = good + neutral + bad;
//     const countPositiveFeedbackPercentage = Math.round((good / countTotalFeedback) * 100);

//     return (
//       <>
//         <>
//           Please leave feedback
//         </>

//         <div>
//           <button type="button" onClick={this.handleGood}>
//             Good by {good}
//           </button>
//           <button type="button" onClick={this.handleNeutral}>
//             Neutral by {neutral}
//           </button>
//           <button type="button" onClick={this.handleBad}>
//             Bad by {bad}
//           </button>
//         </div>

//         <div>
//           Statistics

//           Good: {good}
//           Neutral: {neutral}
//           Bad: {bad}
//           Total: {countTotalFeedback}
//           Postitive feedback: {countPositiveFeedbackPercentage}%
//         </div>
//       </>
//     )
//   }
// }

const App = () => {
  return (
    <div>
      
      {/* <Counter/> */}
      <Section>
        {/* <FeedbackOptions/> */}
        <Statistics/>
      </Section>

    </div>
  );
};

export default App;


// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101'
// }}