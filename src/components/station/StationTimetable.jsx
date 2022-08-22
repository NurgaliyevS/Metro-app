import React, { useEffect, useState } from 'react';

import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import { StationTimeTable } from '../../constants/StationTimeTable';

const Container = styled.View`
  flex-direction: row;
  background-color: #fffff;
`;

const TimeTableTitle = styled.Text`
  font-size: ${(props) => (props.weekendsOrNot ? '22px' : '30px')};
  color: #4169e1;
`;

const StationContainer = styled.View`
  flex: 1;
  margin-top: 30px;
  height: 70px;
  background-color: #3d86cb;
`;

const StationTitle = styled.Text`
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 17px;
`;

const StationTimeTableContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

const StationTimeTableText = styled.Text`
  text-align: center;
  color: #4169e1;
`;

function setTitle(title, navigation) {
  switch (title.toLowerCase()) {
    case 'райымбек батыра':
      navigation.setOptions({ title: 'Райымбек батыра' });
      break;
    case 'жибек жолы':
      navigation.setOptions({ title: 'Жибек жолы' });
      break;
    case 'алмалы':
      navigation.setOptions({ title: 'Алмалы' });
      break;
    case 'абая':
      navigation.setOptions({ title: 'Абая' });
      break;
    case 'байконыр':
      navigation.setOptions({ title: 'Байконыр' });
      break;
    case 'театр имени мухтара ауэзова':
      navigation.setOptions({ title: 'Театр имени Мухтара Ауэзова' });
      break;
    case 'алатау':
      navigation.setOptions({ title: 'Алатау' });
      break;
    case 'сайран':
      navigation.setOptions({ title: 'Сайран' });
      break;
    case 'москва':
      navigation.setOptions({ title: 'Москва' });
      break;
    case 'сарыарка':
      navigation.setOptions({ title: 'Сарыарка' });
      break;
    case 'б.момышулы':
      navigation.setOptions({ title: 'Б.Момышулы' });
      break;
  }
}

function mapTimeTable(timeTable) {
  const getOnlyValues = Object.values(timeTable);
  return getOnlyValues?.map((element) => element + '\n' + '\n');
}

function stationContainerAndTitle(
  stationName,
  setStationNameAfterNavigationDown,
  setStationNameAfterNavigationUp
) {
  switch (stationName.toLowerCase()) {
    case 'райымбек батыра':
      setStationNameAfterNavigationDown('Жибек жолы');
      break;
    case 'жибек жолы':
      setStationNameAfterNavigationDown('Алмалы');
      setStationNameAfterNavigationUp('Райымбек батыра');
      break;
    case 'алмалы':
      setStationNameAfterNavigationDown('Абая');
      setStationNameAfterNavigationUp('Жибек жолы');
      break;
    case 'абая':
      setStationNameAfterNavigationDown('Байконыр');
      setStationNameAfterNavigationUp('Алмалы');
      break;
    case 'байконыр':
      setStationNameAfterNavigationDown('Театр имени Мухтара Ауэзова');
      setStationNameAfterNavigationUp('Абая');
      break;
    case 'театр имени мухтара ауэзова':
      setStationNameAfterNavigationDown('Алатау');
      setStationNameAfterNavigationUp('Байконыр');
      break;
    case 'алатау':
      setStationNameAfterNavigationDown('Сайран');
      setStationNameAfterNavigationUp('Театр имени Мухтара Ауэзова');
      break;
    case 'сайран':
      setStationNameAfterNavigationDown('Москва');
      setStationNameAfterNavigationUp('Алатау');
      break;
    case 'москва':
      setStationNameAfterNavigationDown('Сарыарка');
      setStationNameAfterNavigationUp('Сайран');
      break;
    case 'сарыарка':
      setStationNameAfterNavigationDown('Б.Момышулы');
      setStationNameAfterNavigationUp('Москва');
      break;
    case 'б.момышулы':
      setStationNameAfterNavigationUp('Сарыарка');
      break;
  }
}

function showTitleStations(
  stationNameAfterNavigationUp,
  stationNameAfterNavigationDown
) {
  if (
    stationNameAfterNavigationUp === '' ||
    stationNameAfterNavigationDown === ''
  )
    return (
      <View style={{ flex: 0.2, backgroundColor: '#3d86cb' }}>
        <StationContainer>
          <StationTitle>
            {'\n'}
            {stationNameAfterNavigationUp || stationNameAfterNavigationDown}
          </StationTitle>
        </StationContainer>
      </View>
    );

  return (
    <Container>
      <StationContainer>
        <StationTitle>
          {'\n'}
          {stationNameAfterNavigationUp}
        </StationTitle>
      </StationContainer>
      <StationContainer>
        <StationTitle>
          {'\n'}
          {stationNameAfterNavigationDown}
        </StationTitle>
      </StationContainer>
    </Container>
  );
}

function timeTable(stationName) {
  return (
    <Container>
      <StationTimeTableContainer>
        <StationTimeTableText style={{ paddingTop: 20, paddingLeft: '35%' }}>
          {stationName === 'жибек жолы' &&
            mapTimeTable(StationTimeTable.raimbekToZhibek.workingDays)}
        </StationTimeTableText>
      </StationTimeTableContainer>

      <StationTimeTableContainer>
        <StationTimeTableText style={{ paddingTop: 20, paddingLeft: '35%' }}>
          {stationName === 'жибек жолы' &&
            mapTimeTable(StationTimeTable.raimbekToZhibek.workingDays)}
        </StationTimeTableText>
      </StationTimeTableContainer>
    </Container>
  );
}

function workingDayOrWeekend(date) {
  if (date.getDay() === 6 || date.getDay() === 0) return 'Выходные дни';
  return 'Рабочие дни';
}

function StationTimetable({ navigation, route }) {
  const [stationNameAfterNavigationDown, setStationNameAfterNavigationDown] =
    useState('');

  const [stationNameAfterNavigationUp, setStationNameAfterNavigationUp] =
    useState('');

  useEffect(() => {
    setTitle(route.params.name, navigation);
    timeTable(route.params.name);
    stationContainerAndTitle(
      route.params.name,
      setStationNameAfterNavigationDown,
      setStationNameAfterNavigationUp
    );
  }, [route]);

  useEffect(() => {
    if (
      setStationNameAfterNavigationUp === '' &&
      stationNameAfterNavigationDown === ''
    )
      return;
    showTitleStations(
      stationNameAfterNavigationUp,
      stationNameAfterNavigationDown
    );
  }, [stationNameAfterNavigationUp, stationNameAfterNavigationDown]);

  return (
    <>
      <TimeTableTitle style={{ textAlign: 'center', color: '#3d86cb' }}>
        Расписание
      </TimeTableTitle>
      <TimeTableTitle
        style={{ textAlign: 'center', paddingTop: 5, color: '#3d86cb' }}
        weekendsOrNot
      >
        {workingDayOrWeekend(new Date())}
      </TimeTableTitle>
      {showTitleStations(
        stationNameAfterNavigationUp,
        stationNameAfterNavigationDown
      )}
    </>
  );
}

export default StationTimetable;
