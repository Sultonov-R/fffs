import React from "react";
import './index.css'

const TextArea = () => {
  return (
    <>
      <div className="textarea">
        <textarea
          name="message"
          placeholder="Type your message here.." 
        ></textarea>
      </div>
    </>
  );
};

export default TextArea