import React from 'react';

import { View, Text, Select } from 'react-native';
import styled from 'styled-components/native';
import StationList from '../components/commonFIelds/StationList';
import StationDescription from '../components/station/StationDescription';

// CTRL + SHIFT + L
// rsf

const StationDescriptionView = styled.View`
  flex: 1;
`;

function StationDescriptionScreen({ navigation }) {
  function navigateToStationDescription(stationName) {
    switch (stationName.toLowerCase()) {
      case 'райымбек батыра':
        navigation.navigate('StationDescriptionComponent', {
          name: 'Райымбек батыра',
        });
        break;
      case 'жибек жолы':
        navigation.navigate('StationDescriptionComponent', {
          name: 'Жибек жолы',
        });
        break;
      case 'алмалы':
        navigation.navigate('StationDescriptionComponent', {
          name: 'Алмалы',
        });
        break;
      case 'абая':
        navigation.navigate('StationDescriptionComponent', {
          name: 'Абая',
        });
        break;
      case 'байконыр':
        navigation.navigate('StationDescriptionComponent', {
          name: 'Байконыр',
        });
        break;
      case 'театр имени мухтара ауэзова':
        navigation.navigate('StationDescriptionComponent', {
          name: 'Театр имени Мухтара Ауэзова',
        });
        break;
      case 'алатау':
        navigation.navigate('StationDescriptionComponent', {
          name: 'Алатау',
        });
        break;
      case 'сайран':
        navigation.navigate('StationDescriptionComponent', {
          name: 'Сайран',
        });
        break;
      case 'москва':
        navigation.navigate('StationDescriptionComponent', {
          name: 'Москва',
        });
        break;
      case 'сарыарка':
        navigation.navigate('StationDescriptionComponent', {
          name: 'Сарыарка',
        });
        break;
      case 'б.момышулы':
        navigation.navigate('StationDescriptionComponent', {
          name: 'Б.Момышулы',
        });
        break;
    }
  }

  return (
    <StationDescriptionView>
      <StationList
        navigateToStationDescription={navigateToStationDescription}
      />
    </StationDescriptionView>
  );
}

export default StationDescriptionScreen;
