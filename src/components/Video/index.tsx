import React, { useState } from 'react';

import {
  Container,
  OverlayText,
  PlayButton,
  PlayTriangle,
  Subtitle,
  Text,
  Title,
  VideoBlock,
  VideoInner,
  VideoOverlay,
  VideoPlayer,
  Wrapper,
} from './styles';

const Video: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Text>
          <Title>Видео о конструкторе</Title>
          <Subtitle>
            Начните принимать заказы уже через несколько минут после регистрации
          </Subtitle>
        </Text>
        <VideoBlock>
          <VideoInner>
            {isActive ? (
              <VideoPlayer
                src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            ) : (
              <VideoOverlay onClick={() => setIsActive(true)}>
                <PlayButton>
                  <PlayTriangle />
                </PlayButton>
                <OverlayText>Смотреть видео о конструкторе</OverlayText>
              </VideoOverlay>
            )}
          </VideoInner>
        </VideoBlock>
      </Container>
    </Wrapper>
  );
};

export default Video;
