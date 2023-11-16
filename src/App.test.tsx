import { Router } from '@solidjs/router';
import { render, screen } from '@solidjs/testing-library';
import { App } from '@/App';

describe('app', () => {
  it('renders navbar with Home link', () => {
    render(() => (
      <Router>
        <App />
      </Router>
    ));
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
