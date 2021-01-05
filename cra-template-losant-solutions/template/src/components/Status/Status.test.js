import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Status from './Status';
import { server } from '../../mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('loads and displays output', () => {
  beforeEach(() => {
    render(
      <Status />
    );
  });

  test('renders loading message until loaded', async () => {
    screen.getByText(/Loading/i);
    await waitFor( () => expect(screen.queryByText(/Loading/i)).toBeNull() );
  });

  test('renders test status', async () => {
    await screen.findByText(/ok/);
  });

});
