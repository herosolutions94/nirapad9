'use client'
import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";

const ProgressProvider = ({ valueStart, valueEnd, children, color, text }) => {
  const [value, setValue] = useState(valueStart);
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger only once when the component comes into view
    threshold: 0.5, // Amount of the component that must be visible to trigger
  });

  useEffect(() => {
    let currentValue = valueStart;
    let timeoutId;

    const step = (valueEnd - valueStart) / 100; // Adjust this divisor for smoother/faster animation

    const incrementValue = () => {
      if (currentValue < valueEnd) {
        currentValue += step;
        setValue(Math.min(currentValue, valueEnd));
        timeoutId = setTimeout(incrementValue, 10); // Adjust timeout for smoother/faster animation
      }
    };

    if (inView) {
      incrementValue();
    } else {
      clearTimeout(timeoutId);
    }

    return () => clearTimeout(timeoutId);
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

