import React from 'react';
import Header from '../../components/Header';
import Pokemons from '../../components/Pokemons';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Teste - Losung
        </title>
      </Helmet>
      <Header />
      <Pokemons />
    </>
  );
}
