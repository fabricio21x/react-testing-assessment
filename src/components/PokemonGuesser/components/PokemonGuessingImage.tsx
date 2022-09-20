import React from 'react';
import {
  PokemonGuessingImageProps,
  ResultState,
} from '../types';
import styled from 'styled-components';

interface Props {
  isGuessing: boolean;
  src: any;
}

const PokemonImage = styled.img<Props>`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.isGuessing ? 'black' : 'white')};
`;

export const PokemonGuessingImage = (props: PokemonGuessingImageProps) => {
  return (
    <PokemonImage
      isGuessing={props.state === ResultState.GUESSING}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props?.pokemon?.id}.png`}
    />
  );
};
