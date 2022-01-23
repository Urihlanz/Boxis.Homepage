import React from 'react';

import Item from './Item';
import { Navbar } from './styles';

type Link = {
  title: string;
  link: string;
};

const links: Link[] = [
  {
    title: 'navigation.about_constructor',
    link: '#',
  },
  {
    title: 'navigation.tariffs',
    link: '#',
  },
  {
    title: 'navigation.reviews',
    link: '#',
  },
  {
    title: 'navigation.example',
    link: '#',
  },
];

const Navigation: React.FC = () => (
  <Navbar>
    {links.map((props: Link, index) => (
      <Item key={index} link={props.link} title={props.title} />
    ))}
  </Navbar>
);

export default Navigation;
