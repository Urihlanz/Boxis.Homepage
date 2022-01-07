import React from 'react';

import Item from './Item';
import { Navbar } from './styles';

type Props = {
  stackedMenu?: boolean;
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

const Navigation: React.FC<Props> = ({ stackedMenu = false }) => (
  <Navbar stackedMenu={stackedMenu}>
    {links.map((props, index) => (
      <Item
        key={index}
        link={props.link}
        title={props.title}
        stackedMenu={stackedMenu}
      />
    ))}
  </Navbar>
);

export default Navigation;
