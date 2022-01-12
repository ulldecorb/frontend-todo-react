/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { TodoItem } from './index';

describe('When component renders', () => {
  test('delete button calls onClick prop when clicked', () => {
    const mockHandler = jest.fn();
    const mockTodo = { id: '1', task: 'complete test', completed: false };
    const component = render(<TodoItem
      todo={mockTodo}
      handleDeleteTask={mockHandler}
      handleUpdateTask={mockHandler}
      handleToggleTodoCheck={mockHandler}
    />);
    const button = component.getByTestId('deleteSingleTaskButton');
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
  test('Click the delete button calls event handler once', () => {
    const mockHandler = jest.fn();
    const mockTodo = { id: '1', task: 'complete test', completed: false };
    const component = render(<TodoItem
      todo={mockTodo}
      handleDeleteTask={mockHandler}
      handleUpdateTask={mockHandler}
      handleToggleTodoCheck={mockHandler}
    />);
    const input = component.getByTestId('taskInput');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
  test('click the checkbox calls event handler once', () => {
    const mockHandler = jest.fn();
    const mockTodo = { id: '1', task: 'complete test', completed: false };
    const component = render(<TodoItem
      todo={mockTodo}
      handleDeleteTask={mockHandler}
      handleUpdateTask={mockHandler}
      handleToggleTodoCheck={mockHandler}
    />);
    const input = component.getByTestId('checkboxInput');
    fireEvent.click(input);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
