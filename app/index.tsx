import { ImageBackground } from 'react-native';

export default function Home() {
  return (
    <ImageBackground
      source={require('~/assets/images/intro-screen-bg.png')}
      style={{ flex: 1 }}></ImageBackground>
  );
}
