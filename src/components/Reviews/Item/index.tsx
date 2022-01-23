import React from 'react';

import { Image } from '../../styles';
import {
  Avatar,
  Body,
  CreationDate,
  Header,
  PersonInfo,
  UserName,
  Wrapper,
} from './styles';

type Props = {
  userAvatar: string;
  userName: string;
  date: string;
  text: string;
};

const Item: React.FC<Props> = ({ userAvatar, userName, date, text }) => (
  <Wrapper>
    <Header>
      <Avatar>
        <Image
          width='56px'
          height='56px'
          src={userAvatar}
          alt='Profile photo of user'
        />
      </Avatar>
      <PersonInfo>
        <UserName>{userName}</UserName>
        <CreationDate>{date}</CreationDate>
      </PersonInfo>
    </Header>
    <Body>“{text}”</Body>
  </Wrapper>
);

export default Item;
