import { useRouter } from 'expo-router';
import { Image, ImageBackground, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { AppButton } from '~/components/core/button';
import { AppText } from '~/components/core/text';

export default function Home() {
  const { theme } = useStyles();
  const router = useRouter();
  return (
    <ImageBackground
      source={require('~/assets/images/intro-screen-bg.png')}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ paddingHorizontal: 20 }}>
        <Image source={require('~/assets/images/edutask-logo.png')} />
        <AppText
          darkColor
          style={{
            fontSize: 24,
            color: '#384250',
            textAlign: 'center',
            marginTop: -40,
            ...theme.typography.bold,
          }}>
          A classical Education for your future accessible anywhere, anytime
        </AppText>
        <AppButton
          title="Im new here"
          type="solid"
          color="#FFf"
          containerStyle={{
            marginTop: 30,
          }}
          onPress={() => router.push('/sign-up')}
        />
        <AppButton
          title="I have an  account"
          type="solid"
          titleStyle={{ color: '#fff' }}
          color={theme.colors.primary}
          containerStyle={{
            marginTop: 20,
          }}
          onPress={() => router.push('/sign-up')}
        />
        <AppText darkColor style={{ marginTop: 20, textAlign: 'center' }}>
          Are you an instructor?
          <AppText darkColor style={{ color: theme.colors.primary }}>
            {' '}
            Go here
          </AppText>
        </AppText>
      </View>
    </ImageBackground>
  );
}
