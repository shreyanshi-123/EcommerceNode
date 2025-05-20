import React, { useState, useEffect, useRef } from 'react';

const ConditionalClassComponent = () => {
  // Create a reference for the element to check its display style
  const elementRef = useRef(null);
  const [isBlock, setIsBlock] = useState(false);

  // Use useEffect to check the display style after the component mounts
  useEffect(() => {
    // Get the computed style of the element
    if (elementRef.current) {
      const style = window.getComputedStyle(elementRef.current);
      if (style.display === 'block') {
        setIsBlock(true);  // If it's 'block', set state to true
      } else {
        setIsBlock(false); // Otherwise, set state to false
      }
    }
  }, []); // Empty dependency array to run only once when component mounts

  return (
    <div
      ref={elementRef}
      className={isBlock ? 'block-class' : ''}  // Conditionally apply 'block-class'
      style={{ display: 'block' }} // Make sure the element starts with display: block
    >
      <h1>This is a block element</h1>
      <p>The class "block-class" will be applied if display is set to "block".</p>
    </div>
  );
};

export default ConditionalClassComponent;
