/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { TodoItem } from './index';

describe('When component renders', () => {
  test('Component must be render', () => {
    const mockTodo = { id: 1, task: 'complete test', completed: false };
    // const mockHandler = jest.fn();
    const component = render(<TodoItem todo={mockTodo} />);

    expect(component.container).toHaveTextContent(/update/i);
  });
  test('Click the delete button calls event handler once', () => {
    const mockHandler = jest.fn();
    const mockTodo = { id: 1, task: 'complete test', completed: false };
    const component = render(<TodoItem todo={mockTodo} handleDeleteTask={mockHandler} />);
    const button = component.getByText(/delete/i);
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
  test('Click the update button calls event handler once', () => {
    const mockHandler = jest.fn();
    const mockTodo = { id: 1, task: 'complete test', completed: false };
    const component = render(<TodoItem todo={mockTodo} handleUpdateTask={mockHandler} />);
    const button = component.getByText(/update/i);
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
