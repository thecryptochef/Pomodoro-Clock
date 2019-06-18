import React from 'react';

const TimeSet = ({ type, value }) => {
  const [val, setVal] = value;
  const handleIncrement = () => {
    if (val >= 60) {
      return null;
    } else {
      setVal(val + 1);
    }
  };
  const handleDecrement = () => {
    if (val === 1) {
      return null;
    } else {
      setVal(val - 1);
    }
  };

  return (
    <div>
      <h3 id={`${type.toLowerCase()}-label`}>
        {type} Length
      </h3>

      <button
        id={`${type.toLowerCase()}-decrement`}
        className="btn btn-sm btn-outline-info mr-3"
        onClick={handleDecrement}
      >
        <i className="fas fa-minus" />
      </button>
      <span
        id={`${type.toLowerCase()}-length`}
      >
        {val}
      </span>
      <button
        id={`${type.toLowerCase()}-increment`}
        className="btn btn-sm btn-outline-info ml-3"
        onClick={handleIncrement}
      >
        <i className="fas fa-plus" />
      </button>
    </div>
  );
};

export default TimeSet;
