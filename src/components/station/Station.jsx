import React from 'react';
import StationList from '../commonFIelds/StationList';

function Station({ navigation }) {
  function navigateToStationTimeTable(stationName) {
    switch (stationName?.toLowerCase()) {
      case 'райымбек батыра':
        navigation.navigate('StationTimetable', {
          name: 'Райымбек батыра',
        });
        break;
      case 'жибек жолы':
        navigation.navigate('StationTimetable', {
          name: 'Жибек жолы',
        });
        break;
      case 'алмалы':
        navigation.navigate('StationTimetable', {
          name: 'Алмалы',
        });
        break;
      case 'абая':
        navigation.navigate('StationTimetable', {
          name: 'Абая',
        });
        break;
      case 'байконыр':
        navigation.navigate('StationTimetable', {
          name: 'Байконыр',
        });
        break;
      case 'театр имени мухтара ауэзова':
        navigation.navigate('StationTimetable', {
          name: 'Театр имени Мухтара Ауэзова',
        });
        break;
      case 'алатау':
        navigation.navigate('StationTimetable', {
          name: 'Алатау',
        });
        break;
      case 'сайран':
        navigation.navigate('StationTimetable', {
          name: 'Сайран',
        });
        break;
      case 'москва':
        navigation.navigate('StationTimetable', {
          name: 'Москва',
        });
        break;
      case 'сарыарка':
        navigation.navigate('StationTimetable', {
          name: 'Сарыарка',
        });
        break;
      case 'б.момышулы':
        navigation.navigate('StationTimetable', {
          name: 'Б.Момышулы',
        });
        break;
    }
  }

  return (
    <StationList navigateToStationTimeTable={navigateToStationTimeTable} />
  );
}

export default Station;
