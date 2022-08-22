import React from 'react';
import { View, ScrollView, Pressable, Text } from 'react-native';
import styled from 'styled-components/native';

const StationView = styled.View`
  padding: 15px;
  flex: 1;
`;

const StationContainer = styled.View`
  flex: 1;
`;

const StationTitle = styled.Text`
  text-align: center;
`;

const StationButton = styled.Button``;

function Station({ navigation }) {
  return (
    <ScrollView>
      <View>
        <StationView>
          <Pressable
            onPress={() => {
              navigation.navigate('StationTimetable', {
                name: 'Райымбек батыра',
              });
            }}
          >
            <StationTitle>
              «Райымбек батыра»{'\n'}
              {'\n'}
            </StationTitle>
          </Pressable>
        </StationView>

        <StationView>
          <Pressable
            onPress={() => {
              navigation.navigate('StationTimetable', {
                name: 'Жибек жолы',
              });
            }}
          >
            <StationTitle>«Жибек жолы»</StationTitle>
          </Pressable>
        </StationView>

        <StationView>
          <Pressable
            onPress={() => {
              navigation.navigate('StationTimetable', {
                name: 'Алмалы',
              });
            }}
          >
            <StationTitle>«Алмалы»</StationTitle>
          </Pressable>
        </StationView>

        <StationView>
          <Pressable
            onPress={() => {
              navigation.navigate('StationTimetable', {
                name: 'Абая',
              });
            }}
          >
            <StationTitle>«Абая»</StationTitle>
          </Pressable>
        </StationView>

        <StationView>
          <Pressable
            onPress={() => {
              navigation.navigate('StationTimetable', {
                name: 'Байконыр',
              });
            }}
          >
            <StationTitle>«Байконыр»</StationTitle>
          </Pressable>
        </StationView>

        <StationView>
          <Pressable
            onPress={() => {
              navigation.navigate('StationTimetable', {
                name: 'Театр имени Мухтара Ауэзова',
              });
            }}
          >
            <StationTitle>«Театр имени Мухтара Ауэзова»</StationTitle>
          </Pressable>
        </StationView>

        <StationView>
          <Pressable
            onPress={() => {
              navigation.navigate('StationTimetable', {
                name: 'Алатау',
              });
            }}
          >
            <StationTitle>«Алатау»</StationTitle>
          </Pressable>
        </StationView>

        <StationView>
          <Pressable
            onPress={() => {
              navigation.navigate('StationTimetable', {
                name: 'Сайран',
              });
            }}
          >
            <StationTitle>«Сайран»</StationTitle>
          </Pressable>
        </StationView>

        <StationView>
          <Pressable
            onPress={() => {
              navigation.navigate('StationTimetable', {
                name: 'Москва',
              });
            }}
          >
            <StationTitle>«Москва»</StationTitle>
          </Pressable>
        </StationView>

        <StationView>
          <Pressable
            onPress={() => {
              navigation.navigate('StationTimetable', {
                name: 'Сарыарка',
              });
            }}
          >
            <StationTitle>«Сарыарка»</StationTitle>
          </Pressable>
        </StationView>

        <StationView>
          <Pressable
            onPress={() => {
              navigation.navigate('StationTimetable', {
                name: 'Б.Момышулы',
              });
            }}
          >
            <StationTitle>«Б.Момышулы»</StationTitle>
          </Pressable>
        </StationView>
      </View>
    </ScrollView>
  );
}

export default Station;
