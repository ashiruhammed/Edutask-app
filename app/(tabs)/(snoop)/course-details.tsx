import { Stack, useRouter } from 'expo-router';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image, ImageBackground, ScrollView, TouchableOpacity, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { AppText } from '~/components/core/text';
import Accordion from '~/components/custom/accordion';
import { StarRating } from '.';
import { AppButton } from '~/components/core/button';

const CourseDetails = () => {
  const router = useRouter();
  const { theme } = useStyles();
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerTitle: 'Course Details',
          headerRight: () => (
            <TouchableOpacity>
              <FontAwesome name="share" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <ImageBackground source={require('~/assets/images/sign-up-bg.jpg')} style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, marginTop: 10, paddingBottom: 50 }}>
          <Image
            source={require('~/assets/images/new-courses.png')} // Placeholder image
            style={{ width: '100%', height: 200, borderRadius: 8 }}
          />
          <View style={{ padding: 16 }}>
            <AppText darkColor style={{ fontSize: 24, fontWeight: 'bold', marginTop: 16 }}>
              Figma UI/UX Design Essentials
            </AppText>

            <AppText darkColor style={{ marginTop: 10, ...theme.typography.semiBold }}>
              About this Course
            </AppText>

            <AppText style={{ fontSize: 12, marginTop: 8, color: '#364152' }}>
              Learn how to design your mobile app and website for different screen sizes and
              platforms.
            </AppText>

            {/* Rating and Student Count */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8, gap: 2 }}>
              <AppText darkColor style={{ fontSize: 12 }}>
                4.8 (86)
              </AppText>
              <StarRating rating={3} />
            </View>

            {/* Instructor Info */}
            <AppText
              style={{ fontSize: 16, color: '#000', marginTop: 16, ...theme.typography.semiBold }}>
              Created by{' '}
              <AppText style={{ color: '#00BF63', ...theme.typography.semiBold }}>
                Samad Opabode
              </AppText>
            </AppText>
            <AppText darkColor style={{ fontSize: 12 }}>
              Last updated: 8th September, 2024
            </AppText>

            {/* Languages */}
            <AppText darkColor style={{ fontSize: 12, marginTop: 16 }}>
              Taught in: English
            </AppText>
            <AppText darkColor style={{ fontSize: 12 }}>
              Closed Caption available in: English, French, Swahili, Hausa, Arabic
            </AppText>

            <AppText style={{ fontSize: 12, marginTop: 16 }}>
              Beginner Level - No prior knowledge needed
            </AppText>

            {/* Skills Gained */}
            <AppText darkColor style={{ fontSize: 18, fontWeight: 'bold', marginTop: 24 }}>
              Skills You Will Gain
            </AppText>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 }}>
              {[
                'User Interface Design',
                'Empathy',
                'Prototyping',
                'User Experience Design',
                'Wireframing',
                'UX Research',
              ].map((skill) => (
                <View
                  key={skill}
                  style={{ backgroundColor: '#E7F0F5', padding: 8, margin: 4, borderRadius: 8 }}>
                  <AppText style={{ color: '#697586', ...theme.typography.semiBold }}>
                    {skill}
                  </AppText>
                </View>
              ))}
            </View>
          </View>

          <View style={{ backgroundColor: 'white', paddingTop: 50, paddingHorizontal: 12 }}>
            <AppText style={{ fontSize: 16, ...theme.typography.semiBold, marginBottom: 12 }}>
              Syllabus : what you will learn in this course
            </AppText>

            {[
              { courseTitle: ' Introducing User Experience' },
              {
                courseTitle: 'Joining Design Sprint',
              },
              {
                courseTitle: 'Introduction to programming',
              },
            ].map((item, index) => (
              <Accordion viewKey={index} accordionItem={<AccordionCard />}>
                <View>
                  <View style={{ gap: 4 }}>
                    <AppText>Week {index + 1}</AppText>
                    <AppText
                      style={{
                        fontSize: 16,
                        ...theme.typography.semiBold,
                        marginBottom: 12,
                        color: '#364152',
                      }}>
                      {item.courseTitle}
                    </AppText>
                  </View>
                </View>
              </Accordion>
            ))}
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <AppText
            style={{
              flex: 1,
              textAlign: 'center',
              fontSize: 32,
              ...theme.typography.semiBold,
              color: '#364152',
            }}>
            N50000
          </AppText>
          <AppButton
            containerStyle={{ flex: 1 }}
            type="solid"
            buttonStyle={{ borderRadius: 0 }}
            title={'Enroll Now'}
            onPress={() => {
              router.push('/(snoop)/course-enrolled');
            }}
            titleStyle={{ color: 'white' }}
            color={theme.colors.primary}
          />
        </View>
      </ImageBackground>
    </>
  );
};

function AccordionCard() {
  const { theme } = useStyles();
  return (
    <View>
      <AppText style={{ ...theme.typography.semiBold, marginVertical: 10 }}>
        Instructor: <AppText style={{ color: '#00BF63' }}>Samad Opade</AppText>
      </AppText>
      <View
        style={{
          paddingVertical: 24,
          paddingHorizontal: 11,
          backgroundColor: '#E7F0F5',
          borderRadius: 12,
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8, gap: 2 }}>
          <AppText
            darkColor
            style={{ fontSize: 16, color: '#6A410E', ...theme.typography.semiBold }}>
            4.8 (86)
          </AppText>
          <StarRating rating={3} color="#6a410e" />
        </View>
        <AppText
          style={{
            marginVertical: 10,
            ...theme.typography.semiBold,
            fontSize: 14,
            color: '#364152',
          }}>
          Top Reviews
        </AppText>
      </View>
    </View>
  );
}

export default CourseDetails;
