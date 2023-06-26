import React, { useState, useEffect } from 'react';
const CountUpComponent = ({ endValue, duration }: { endValue: any; duration: any }) => {
  const [count, setCount] = useState(0);
  const increment = endValue / (duration * 60); // Calculate the increment per frame

  useEffect(() => {
    let frame = 0;
    console.log(frame);
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount + increment >= endValue) {
          clearInterval(timer);
          return endValue;
        }
        frame++;
        return prevCount + increment;
      });
    }, 16); // 60 frames per second

    return () => {
      clearInterval(timer); // Cleanup the timer on component unmount
    };
  }, [endValue, increment]);

  return (
    <div className="count-to">
      <span>{count.toFixed(0)}</span>
    </div>
  );
};

export default CountUpComponent;
