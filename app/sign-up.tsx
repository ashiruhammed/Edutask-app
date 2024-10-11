import { useRouter } from 'expo-router';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';
import { AppButton } from '~/components/core/button';
import { AppText } from '~/components/core/text';
import GoogleIcon from '~/components/icons/googe-icon';

const Page = () => {
  const { theme } = useStyles();
  const router = useRouter();
  return (
    <ImageBackground source={require('~/assets/images/sign-up-bg.jpg')} style={{ flex: 1 }}>
      <SafeAreaView edges={['top']} />
      <AppText
        darkColor
        style={{
          color: theme.colors.primary,
          fontSize: 16,
          marginLeft: 8,
          marginTop: 50,
          ...theme.typography.bold,
        }}>
        Sign Up later
      </AppText>
      <ImageBackground
        imageStyle={{
          height: 188,
        }}
        style={{ marginTop: 30, paddingVertical: 24, alignItems: 'center' }}
        source={require('~/assets/images/sign-up-card-bg.png')}>
        <AppText
          style={[
            theme.typography.bold,
            {
              fontSize: 30,
            },
          ]}>
          EduAfrica
        </AppText>
        <AppText
          style={[
            theme.typography.bold,
            {
              fontSize: 26,
              textAlign: 'center',
            },
          ]}>
          Pursue your interests with flexible and self-paced online courses
        </AppText>
      </ImageBackground>
      <AppText
        darkColor
        style={{
          fontSize: 24,
          color: '#384250',
          textAlign: 'center',
          marginTop: 80,
          ...theme.typography.bold,
        }}>
        Create account
      </AppText>
      <View style={{ paddingHorizontal: 20 }}>
        <AppButton
          title="Continue with email"
          type="solid"
          titleStyle={{ color: '#fff' }}
          color={theme.colors.primary}
          containerStyle={{
            marginTop: 20,
          }}
          onPress={() => router.push('/(snoop)/')}
        />
        <AppText
          darkColor
          style={{ marginVertical: 24, textAlign: 'center', ...theme.typography.semiBold }}>
          OR
        </AppText>
        <AppButton
          title="Continue with Google"
          type="solid"
          titleStyle={theme.typography.semiBold}
          color="#FFf"
          iconPosition="left"
          icon={
            <View style={{ marginRight: 14 }}>
              <GoogleIcon />
            </View>
          }
          onPress={() => router.push('/(snoop)/')}
        />
        <AppText darkColor style={{ marginTop: 15, textAlign: 'center' }}>
          By Proceeding, you agree to EduAfrica{' '}
          <AppText
            style={{
              ...theme.typography.semiBold,
            }}
            darkColor>
            Terms of services
          </AppText>{' '}
          and policy{' '}
          <AppText
            style={{
              ...theme.typography.semiBold,
            }}
            darkColor>
            {' '}
            privacy
          </AppText>
        </AppText>
      </View>
    </ImageBackground>
  );
};

export default Page;
