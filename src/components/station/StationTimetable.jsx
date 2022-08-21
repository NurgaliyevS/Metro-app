import React, { useEffect } from 'react';

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
  height: 50px;
  background-color: #4169e1;
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
      stationContainerAndTitle();
      break;
  }
}

function mapTimeTable(timeTable) {
  const getOnlyValues = Object.values(timeTable);
  return getOnlyValues?.map((element) => element + '\n' + '\n');
}

function stationContainerAndTitle() {
  return (
    <>
      <StationContainer>
        <StationTitle>{'\n'}Райымбек батыра</StationTitle>
      </StationContainer>
      <StationContainer>
        <StationTitle>{'\n'}Алмалы</StationTitle>
      </StationContainer>
      {zhibelZholyTimeTable()}
    </>
  );
}

function zhibelZholyTimeTable() {
  return (
    <Container>
      <StationTimeTableContainer>
        <StationTimeTableText style={{ paddingTop: 20, paddingLeft: '35%' }}>
          {mapTimeTable(StationTimeTable.Raimbek.workingDays)}
        </StationTimeTableText>
      </StationTimeTableContainer>

      <StationTimeTableContainer>
        <StationTimeTableText style={{ paddingTop: 20, paddingLeft: '35%' }}>
          {mapTimeTable(StationTimeTable.Raimbek.workingDays)}
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
  useEffect(() => {
    setTitle(route.params.name, navigation);
  }, [route]);

  return (
    <>
      <TimeTableTitle style={{ textAlign: 'center' }}>
        Расписание
      </TimeTableTitle>
      <TimeTableTitle
        style={{ textAlign: 'center', paddingTop: 5 }}
        weekendsOrNot
      >
        {workingDayOrWeekend(new Date())}
      </TimeTableTitle>
      <Container>{stationContainerAndTitle()}</Container>
      {zhibelZholyTimeTable()}
    </>
  );
}

export default StationTimetable;
