import React from 'react';

import Item from './Item';
import { Navbar } from './styles';

type Link = {
  title: string;
  link: string;
};

const links: Link[] = [
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

const Navigation: React.FC = () => (
  <Navbar>
    {links.map((props: Link, index) => (
      <Item link={props.link} title={props.title} key={index} />
    ))}
  </Navbar>
);

export default Navigation;
