import "./FeedbackOptions.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return(
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  )};

export default FeedbackOptions;