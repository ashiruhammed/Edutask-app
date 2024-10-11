import { Stack } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { AppButton } from '~/components/core/button';
import { AppText } from '~/components/core/text';
import Accordion from '~/components/custom/accordion';
import { StarRating } from '.';
import ChatBotIcon from '~/components/custom/chatBotIcon';
import React, { useCallback, useEffect, useState } from 'react';
import CloseChatBotIcon from '~/components/custom/closeChatBotIcon';
import { Bubble, GiftedChat, Send, Time } from 'react-native-gifted-chat';
import { Icon } from '@rneui/base';
import LikeIcon from '~/components/icons/like-icon';
import UploadIcon from '~/components/icons/upload-icon';
import EmojiIcon from '~/components/icons/emoji-icon';

const CourseEnrolled = () => {
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
        <ChatModal />
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <AppButton
            containerStyle={{ flex: 1 }}
            type="solid"
            buttonStyle={{ borderRadius: 0 }}
            title={'Enrolled'}
            titleStyle={{ color: 'white' }}
            color={'#B0EBCF'}
          />
        </View>
      </ImageBackground>
    </>
  );
};

function ChatModal() {
  const [openModal, setOpenModal] = React.useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const [text, setText] = React.useState('');

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setOpenModal((openModal) => !openModal);
        }}
        style={{ position: 'absolute', bottom: 10, right: 10, zIndex: 99999 }}>
        {!openModal && <ChatBotIcon />}
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="slide"
        visible={openModal}
        onRequestClose={() => {
          setOpenModal(false);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              paddingBottom: 25,
              backgroundColor: '#F7F7F9',
              borderRadius: 10,
              width: '100%',
              height: 400,
            }}>
            <View
              style={{
                backgroundColor: '#00BF63',
                paddingVertical: 25,
              }}>
              <Image
                style={{ alignSelf: 'center' }}
                source={require('~/assets/images/edufari-logo.png')}
              />
              <AppText
                style={{
                  marginVertical: 5,
                  fontWeight: 'semibold',
                  color: '#fff',
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                EduFari
              </AppText>
              <AppText
                style={{
                  marginVertical: 5,
                  fontWeight: 'semibold',
                  color: '#fff',
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                EduFari AI Assistant
              </AppText>
            </View>
            <GiftedChat
              onInputTextChanged={(text) => setText(text)}
              messages={messages}
              onSend={(messages) => onSend(messages)}
              user={{
                _id: 1,
              }}
              renderAvatar={() => (
                <Image source={require('~/assets/images/edufari-logo-filled.png')} />
              )}
              renderBubble={(props) => {
                return (
                  <View>
                    <Bubble
                      {...props}
                      textStyle={{
                        left: [styles.messageText, { color: '#000' }],
                        right: [styles.messageText, { color: '#fff' }],
                      }}
                      wrapperStyle={{
                        left: {
                          backgroundColor: '#F2F4F7',
                          borderRadius: 8,
                          borderBottomStartRadius: 0,
                        },
                        right: {
                          backgroundColor: '#00BF63',
                          borderBottomEndRadius: 0,
                          borderRadius: 8,
                        },
                      }}
                    />
                    <Time
                      {...props}
                      timeTextStyle={{
                        left: {
                          color: '#000',
                          fontSize: 10,
                          textAlign: 'left',
                          marginLeft: -10,
                        },
                        right: {
                          color: '#000',
                          fontSize: 10,
                          textAlign: 'right',
                          marginRight: -10,
                        },
                      }}
                    />
                  </View>
                );
              }}
              renderSend={(props) => {
                return (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 10,
                      flexDirection: 'row',
                      gap: 14,
                      borderRadius: 8,
                    }}>
                    {text.length <= 0 ? (
                      <>
                        <LikeIcon />
                        <UploadIcon />
                        <EmojiIcon />
                      </>
                    ) : (
                      <Send {...props} containerStyle={{}}>
                        <Icon name="send" color={'#00BF63'} />
                      </Send>
                    )}
                  </View>
                );
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setOpenModal((openModal) => !openModal);
          }}
          style={{ position: 'absolute', bottom: 155, right: 10, zIndex: 99999 }}>
          {openModal && <CloseChatBotIcon style={{ marginRight: 12 }} />}
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

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

const styles = StyleSheet.create({
  messageText: {
    fontSize: 13,
  },
  composer: {
    // backgroundColor: "red",
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    flex: 1,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EDEDED',
  },
});
export default CourseEnrolled;
