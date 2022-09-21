// import PokemonApiProvider, {
//   mockListPokemon,
//   mockGetPokemonByName,
// } from '../../__mocks__/PokemonApiProvider';
import PokemonApiProvider from '../provider/PokemonApiProvider';
import {getAllPokemons, getPokemonbyName} from './PokemonService';

describe('Test service', () => {
  it('getAllPokemons call provider once', () => {
    jest.spyOn(PokemonApiProvider, 'listPokemon');
    getAllPokemons();
    expect(PokemonApiProvider.listPokemon).toBeCalledTimes(1);
  });
  it('getAllPokemons call provider once', () => {
    jest.spyOn(PokemonApiProvider, 'getPokemonByName');
    getPokemonbyName('oddish');
    expect(PokemonApiProvider.getPokemonByName).toBeCalledTimes(1);
  });
});
