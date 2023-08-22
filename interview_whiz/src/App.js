import React from 'react';
import './index.css';

const App = () => {
  return (
    <div className="container" id="root">
      <div className="content-container">
        {/* Content of the content container */}
        <div className="interview-header">
          InterviewWhiz<span className="interview-dot">.</span>
        </div>
        <div className="coach-container">
          <div className="coach-text">
          Interview Practice, Reinvented<br/>
          Your Personal Interview Coach
          </div>
          <div className="coach-options">
            <button className="instant-interview-button">Instant Interview</button>
            <button className="schedule-interview-button">Schedule an Interview</button>
          </div>
        </div>
      </div>
      <div className="illustration-container">
        <img src="https://file.rendit.io/n/piq2u02YWZRVqnfKUfa3.png" className="img" id="illustration" />
      </div>
    </div>
  );
}

export default App;
