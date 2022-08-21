import React from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const StationView = styled.View`
  padding: 15px;
`;

const StationContainer = styled.View`
  flex: 1;
  border-bottom-width: 0.5px;
  border-bottom-color: rbga(0, 0, 0, 0.1);
`;

const StationButton = styled.Button``;

function Station({ navigation }) {
  return (
    <ScrollView>
      <View>
        <StationView>
          <StationContainer>
            <StationButton
              title='«Райымбек батыра»'
              onPress={() => {
                navigation.navigate('StationTimetable', {
                  name: 'Райымбек батыра',
                });
              }}
            ></StationButton>
          </StationContainer>
        </StationView>

        <StationView>
          <StationContainer>
            <StationButton
              title='«Жибек жолы»'
              onPress={() => {
                navigation.navigate('StationTimetable', {
                  name: 'Жибек жолы',
                });
              }}
            ></StationButton>
          </StationContainer>
        </StationView>

        <StationView>
          <StationContainer>
            <StationButton
              title='«Алмалы»'
              onPress={() => {
                navigation.navigate('StationTimetable', {
                  name: 'Алмалы',
                });
              }}
            ></StationButton>
          </StationContainer>
        </StationView>

        <StationView>
          <StationContainer>
            <StationButton
              title='«Абая»'
              onPress={() => {
                navigation.navigate('StationTimetable', {
                  name: 'Абая',
                });
              }}
            ></StationButton>
          </StationContainer>
        </StationView>

        <StationView>
          <StationContainer>
            <StationButton
              title='«Байконыр»'
              onPress={() => {
                navigation.navigate('StationTimetable', {
                  name: 'Байконыр',
                });
              }}
            ></StationButton>
          </StationContainer>
        </StationView>

        <StationView>
          <StationContainer>
            <StationButton
              title='«Театр имени Мухтара Ауэзова»'
              onPress={() => {
                navigation.navigate('StationTimetable', {
                  name: 'Театр имени Мухтара Ауэзова',
                });
              }}
            ></StationButton>
          </StationContainer>
        </StationView>

        <StationView>
          <StationContainer>
            <StationButton
              title='«Алатау»'
              onPress={() => {
                navigation.navigate('StationTimetable', {
                  name: 'Алатау',
                });
              }}
            ></StationButton>
          </StationContainer>
        </StationView>

        <StationView>
          <StationContainer>
            <StationButton
              title='«Сайран»'
              onPress={() => {
                navigation.navigate('StationTimetable', {
                  name: 'Сайран',
                });
              }}
            ></StationButton>
          </StationContainer>
        </StationView>

        <StationView>
          <StationContainer>
            <StationButton
              title='«Москва»'
              onPress={() => {
                navigation.navigate('StationTimetable', {
                  name: 'Москва',
                });
              }}
            ></StationButton>
          </StationContainer>
        </StationView>

        <StationView>
          <StationContainer>
            <StationButton
              title='«Сарыарка»'
              onPress={() => {
                navigation.navigate('StationTimetable', {
                  name: 'Сарыарка',
                });
              }}
            ></StationButton>
          </StationContainer>
        </StationView>

        <StationView>
          <StationContainer>
            <StationButton
              title='«Б.Момышулы»'
              onPress={() => {
                navigation.navigate('StationTimetable', {
                  name: 'Б.Момышулы',
                });
              }}
            ></StationButton>
          </StationContainer>
        </StationView>
      </View>
    </ScrollView>
  );
}

export default Station;
