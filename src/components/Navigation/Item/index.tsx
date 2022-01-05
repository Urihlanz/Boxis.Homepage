import React from 'react';

import { NavLink } from './styles';

type Props = {
  title: string;
  link: string;
  hasBurgerMenu?: boolean;
};

const Item: React.FC<Props> = ({ title, link, hasBurgerMenu = false }) => (
  <NavLink hasBurgerMenu={hasBurgerMenu} href={link}>
    {title}
  </NavLink>
);

export default Item;
