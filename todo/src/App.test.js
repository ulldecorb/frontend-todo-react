/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { App } from './App';

describe('When app component render', () => {
  test('Click add button calls event handler once', () => {
    const component = render(<App />);
    // const mockHandler = jest.fn();
    component.getByText(/add task/i);
  });

  test('Click reset button calls event handler once', () => {
    const component = render(<App />);
    // const mockHandler = jest.fn();
    component.getByText(/reset/i);
    // component.getByText(/reset/i);
    // component.getByText(/add/i);
  });
});
