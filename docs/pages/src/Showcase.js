/* @flow */

import * as React from 'react';
import { styled } from 'linaria/react';
import color from 'color';

import GooglePlayIcon from '../../components/google-play-icon';
import IphoneIcon from '../../components/iphone-icon';

type Data = {
  color: string,
  name: string,
  image: string,
  android?: string,
  ios?: string,
};

const data: Data[] = [
  {
    color: '#673AB7',
    name: 'Showman',
    image: 'showcase/showman.png',
  },
];

export default class Showcase extends React.Component<{}> {
  render() {
    return (
      <Container>
        <Content>
          <h1>Who&apos;s using Paper?</h1>
          <p>
            Check out these apps built using Paper. Send us a{' '}
            <a
              href="https://github.com/callstack/react-native-paper/pulls"
              target="_blank"
              rel="noopener noreferrer"
            >
              pull request
            </a>{' '}
            to add your app to this list.
          </p>
        </Content>
        <Gallery>
          {data.map(item => {
            const tintColor = color(item.color).light() ? '#000000' : '#FFFFFF';
            return (
              <div key={item.image}>
                <ImageContainer>
                  <Image src={item.image} alt="" />
                  <Info style={{ backgroundColor: item.color }}>
                    <AppName
                      style={{
                        color: tintColor,
                      }}
                    >
                      {item.name}
                    </AppName>
                    <BadgeContainer>
                      <a
                        href={item.android || null}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ opacity: item.android ? 1 : 0.4 }}
                      >
                        <GooglePlayIcon color={tintColor} />
                      </a>
                      <Separation />
                      <a
                        href={item.ios || null}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ opacity: item.ios ? 1 : 0.4 }}
                      >
                        <IphoneIcon color={tintColor} />
                      </a>
                    </BadgeContainer>
                  </Info>
                </ImageContainer>
              </div>
            );
          })}
        </Gallery>
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 24px 0;
  width: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

const Content = styled.div`
  padding: 0 48px;

  @media (max-width: 680px) {
    padding: 0 16px;
  }
`;

const AppName = styled.h3`
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 12px;
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 8px 38px;
  min-width: 0;

  @media (max-width: 680px) {
    justify-content: center;
    padding: 8px 16px;
  }
`;

const Info = styled.div`
  height: 96px;
  padding: 12px;
  transform: translateY(0);
  transition: 150ms;
`;

const ImageContainer = styled.div`
  height: ${480 + 48}px;
  width: auto;
  overflow: hidden;
  margin: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:hover,
  &:focus {
    .${Info} {
      transform: translateY(-48px);
    }
  }

  @media (max-width: 680px) {
    margin: 10px 0;
  }
`;

const Image = styled.img`
  display: block;
  max-height: 480px;
  width: auto;
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  padding-left: 3px;
`;

const Separation = styled.div`
  margin: 0 10px;
`;
