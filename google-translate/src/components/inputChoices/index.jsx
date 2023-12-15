import React from "react";

const Choises = () => {
  return (
    <>
      <div className="choises">
        <input className="choice" type="radio" id="english" name="language" />
        <label htmlFor="english">English</label>
        <input type="radio" id="uzbek" name="language" />
        <label htmlFor="uzbek">Uzbek</label>
        <input type="radio" id="russian" name="language" />
        <label htmlFor="russian">Russian</label>
      </div>
    </>
  );
};

export default Choises;
