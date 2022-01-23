import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

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
          <Title>
            <FormattedMessage id='video.title' />
          </Title>
          <Subtitle>
            <FormattedMessage id='video.subtitle' />
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
                <OverlayText>
                  <FormattedMessage id='video.overlay.text' />
                </OverlayText>
              </VideoOverlay>
            )}
          </VideoInner>
        </VideoBlock>
      </Container>
    </Wrapper>
  );
};

export default Video;
