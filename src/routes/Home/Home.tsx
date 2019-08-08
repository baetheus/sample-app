import { FunctionalComponent, h } from 'preact';
import { environment, version } from '~/environments';

export interface HomeProps {}

/**
 * @name Home
 * @example
 * <Home />
 */
export const Home: FunctionalComponent<HomeProps> = () => {
  return (
    <main>
      <h1>Home Page</h1>
      <article>
        <h1>Hello World</h1>
        <p>Version: {version}</p>
        <p>Environment: {JSON.stringify(environment)}</p>
      </article>
    </main>
  );
};
