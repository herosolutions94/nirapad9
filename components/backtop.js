import React, { useState, useEffect } from "react";

const BackTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > window.innerHeight * 0.2) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
        window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
  return (
    isVisible && (
        <button onClick={scrollToTop} className={isVisible ? "go_back show" : "go_back hide"} type="button" aria-label="Scroll to top"><img src="/images/CaretUp.svg" alt="" /></button>
    )
  );
};

export default BackTop;

