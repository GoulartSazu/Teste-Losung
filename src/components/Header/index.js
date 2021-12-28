import React from 'react';
import { Pokedex } from './styles';
import { BsArrowDown } from 'react-icons/bs';

export default function Header() {
  return (
    <>
      <Pokedex>
        <section className="container">
          <div>
            <img alt="Logo Pokemon"src={require('../../assets/Pokeball-Large.png')}/>
            <h1>Pokédex</h1>
          </div>
          <div>
            <span>#</span>
            <BsArrowDown />
          </div>
        </section>
      </Pokedex>
    </>
  );
};
