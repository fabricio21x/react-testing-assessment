import React from 'react';
import App from '../src/App';
import {renderWithProviders} from '../jest/utils';
import {pokemons} from '../__mocks__/pokemons';
import {fireEvent, waitFor} from '@testing-library/dom';

const mockPokemons = pokemons;

jest.mock('../src/services/PokemonService', () => ({
  getPokemonbyName: async (name: string) => {
    return mockPokemons.find((p) => p.name === name);
  },
  getAllPokemons: () => mockPokemons,
}));

jest.mock('../src/constants', () => ({
  MAX_POKEMON_QUANTITY: 0,
}));

describe('App integration test', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('shows a random pokemon', async () => {
    const {queryByTestId, queryByText} = renderWithProviders(<App />);

    await waitFor(() => {
      const imgContainer = queryByTestId('guesser-img');
      const submitBtn = queryByText('Check');
      const textInput = queryByTestId('pokemon-input');

      expect(submitBtn).not.toBeNull();
      expect(imgContainer).not.toBeNull();
      expect(textInput).not.toBeNull();
    });
  });

  it('guess wrong name', async () => {
    const {queryByTestId, queryByText} = renderWithProviders(<App />);

    await waitFor(() => {
      const submitBtn = queryByText('Check');
      const textInput = queryByTestId('pokemon-input');

      fireEvent.change(textInput!, {target: {value: 'random text'}});
      fireEvent.click(submitBtn!);

      const resultText = queryByText("Oops, That's wrong");
      const resultBtn = queryByText('Try again');

      expect(resultText).not.toBeNull();
      expect(resultBtn).not.toBeNull();
    });
  });

  it('guess correct name', async () => {
    const {queryByTestId, queryByText} = renderWithProviders(<App />);

    await waitFor(() => {
      const submitBtn = queryByText('Check');
      const textInput = queryByTestId('pokemon-input');

      fireEvent.change(textInput!, {target: {value: 'oddish'}});
      fireEvent.click(submitBtn!);

      const resultText = queryByText('Excellent!!');
      const resultBtn = queryByText('Keep playing');

      expect(resultText).not.toBeNull();
      expect(resultBtn).not.toBeNull();
    });
  });

  it('restarts game after successful guess', async () => {
    const {queryByTestId, queryByText} = renderWithProviders(<App />);

    await waitFor(() => {
      const submitBtn = queryByText('Check');
      const textInput = queryByTestId('pokemon-input');

      fireEvent.change(textInput!, {target: {value: 'oddish'}});
      fireEvent.click(submitBtn!);

      const resultBtn = queryByText('Keep playing');

      fireEvent.click(resultBtn!);

      expect(queryByText('Check')).not.toBeNull();
    });
  });
  it('restarts game after wrong guess', async () => {
    const {queryByTestId, queryByText} = renderWithProviders(<App />);

    await waitFor(() => {
      const submitBtn = queryByText('Check');
      const textInput = queryByTestId('pokemon-input');

      fireEvent.change(textInput!, {target: {value: 'random'}});
      fireEvent.click(submitBtn!);

      const resultBtn = queryByText('Try again');

      fireEvent.click(resultBtn!);
      expect(queryByText('Check')).not.toBeNull();
    });
  });
});
