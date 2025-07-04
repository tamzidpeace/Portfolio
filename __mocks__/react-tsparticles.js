import React from 'react';

export const Particles = (props) => {
  return <div data-testid="mock-particles" {...props}></div>;
};

export const loadFull = jest.fn();