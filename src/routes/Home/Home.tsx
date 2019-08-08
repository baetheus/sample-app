import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router';
import { environment, version } from '~/environments';

export interface HomeProps {}

export const range = (length: number, start: number = 0) =>
  Array.from({ length }, (_, i) => start + i);

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
        <ul>
          {range(10, 1).map(i => (
            <li>
              <Link href={`/item/${i}`}>Item {i}</Link>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
};
