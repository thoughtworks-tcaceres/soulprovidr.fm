import React from 'react';
import PropTypes from 'prop-types';

const styles = (
  <style jsx>{`
    .hamburger,
    .hamburger:active,
    .hamburger:focus {
      outline: 0;
    }
  `}</style>
)

const propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func
};

const defaultProps = {
  isActive: false,
  onClick: () => null
};

function Hamburger({ isActive, onClick }) {
  return (
    <button
      className={`
        hamburger hamburger--slider
        pr-0
        ${isActive ? 'is-active' : ''}
      `}
      onClick={onClick}
      type="button"
    >
      {styles}
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}

Hamburger.propTypes = propTypes;
Hamburger.defaultProps = defaultProps;

export default Hamburger;