import React, { useState, useEffect } from 'react';
import Typist from 'react-typist';

const TypewriterEffect = ({ textArray, backspace, prefix, suffix }: { textArray: string[], backspace: boolean, prefix: string, suffix: string }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (!typing) {
      const timer = setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        setTyping(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [typing, textArray.length]);

  return (
    <div className='flex'>
      {prefix}
      <div className="spacer" style={{ width: 10 }}> </div>

      {typing ? (
        <u>
          <Typist onTypingDone={() => setTyping(false)}>
            <Typist.Delay ms={500} />
            {textArray[textIndex]}
            {backspace && <Typist.Backspace count={textArray[textIndex].length} delay={2000} />}
          </Typist>
        </u>
      ) : (
        ""
      )}
     {suffix}
    </div>
  );
};

export default TypewriterEffect;