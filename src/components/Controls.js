import React from 'react';

const Controls = ({
  activeStat,
  handleReset
}) => {
  const [active, setActive] = activeStat;
  return (
    <div>
      <button
        className="btn btn-lg btn-outline-danger m-1"
        id="start_stop"
        onClick={() => setActive(!active)}
      >
        {active ? (
          <i className="fas fa-pause" />
        ) : (
          <i className="fas fa-play" />
        )}
      </button>
      <button
        className="btn btn-lg btn-outline-danger m-1"
        id="reset"
        onClick={handleReset}
      >
        <i className="fas fa-sync" />
      </button>
    </div>
  );
};

export default Controls;
