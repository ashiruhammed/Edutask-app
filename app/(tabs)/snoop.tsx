import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';
import { AppText } from '~/components/core/text';

const Page = () => {
  const { theme } = useStyles();
  const { width } = useWindowDimensions();

  return (
    <ImageBackground source={require('~/assets/images/sign-up-bg.jpg')} style={styles.background}>
      <SafeAreaView edges={['top']} />
      <ScrollView style={styles.safeArea}>
        <Image source={require('~/assets/images/learn-space.png')} style={styles.headerImage} />
        <View style={styles.content}>
          <AppText style={[styles.title, theme.typography.semiBold]}>
            Learning at your own pace
          </AppText>
          <AppText style={[styles.subtitle, theme.typography.regular]}>
            Knowledge and skills for all (for now and future)
          </AppText>

          <View>
            <View style={styles.sectionHeader}>
              <AppText style={[styles.sectionTitle, theme.typography.semiBold]}>Categories</AppText>
              <AppText
                darkColor
                style={[
                  styles.viewAll,
                  { color: theme.colors.primary },
                  theme.typography.semiBold,
                ]}>
                View All
              </AppText>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContainer}>
              {['Science', 'Math', 'History', 'Art'].map((category, index) => (
                <View key={index} style={styles.category}>
                  <AppText style={[styles.categoryText, theme.typography.semiBold]}>
                    {category}
                  </AppText>
                </View>
              ))}
            </ScrollView>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContainer}>
              {['Health and Fitness', 'Music', 'Programming', 'Cooking', 'Language'].map(
                (category, index) => (
                  <View key={index} style={styles.category}>
                    <AppText style={[styles.categoryText, theme.typography.semiBold]}>
                      {category}
                    </AppText>
                  </View>
                )
              )}
            </ScrollView>
          </View>

          <View>
            <View style={styles.sectionHeader}>
              <AppText style={[styles.sectionTitle, theme.typography.semiBold]}>
                New Courses on{' '}
                <AppText
                  style={[
                    styles.highlight,
                    { color: theme.colors.primary },
                    theme.typography.semiBold,
                  ]}>
                  EduAfrica
                </AppText>
              </AppText>
              <AppText
                darkColor
                style={[
                  styles.viewAll,
                  { color: theme.colors.primary },
                  theme.typography.semiBold,
                ]}>
                View All
              </AppText>
            </View>

            <ScrollView
              contentContainerStyle={styles.newCoursesContainer}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {Array.from({ length: 5 }).map((_, index) => (
                <View key={index} style={{ width: width * 0.6 }}>
                  <Image
                    source={require('~/assets/images/new-courses.png')}
                    style={styles.courseImage}
                  />
                  <AppText style={[styles.courseTitle, theme.typography.semiBold]}>
                    Figma UI/UX Design Essentials
                  </AppText>
                  <AppText style={[styles.courseInstructor, theme.typography.regular]}>
                    Samad Opade
                  </AppText>
                  <View style={{ flexDirection: 'row', gap: 8 }}>
                    <AppText style={[styles.courseInstructor, theme.typography.regular]}>
                      4.8 (86)
                    </AppText>
                    <StarRating rating={4} />
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>

          <View>
            <View style={styles.sectionHeader}>
              <AppText style={[styles.sectionTitle, theme.typography.semiBold]}>
                Earn your degree
              </AppText>
              <AppText
                darkColor
                style={[
                  styles.viewAll,
                  { color: theme.colors.primary },
                  theme.typography.semiBold,
                ]}>
                See All
              </AppText>
            </View>
            <ScrollView
              contentContainerStyle={styles.newCoursesContainer}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {Array.from({ length: 5 }).map((_, index) => (
                <View key={index} style={{ width: width * 0.5 }}>
                  <Image
                    source={require('~/assets/images/degree-course.png')}
                    style={styles.courseImage}
                  />
                  <AppText style={[styles.courseTitle, theme.typography.semiBold]}>
                    Figma UI/UX Design Essentials
                  </AppText>
                  <AppText style={[styles.courseInstructor, theme.typography.regular]}>
                    Samad Opade
                  </AppText>
                  <View style={{ flexDirection: 'row', gap: 8 }}>
                    <AppText style={[styles.courseInstructor, theme.typography.regular]}>
                      4.8 (86)
                    </AppText>
                    <StarRating rating={4} />
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }).map((_, index) => (
    <FontAwesome key={index} name={index < rating ? 'star' : 'star-o'} size={14} color="#FFD700" />
  ));
  return <View style={{ flexDirection: 'row', marginTop: 4 }}>{stars}</View>;
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
    fontSize: 26,
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
  sectionTitle: {
    fontSize: 18,
    color: '#384250',
  },
  viewAll: {
    fontSize: 14,
  },
  scrollContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
    overflow: 'scroll',
  },
  category: {
    borderColor: '#697586',
    borderWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 40,
    alignItems: 'center',
    minWidth: 100,
  },
  categoryText: {
    fontSize: 12,
    color: '#697586',
  },
  highlight: {
    color: '#697586',
  },
  newCoursesContainer: {
    gap: 12,
  },
  courseImage: {
    height: 120,
    borderRadius: 10,
    marginTop: 12,
    width: '100%',
  },
  courseTitle: {
    fontSize: 14,
    color: '#384250',
    marginTop: 8,
  },
  courseInstructor: {
    fontSize: 12,
    color: '#697586',
    marginTop: 4,
  },
});

export default Page;
