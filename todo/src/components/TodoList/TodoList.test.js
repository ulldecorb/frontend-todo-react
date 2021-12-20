/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { TodoList } from './index';

describe('when todolist component render', () => {
  test('Title must display', () => {
    const component = render(<TodoList todos={[]} />);
    component.getByText(/TODO LIST/i);
  });

  test('Empty list must display text', () => {
    const mockTodos = [];
    const component = render(<TodoList todos={mockTodos} />);
    expect(component.container).toHaveTextContent(/Job!/i);
  });

  test('List must display text', () => {
    const mockTodos = [{ id: 1, task: 'test', completed: false }];
    const component = render(<TodoList todos={mockTodos} />);
    expect(component.container).toHaveTextContent(/test/i);
  });
});
