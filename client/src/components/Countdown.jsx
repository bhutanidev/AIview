import React, { useState, useEffect } from "react";

const Countdown = React.memo(() => {
  const [counter, setCounter] = useState(10); // Initialize state with 10

  // useEffect to decrement the counter every second
  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [counter]); // Runs whenever counter changes

  return (
    
    <span className="countdown p-5 font-mono text-4xl">
      {console.log("inside countdown")}
      <span style={{ "--value": counter }}></span>
    </span>
  );
});

export default Countdown;
