import React from 'react';

import { NavLink } from './styles';

type Props = {
  title: string;
  link: string;
};

const Item: React.FC<Props> = ({ title, link }) => (
  <NavLink href={link}>{title}</NavLink>
);

export default Item;
