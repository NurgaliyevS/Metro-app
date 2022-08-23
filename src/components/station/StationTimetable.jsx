import React, { useEffect, useState } from 'react';

import { View, Text, Pressable, ScrollView } from 'react-native';
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
  margin-top: 15px;
  height: 70px;
  background-color: #3d86cb;
`;

const StationTitle = styled.Text`
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 17px;
`;

const TimeTableContainer = styled.View`
  flex: 1;
`;

const TimeTableText = styled.Text`
  text-align: center;
  color: #3d86cb;
  font-weight: bold;
  font-size: 17px;
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

function StationTimetable({ navigation, route }) {
  const [stationNameAfterNavigationDown, setStationNameAfterNavigationDown] =
    useState('');

  const [stationNameAfterNavigationUp, setStationNameAfterNavigationUp] =
    useState('');

  const [changeWorkDayOrWeekend, setChangeWorkDayOrWeekend] = useState(false);
  const [isWeekendOrWorkDay, setIsWeekendOrWorkDay] = useState('');

  useEffect(() => {
    setTitle(route.params.name, navigation);
    timeTable(route.params.name);
    stationContainerAndTitle(
      route.params.name,
      setStationNameAfterNavigationDown,
      setStationNameAfterNavigationUp
    );
  }, [route]);

  function workingDayOrWeekend(date) {
    if (date.getDay() === 6 || date.getDay() === 0) {
      return 'Выходные дни';
    }
    return 'Рабочие дни';
  }

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

  useEffect(() => {
    changeTimeTableByPress();
  }, [changeWorkDayOrWeekend]);

  function changeTimeTableByPress() {
    if (isWeekendOrWorkDay.toLocaleLowerCase() === 'рабочие дни') {
      setIsWeekendOrWorkDay('Выходные дни');
      return;
    }
    setIsWeekendOrWorkDay('Рабочие дни');
    return;
  }

  function stationNameChooseEndRaimbekAndWorkingDayOrWeekend(stationName) {
    switch (stationName.toLowerCase()) {
      case 'райымбек батыра':
        if (isWeekendOrWorkDay.toLowerCase() === 'рабочие дни') {
          return StationTimeTable.raimbekToZhibek.workingDays[0];
        }
        return StationTimeTable.raimbekToZhibek.weekends[0];
      case 'жибек жолы':
        if (isWeekendOrWorkDay.toLowerCase() === 'рабочие дни') {
          return StationTimeTable.zhibekToRaimbek.workingDays[0];
        }
        return StationTimeTable.zhibekToRaimbek.weekends[0];
      case 'алмалы':
        if (isWeekendOrWorkDay.toLowerCase() === 'рабочие дни') {
          return StationTimeTable.almalyToZhibek.workingDays[0];
        }
        return StationTimeTable.almalyToZhibek.weekends[0];
      case 'абая':
        if (isWeekendOrWorkDay.toLowerCase() === 'рабочие дни') {
          return StationTimeTable.abaiToAlmaly.workingDays[0];
        }
        return StationTimeTable.abaiToAlmaly.weekends[0];
      case 'байконыр':
        if (isWeekendOrWorkDay.toLowerCase() === 'рабочие дни') {
          return StationTimeTable.baikonurToAbai.workingDays[0];
        }
        return StationTimeTable.baikonurToAbai.weekends[0];
      case 'театр имени мухтара ауэзова':
        if (isWeekendOrWorkDay.toLowerCase() === 'рабочие дни') {
          return StationTimeTable.teatrAuezovToBaikonur.workingDays[0];
        }
        return StationTimeTable.teatrAuezovToBaikonur.weekends[0];
      case 'алатау':
        if (isWeekendOrWorkDay.toLowerCase() === 'рабочие дни') {
          return StationTimeTable.alatauToTeatrAuezov.workingDays[0];
        }
        return StationTimeTable.alatauToTeatrAuezov.weekends[0];
      case 'сайран':
        if (isWeekendOrWorkDay.toLowerCase() === 'рабочие дни') {
          return StationTimeTable.sairanToAlatau.workingDays[0];
        }
        return StationTimeTable.sairanToAlatau.weekends[0];
      case 'москва':
        if (isWeekendOrWorkDay.toLowerCase() === 'рабочие дни') {
          return StationTimeTable.moscowToSairan.workingDays[0];
        }
        return StationTimeTable.moscowToSairan.weekends[0];
      case 'сарыарка':
        if (isWeekendOrWorkDay.toLowerCase() === 'рабочие дни') {
          return StationTimeTable.saryarkaToMoscow.workingDays[0];
        }
        return StationTimeTable.saryarkaToMoscow.weekends[0];
      case 'б.момышулы':
        if (isWeekendOrWorkDay.toLowerCase() === 'рабочие дни') {
          return StationTimeTable.momushulyToSaryarka.workingDays[0];
        }
        return StationTimeTable.momushulyToSaryarka.weekends[0];
    }
  }

  function stationNameChooseEndMomushulyAndWorkingDayOrWeekend(stationName) {
    switch (stationName.toLowerCase()) {
      case 'жибек жолы':
        if (isWeekendOrWorkDay.toLowerCase() === 'рабочие дни') {
          return StationTimeTable.zhibekToAlmaly.workingDays[0];
        }
        return StationTimeTable.zhibekToAlmaly.weekends[0];
      case 'алмалы':
        if (isWeekendOrWorkDay.toLowerCase() === 'рабочие дни') {
          return StationTimeTable.almalyToAbai.workingDays[0];
        }
        return StationTimeTable.almalyToAbai.weekends[0];
      case 'абая':
        if (isWeekendOrWorkDay.toLowerCase() === 'рабочие дни') {
          return StationTimeTable.abaiToBaikonur.workingDays[0];
        }
        return StationTimeTable.abaiToBaikonur.weekends[0];
      case 'байконыр':
        if (isWeekendOrWorkDay.toLowerCase() === 'рабочие дни') {
          return StationTimeTable.baikonurToTeatrAuezov.workingDays[0];
        }
        return StationTimeTable.baikonurToTeatrAuezov.weekends[0];
      case 'театр имени мухтара ауэзова':
        if (isWeekendOrWorkDay.toLowerCase() === 'рабочие дни') {
          return StationTimeTable.teatrAuezovToAlatau.workingDays[0];
        }
        return StationTimeTable.teatrAuezovToAlatau.weekends[0];
      case 'алатау':
        if (isWeekendOrWorkDay.toLowerCase() === 'рабочие дни') {
          return StationTimeTable.alatauToSairan.workingDays[0];
        }
        return StationTimeTable.alatauToSairan.weekends[0];
      case 'сайран':
        if (isWeekendOrWorkDay.toLowerCase() === 'рабочие дни') {
          return StationTimeTable.sairanToMoscow.workingDays[0];
        }
        return StationTimeTable.sairanToMoscow.weekends[0];
      case 'москва':
        if (isWeekendOrWorkDay.toLowerCase() === 'рабочие дни') {
          return StationTimeTable.moscowToSaryarka.workingDays[0];
        }
        return StationTimeTable.moscowToSaryarka.weekends[0];
      case 'сарыарка':
        if (isWeekendOrWorkDay.toLowerCase() === 'рабочие дни') {
          return StationTimeTable.saryarkaToMomushuly.workingDays[0];
        }
        return StationTimeTable.saryarkaToMomushuly.weekends[0];
    }
  }

  function timeTable(stationName) {
    if (
      stationName.toLowerCase() !== 'райымбек батыра' &&
      stationName.toLowerCase() !== 'б.момышулы'
    ) {
      return (
        <ScrollView>
          <Container>
            <TimeTableContainer>
              <TimeTableText>
                {'\n'}
                {stationNameChooseEndRaimbekAndWorkingDayOrWeekend(stationName)}
              </TimeTableText>
            </TimeTableContainer>
            <TimeTableContainer>
              <TimeTableText>
                {'\n'}{' '}
                {stationNameChooseEndMomushulyAndWorkingDayOrWeekend(
                  stationName
                )}
              </TimeTableText>
            </TimeTableContainer>
          </Container>
        </ScrollView>
      );
    } else if (
      stationName.toLowerCase() === 'райымбек батыра' ||
      stationName.toLowerCase() === 'б.момышулы'
    ) {
      return (
        <ScrollView>
          <StationContainer>
            <TimeTableText>
              {stationNameChooseEndRaimbekAndWorkingDayOrWeekend(stationName)}
            </TimeTableText>
          </StationContainer>
        </ScrollView>
      );
    }
  }

  return (
    <>
      <TimeTableTitle style={{ textAlign: 'center', color: '#3d86cb' }}>
        Расписание
      </TimeTableTitle>
      <Pressable
        onPress={() => {
          setChangeWorkDayOrWeekend((workDay) => !workDay);
        }}
      >
        <TimeTableTitle
          style={{ textAlign: 'center', paddingTop: 10, color: '#3d86cb' }}
          weekendsOrNot
        >
          {isWeekendOrWorkDay === ''
            ? workingDayOrWeekend(new Date())
            : isWeekendOrWorkDay}
        </TimeTableTitle>
      </Pressable>
      {showTitleStations(
        stationNameAfterNavigationUp,
        stationNameAfterNavigationDown
      )}
      {timeTable(route.params.name)}
    </>
  );
}

export default StationTimetable;
