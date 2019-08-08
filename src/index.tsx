import { h, render } from 'preact';
import { Router } from 'preact-router';
import { Home } from '~/routes/Home';
import { Item } from '~/routes/Item';
import { Test } from '~/routes/Test';

const App = () => (
  <Router>
    <Home path="/home" />
    <Item path="/item/:id" />
    <Test default />
  </Router>
);

render(<App />, document.body);
