import React from 'react';

import { NavLink } from './styles';

type Props = {
  title: string;
  link: string;
  stackedMenu?: boolean;
};

const Item: React.FC<Props> = ({ title, link, stackedMenu = false }) => (
  <NavLink stackedMenu={stackedMenu} href={link}>
    {title}
  </NavLink>
);

export default Item;
