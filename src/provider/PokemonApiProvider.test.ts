import PokemonApiProvider from './PokemonApiProvider';
describe('Test API provider', () => {
  it('correctly calls functions', () => {
    const provider = PokemonApiProvider;
    jest.spyOn(provider, 'getPokemonByName');
    jest.spyOn(provider, 'listPokemon');
    provider.getPokemonByName('oddish');
    provider.listPokemon();

    expect(provider.getPokemonByName).toHaveBeenCalledTimes(1);
    expect(provider.listPokemon).toHaveBeenCalledTimes(1);
  });
});
