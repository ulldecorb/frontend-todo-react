/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { App } from './App';

// beforeEach(() => {
//   const component = render(<App />);
//   return component;
// });
describe('when app component render', () => {
  test('component is render', () => {
    const component = render(<App />);
    expect(component.container).toHaveTextContent(/todo list/i);
  });
  test('message /start your list/ is render if empty list', () => {
    const component = render(<App />);
    expect(component.container).toHaveTextContent(/start your list/i);
  });
  test('message /good job/ is render if no tasks are pendent to complete', () => {
    const component = render(<App />);
    const addTask = component.getByPlaceholderText('Add new task');
    const button = component.getByTestId('addButton');
    addTask.value = 'new task';
    fireEvent.click(button);
    const checkbox = component.getByTestId('checkboxInput');
    fireEvent.click(checkbox);
    expect(component.container).toHaveTextContent(/good job/i);
  });
  test('message /There are 1/ is render if 1 task is pendent to complete', () => {
    const component = render(<App />);
    const addTask = component.getByPlaceholderText('Add new task');
    const button = component.getByTestId('addButton');
    addTask.value = 'new task';
    fireEvent.click(button);
    expect(component.container).toHaveTextContent(/There are 1/i);
  });
  test('click delete completed button delete completed tasks', () => {
    const component = render(<App />);
    const addInput = component.getByPlaceholderText('Add new task');
    const addButton = component.getByTestId('addButton');
    addInput.value = 'first task';
    fireEvent.click(addButton);
    const checkbox = component.getByTestId('checkboxInput');
    addInput.value = 'second task';
    fireEvent.click(addButton);
    const deleteButton = component.getByTestId('deleteCompletedButton');
    fireEvent.click(checkbox);
    fireEvent.click(deleteButton);
    expect(component.container).toHaveTextContent(/There are 1/i);
  });
  test('click delete task button delete task', () => {
    const component = render(<App />);
    const addInput = component.getByPlaceholderText('Add new task');
    const addButton = component.getByTestId('addButton');
    addInput.value = 'new task';
    fireEvent.click(addButton);
    const deleteButton = component.getByTestId('deleteTaskButton');
    fireEvent.click(deleteButton);
    expect(component.container).toHaveTextContent(/start/i);
  });
  test('update task must change task value', () => {
    const component = render(<App />);
    const addInput = component.getByPlaceholderText('Add new task');
    const addButton = component.getByTestId('addButton');
    addInput.value = 'new task';
    fireEvent.click(addButton);
    const input = component.getByTestId('taskInput');
    fireEvent.change(input, { target: { value: 'update task' } });
    expect(input.value).toBe('update task');
  });
});
