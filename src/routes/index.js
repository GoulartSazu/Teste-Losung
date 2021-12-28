import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import PokemonInfos from '../pages/PokemonInfos';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:name" component={PokemonInfos} />
    </Switch>
  );
}
