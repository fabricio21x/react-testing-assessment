import {render, RenderOptions} from '@testing-library/react';
import React, {FC, ReactElement} from 'react';
import {PokemonProvider} from '../src/context/PokemonContext';

interface ProvidersProps {
  children: React.ReactNode;
}
export const AllTheProviders: FC<ProvidersProps> = ({children}) => {
  return (
    <PokemonProvider>
      <>{children}</>
    </PokemonProvider>
  );
};

export const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options});
