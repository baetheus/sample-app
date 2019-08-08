import { FunctionalComponent, h } from 'preact';

export interface ItemProps {
  id?: string;
}

/**
 * @name Item
 * @example
 * <Item />
 */
export const Item: FunctionalComponent<ItemProps> = ({ id = 'UNKNOWN' }) => {
  return <section>Item: {id}</section>;
};
