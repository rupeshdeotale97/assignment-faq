import "@testing-library/jest-dom";
import "jest-canvas-mock";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  })
);