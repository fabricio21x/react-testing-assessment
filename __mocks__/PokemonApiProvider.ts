export const mockGetPokemonByName = jest.fn();
export const mockListPokemon = jest.fn();

const mock = jest.fn().mockImplementation(() => {
  return {
    getPokemonByName: mockGetPokemonByName,
    listPokemon: mockListPokemon,
  };
});

export default mock;
