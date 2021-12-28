import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Line } from 'rc-progress';
import { FaRulerVertical, FaWeight } from 'react-icons/fa';
import { NameMenu, SlidePokemon, About, Stats } from './styles';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default function PokemonInfos() {
 
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();


  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((r) => r.json())
      .then((json) => {
        setPokemon(json);
      });
  }, [name]);

  if (!pokemon) {
    return null;
  }
  return (
    <>
        <NameMenu className={pokemon.types[0].type.name}>
          <Link to="/">
            <BsArrowLeft /> 
          </Link>
          <h1>{pokemon.name}</h1>
          <span>{`#${pokemon.id}`}</span>
        </NameMenu>

        <SlidePokemon className={pokemon.types[0].type.name}>
          <img alt="Pokeball"className="bigPokeball"src={require('../../assets/PokeballBig.png')}/>
          <Slider {...settings}>
            <div className="slide">
              <img alt="Pokeball"className="picPokemon"
              src={pokemon.sprites.other.dream_world.front_default}/>
            </div>
            <div className="slide">
              <img alt="Pokeball"className="picPokemon"
              src={pokemon.sprites.other.home.front_default}/>
            </div>
            <div className="slide">
              <img alt="Pokeball"className="picPokemon"
              src={pokemon.sprites.other.home.front_shiny}/>
            </div>
          </Slider>
        </SlidePokemon>

        <About>
          <h3 className={`${pokemon.types[0].type.name} type`}>{pokemon.types[0].type.name}</h3>
          <h2 className={pokemon.types[0].type.name}>About</h2>
          <div className="infos">
            <div className="weight">
              <div>
                <FaWeight />
                <p>{`${pokemon.weight} kg`}</p>
              </div>
              <span>Weight</span>
            </div>
            <div className="height">
              <div>
                <FaRulerVertical />
                <p>{`${pokemon.height} m`}</p>
              </div>
              <span>Height</span>
            </div>
            <div className="moves">
              <div>
                <p>{pokemon.moves[0].move.name}</p>
                <p>{pokemon.moves[1].move.name}</p>
              </div>
              <span>Moves</span>
            </div>
          </div>
          <p className="description container">
          {`The ${pokemon.name} is a ${pokemon.types[0].type.name}  pokemon, 
          its weight is approximately ${pokemon.weight} kg and has 
          a height of ${pokemon.height} meters. Its main thrusts are 
          ${pokemon.moves[0].move.name} and ${pokemon.moves[1].move.name}`}
          </p>
        </About>

        <Stats>
          <h2 className={pokemon.types[0].type.name}>Base Stats</h2>
          <section className="container">
            <ul className="powers">
              <li className={pokemon.types[0].type.name}>HP</li>
              <li className={pokemon.types[0].type.name}>ATK</li>
              <li className={pokemon.types[0].type.name}>DEF</li>
              <li className={pokemon.types[0].type.name}>SATK</li>
              <li className={pokemon.types[0].type.name}>SDEF</li>
              <li className={pokemon.types[0].type.name}>SPD</li>
            </ul>

            <ul>
              <li>{pokemon.stats[0].base_stat}</li>
              <li>{pokemon.stats[1].base_stat}</li>
              <li>{pokemon.stats[2].base_stat}</li>
              <li>{pokemon.stats[3].base_stat}</li>
              <li>{pokemon.stats[4].base_stat}</li>
              <li>{pokemon.stats[5].base_stat}</li>
            </ul>

            <ul className="progress">
              <li><Line percent={pokemon.stats[0].base_stat} strokeWidth="2" 
              trailWidth ="2" strokeColor="#DF4726" trailColor="#E0E0E0" /></li>
              <li><Line percent={pokemon.stats[1].base_stat} strokeWidth="2" 
              trailWidth ="2" strokeColor="#DF4726" trailColor="#E0E0E0" /></li>
              <li><Line percent={pokemon.stats[2].base_stat} strokeWidth="2" 
              trailWidth ="2" strokeColor="#DF4726" trailColor="#E0E0E0" /></li>
              <li><Line percent={pokemon.stats[3].base_stat} strokeWidth="2" 
              trailWidth ="2" strokeColor="#DF4726" trailColor="#E0E0E0" /></li>
              <li><Line percent={pokemon.stats[4].base_stat} strokeWidth="2" 
              trailWidth ="2" strokeColor="#DF4726" trailColor="#E0E0E0" /></li>
              <li><Line percent={pokemon.stats[5].base_stat} strokeWidth="2" 
              trailWidth ="2" strokeColor="#DF4726" trailColor="#E0E0E0" /></li>
            </ul>
          </section>

        </Stats>
    </>
  );
};
