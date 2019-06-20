import './style.css';

import { h, render } from 'preact';
import { environment, version } from '~environments';

const App = () => (
  <main>
    <h1 class="red">Hello World</h1>
    <p>Version: {version}</p>
    <p>Environment: {JSON.stringify(environment)}</p>
  </main>
);

render(<App />, document.body);
