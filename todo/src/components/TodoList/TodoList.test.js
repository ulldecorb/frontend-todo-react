/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { TodoList } from './index';

describe('when todolist component render', () => {
  test('List must display text', () => {
    const mockTodos = [{ id: '1', task: 'test', completed: false }];
    const mockHandler = jest.fn();
    const component = render(<TodoList
      todos={mockTodos}
      handleDeleteTask={mockHandler}
      handleUpdateTask={mockHandler}
      handleToggleTodoCheck={mockHandler}
    />);
    const input = component.getByTestId('taskInput').value;
    expect(input).toBe('test');
  });
});
