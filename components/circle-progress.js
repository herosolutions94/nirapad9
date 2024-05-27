import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";

const ProgressProvider = ({ valueStart, valueEnd, children, color, text }) => {
  const [value, setValue] = useState(valueStart);
  const [ref, inView] = useInView({
    triggerOnce: false, // Set to false to trigger every time the component comes into view
    threshold: 0.5, // Amount of the component that must be visible to trigger
  });

  const timeoutIdRef = useRef(null);

  useEffect(() => {
    let currentValue = valueStart;

    const step = (valueEnd - valueStart) / 100; // Adjust this divisor for smoother/faster animation

    const incrementValue = () => {
      if (currentValue < valueEnd) {
        currentValue += step;
        setValue(Math.min(currentValue, valueEnd));
        timeoutIdRef.current = setTimeout(incrementValue, 10); // Adjust timeout for smoother/faster animation
      }
    };

    if (inView) {
      setValue(valueStart); // Reset value to start each time it comes into view
      incrementValue();
    } else {
      clearTimeout(timeoutIdRef.current);
    }

    return () => clearTimeout(timeoutIdRef.current);
  }, [inView, valueStart, valueEnd]);

  return (
    <div ref={ref}>
      <CircularProgressbar
        value={value}
        text={text || ""} // Use the provided text, or empty string if none provided
        styles={buildStyles({
          // Text styles here
          textSize: "20px",
          pathTransition: "none", // Disable path transition to keep the text stable
          pathColor: color || "#3e98c7", // Custom color for the progress bar
          textColor: "#000", // Black color for the text
        })}
      />
    </div>
  );
};

export default ProgressProvider;