import React from 'react';
import { FormattedMessage } from 'react-intl';

import { NavLink } from './styles';

type Props = {
  title: string;
  link: string;
};

const Item: React.FC<Props> = ({ title, link }) => (
  <NavLink href={link}>
    <FormattedMessage id={title} />
  </NavLink>
);

export default Item;
