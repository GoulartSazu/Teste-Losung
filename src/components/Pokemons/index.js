import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getPokemonData, getPokemons } from "../../services/api";
import { Link } from 'react-router-dom';
import { Char, Procurar, Flex } from './styles';
import { MdSearch } from 'react-icons/md';
import { GiReturnArrow } from 'react-icons/gi';

export default function Pokemon() {

  const filterRef = useRef();
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsFiltered, setPokemonsFiltered] = useState([]);
  const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/';

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(pokemons);
    setPokemonsFiltered (pokemons.filter((
      pokemonFilter => pokemonFilter.name.includes(filterRef.current?.value))))
    console.log(pokemonsFiltered)

  }, [pokemons]);

  const handleAll = ()=>{
    setPokemonsFiltered([]);
  }

  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon/?offset=00&limit=100')
  //     .then((r) => r.json())
  //     .then((json) => {
  //       const result = json.results;
  //       const pokemonsAll = result.map(({name,url})=>{  
  //         ({
  //           type: pokemonsType,
  //           name,
  //           id: url.match(/\/(\d+)\//)[1],
  //         })}
  //       )
  //       setPokemons(pokemonsAll);
  //       console.log(pokemonsType)
  //     });
  // }, [pokemons]);
  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(150,0);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      console.log(results)
      
    } catch (err) {}
  };

  useEffect(() => {
      fetchPokemons();
  }, []);



  return (
    <>
      <Procurar>
        <section className="container">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite o nome do Pokemon" ref={filterRef} />
            <div>
              <button type="submit"><MdSearch size={30}/>Procurar</button>
              <button type="button" onClick={handleAll}><GiReturnArrow size={30}/>Todos</button>
            </div>
          </form>
         
        </section>
      </Procurar>

      <Flex className="container">
        {pokemonsFiltered.length === 0 ? pokemons.map((pokemon) => (
          <Char key={pokemon.id}>
            <Link to={`/${pokemon.name}`}>
              <section className={`card ${pokemon.types[0].type.name}`}>
                <span className={pokemon.types[0].type.name}>{`#${pokemon.id}`}</span>
                <img alt="Logo Pokemon"src={`${imageUrl}dream-world/${pokemon.id}.svg`}/>
                <h2 className={pokemon.types[0].type.name}>{pokemon.name}</h2>
              </section>
            </Link>
          </Char>
          )) : pokemonsFiltered.map((pokemon) => (
            <Char key={pokemon.id}>
            <Link to={`/${pokemon.name}`}>
              <section className={`card ${pokemon.types[0].type.name}`}>
                <span className={pokemon.types[0].type.name}>{`#${pokemon.id}`}</span>
                <img alt="Logo Pokemon"src={`${imageUrl}dream-world/${pokemon.id}.svg`}/>
                <h2 className={pokemon.types[0].type.name}>{pokemon.name}</h2>
              </section>
            </Link>
          </Char>
          ))
        }
      </Flex>
    </>
  );
};