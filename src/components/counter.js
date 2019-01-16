import React from "react";
import PropTypes from "prop-types";

const Counter = ({ currentCo2, currentTemp }) => (
  <div
    css={`
      background-color: #fafafa;
      border: 1px solid #ccc;
      padding: 0 1rem;
      margin: 2.5rem 0;
      border-radius: 6px;
      text-align: center;
      box-shadow: 0px 4px 8px 0px rgba(34, 34, 34, 0.2);
    `}
  >
    <h2
      css={`
        margin-top: 0;
      `}
    >
      Climate vital signs
    </h2>
    <div
      css={`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        > div {
          flex-grow: 1
          min-height: 80px;
          padding: 0 1.5rem 2rem;
          > div {
            font-size: 0.9rem;
          }
          > strong {
            padding-top: 0.75rem;
            display: block;
            font-weight: bold;
            font-size: 1.5rem;
          }
        }
      `}
    >
      <div>
        <div>Atmospheric CO2</div>
        <strong id="currentCo2Counter">{currentCo2}ppm</strong>
      </div>
      <div>
        <div>Global temperature deviation from average</div>
        <strong id="currentTempCounter">+{currentTemp}°C</strong>
      </div>
    </div>
  </div>
);

Counter.propTypes = {
  currentCo2: PropTypes.number.isRequired,
  currentTemp: PropTypes.number.isRequired
};

export default Counter;
