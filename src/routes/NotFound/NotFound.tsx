import { FunctionalComponent, h } from 'preact';

export interface NotFoundProps {}

/**
 * @name NotFound
 * @example
 * <NotFound />
 */
export const NotFound: FunctionalComponent<NotFoundProps> = () => {
  return <section>Page Not Found</section>;
};
