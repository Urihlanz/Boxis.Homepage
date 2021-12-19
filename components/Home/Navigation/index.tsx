import React from 'react';

import Item from './Item';
import { Navbar } from './styles';

type Props = {
  hasBurgerMenu?: boolean;
};

const links = [
  {
    title: 'О конструкторе',
    link: '#',
  },
  {
    title: 'Тарифы',
    link: '#',
  },
  {
    title: 'Отзывы',
    link: '#',
  },
  {
    title: 'Портфолио',
    link: '#',
  },
];

const Navigation: React.FC<Props> = ({ hasBurgerMenu = false }) => (
  <Navbar hasBurgerMenu={hasBurgerMenu}>
    {links.map((props, index) => (
      <Item
        key={index}
        link={props.link}
        title={props.title}
        hasBurgerMenu={hasBurgerMenu}
      />
    ))}
  </Navbar>
);

export default Navigation;
