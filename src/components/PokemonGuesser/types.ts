import {Pokemon} from 'pokenode-ts';

export enum ResultState {
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
  GUESSING = 'GUESSING',
}

export type PresentationalProps = {
  isLoading: boolean;
  pokemon: Pick<Pokemon, 'id'> | null;
  state: ResultState;
  onCheck: (name: any) => void;
  onRetry: () => void;
};

export type PokemonGuessingImageProps = {
  id: string;
  state: ResultState;
  pokemon: Pick<Pokemon, 'id'> | null;
  isGuessing: boolean;
};
