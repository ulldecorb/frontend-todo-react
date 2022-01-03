/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { App } from './App';

describe('When app component render', () => {
  test('Click add button calls event handler once', () => {
    const mockHandler = jest.fn();
    const component = render(<App />);
    const addTaskHandle = component.getByText(/add task/i);
    addTaskHandle.onclick = mockHandler;
    fireEvent.click(addTaskHandle);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  test('Click reset button calls event handler once', () => {
    const mockHandler = jest.fn();
    const component = render(<App />);
    const addTaskHandle = component.getByText(/reset/i);
    addTaskHandle.onclick = mockHandler;
    fireEvent.click(addTaskHandle);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
  test('Empty list must display /good job/ text', () => {
    // const todos = [];
    // const mockHandler = jest.fn();
    const component = render(<App />);
    expect(component.container).toHaveTextContent(/Job!/i);
  });
});
