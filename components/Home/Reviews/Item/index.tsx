import Image from 'next/image';
import React from 'react';

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
          width={56}
          height={56}
          src={userAvatar}
          alt='Profile photo of user'
        />
      </Avatar>
      <PersonInfo>
        <UserName>{userName}</UserName>
        <CreationDate>{date}</CreationDate>
      </PersonInfo>
    </Header>
    <Body>{text}</Body>
  </Wrapper>
);

export default Item;
