import { render } from '@testing-library/react';
import { TodoList } from './index';

describe('when todolist component render', () => {
  test('Todo list string should render', () => {
    const component = render(<TodoList />);
    const titleString = 'TODO LIST';
    component.getByText(titleString);
  });
});
