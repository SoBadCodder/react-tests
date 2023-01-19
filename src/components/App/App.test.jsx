import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  it('App renders without learn react link', () => {
    render(<App />);
    const linkElement = screen.queryByText(/learn react/i);
    expect(linkElement).toBeNull();
  });

  it('typing in Searchbox works', () => {
    render(<App />);
    expect(screen.queryByDisplayValue(/React/)).toBeNull();

    userEvent.type(screen.getByRole('textbox'), 'React');

    expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument();
  });

  it('filter works', () => {
    render(<App />);
    expect(screen.getByText(/Vue/)).toBeInTheDocument();
    expect(screen.getByText(/JavaScript/)).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), 'java')

    expect(screen.queryByText(/Vue/)).toBeNull();

    expect(screen.queryByText(/JavaScript/)).toBeInTheDocument();
  });
})
