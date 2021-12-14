import { render } from '@testing-library/react';
import { App } from './App';

describe('When app component render', () => {
  test('App are in document', () => {
    const List = [{ id: '0', task: 'Run test', completed: true }];
    const component = render(<App todos={List} />);
    expect(component).toBeInTheDocument;
  });
});
