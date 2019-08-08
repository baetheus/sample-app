import { h, render } from 'preact';
import { Router } from 'preact-router';
import { Home } from '~/routes/Home';
import { Item } from '~/routes/Item';

import { NotFound } from './routes/NotFound';

const App = () => (
  <Router>
    <Item path="/item/:id" />
    <Home path="/" />
    <NotFound default />
  </Router>
);

render(<App />, document.body);
