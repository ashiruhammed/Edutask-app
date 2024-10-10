import React from 'react';
import { Image, ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';
import { AppText } from '~/components/core/text';
import MailIcon from '~/components/icons/mail-icon';

const Page = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { theme } = useStyles();
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <Image
        source={require('~/assets/images/profile-background.png')}
        style={{
          width: '100%',
          height: 150,
          zIndex: -999,
        }}
      />
      <ImageBackground
        style={{
          padding: 20,
          flex: 1,
        }}
        source={require('~/assets/images/sign-up-bg.jpg')}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image
            style={{
              marginTop: -50,
            }}
            source={require('~/assets/images/avatar.png')}
          />
          <MailIcon />
        </View>
        <View
          style={{
            marginTop: 10,
          }}>
          <AppText
            darkColor
            style={{
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            Joshua Wilson
          </AppText>
          <AppText
            style={{
              fontSize: 16,
              color: '#666',
            }}>
            josh@untitledui.com
          </AppText>
          <AppText
            style={{
              fontSize: 16,
              color: '#666',
              marginTop: 8,
            }}>
            Last seen 08:20pm (5 minutes ago)
          </AppText>
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 4,
            marginTop: 50,
          }}>
          {['Courses Taken', 'Courses in Progress'].map((item, index) => (
            <Pressable
              style={{
                borderBottomWidth: 2,
                borderColor: selectedIndex === index ? theme.colors.primary : 'transparent',
                paddingBottom: 8,
                flex: 1,
                alignItems: 'center',
              }}
              key={index}
              onPress={() => setSelectedIndex(index)}>
              <AppText
                style={{
                  fontSize: 16,
                  color: selectedIndex === index ? theme.colors.primary : '#666',
                  ...theme.typography.semiBold,
                }}>
                {item}
              </AppText>
            </Pressable>
          ))}
        </View>

        <View style={styles.card}>
          <Image style={{ flex: 0.5 }} source={require('~/assets/images/degree-course.png')} />
          <View style={{ flex: 1 }}>
            <AppText style={[styles.title, theme.typography.semiBold]}>
              Figma UI/UX Design Essentials
            </AppText>
            <AppText style={[styles.subtitle, theme.typography.regular]}>50 students</AppText>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  headerImage: {
    width: '100%',
    height: 190,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 16,
    color: '#384250',
  },
  subtitle: {
    fontSize: 12,
    color: '#384250',
    marginTop: 10,
  },
  sectionHeader: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingRight: 8,
    marginTop: 20,
  },
});
export default Page;
