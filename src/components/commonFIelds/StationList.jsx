import React from 'react';
import { View, ScrollView, Pressable } from 'react-native';
import styled from 'styled-components/native';

const StationView = styled.View`
  padding: 15px;
  flex: 1;
  border-bottom-width: 0.4px;
  border-bottom-color: gray
  border-bottom: solid;
`;

const StationTitle = styled.Text`
  text-align: center;
  color: #3d86cb;
`;

function StationList({
  navigateToStationTimeTable,
  navigateToStationDescription,
}) {
  return (
    <ScrollView>
      <View>
        <StationView>
          <Pressable
            onPress={() => {
              navigateToStationTimeTable
                ? navigateToStationTimeTable('Райымбек батыра')
                : navigateToStationDescription('Райымбек батыра');
            }}
          >
            <StationTitle>«Райымбек батыра»</StationTitle>
          </Pressable>
        </StationView>

        <StationView>
          <Pressable
            onPress={() => {
              navigateToStationTimeTable
                ? navigateToStationTimeTable('Жибек жолы')
                : navigateToStationDescription('Жибек жолы');
            }}
          >
            <StationTitle>«Жибек жолы»</StationTitle>
          </Pressable>
        </StationView>

        <StationView>
          <Pressable
            onPress={() => {
              navigateToStationTimeTable
                ? navigateToStationTimeTable('Алмалы')
                : navigateToStationDescription('Алмалы');
            }}
          >
            <StationTitle>«Алмалы»</StationTitle>
          </Pressable>
        </StationView>

        <StationView>
          <Pressable
            onPress={() => {
              navigateToStationTimeTable
                ? navigateToStationTimeTable('Абая')
                : navigateToStationDescription('Абая');
            }}
          >
            <StationTitle>«Абая»</StationTitle>
          </Pressable>
        </StationView>

        <StationView>
          <Pressable
            onPress={() => {
              navigateToStationTimeTable
                ? navigateToStationTimeTable('Байконыр')
                : navigateToStationDescription('Байконыр');
            }}
          >
            <StationTitle>«Байконыр»</StationTitle>
          </Pressable>
        </StationView>

        <StationView>
          <Pressable
            onPress={() => {
              navigateToStationTimeTable
                ? navigateToStationTimeTable('Театр имени Мухтара Ауэзова')
                : navigateToStationDescription('Театр имени Мухтара Ауэзова');
            }}
          >
            <StationTitle>«Театр имени Мухтара Ауэзова»</StationTitle>
          </Pressable>
        </StationView>

        <StationView>
          <Pressable
            onPress={() => {
              navigateToStationTimeTable
                ? navigateToStationTimeTable('Алатау')
                : navigateToStationDescription('Алатау');
            }}
          >
            <StationTitle>«Алатау»</StationTitle>
          </Pressable>
        </StationView>

        <StationView>
          <Pressable
            onPress={() => {
              navigateToStationTimeTable
                ? navigateToStationTimeTable('Сайран')
                : navigateToStationDescription('Сайран');
            }}
          >
            <StationTitle>«Сайран»</StationTitle>
          </Pressable>
        </StationView>

        <StationView>
          <Pressable
            onPress={() => {
              navigateToStationTimeTable
                ? navigateToStationTimeTable('Москва')
                : navigateToStationDescription('Москва');
            }}
          >
            <StationTitle>«Москва»</StationTitle>
          </Pressable>
        </StationView>

        <StationView>
          <Pressable
            onPress={() => {
              navigateToStationTimeTable
                ? navigateToStationTimeTable('Сарыарка')
                : navigateToStationDescription('Сарыарка');
            }}
          >
            <StationTitle>«Сарыарка»</StationTitle>
          </Pressable>
        </StationView>

        <StationView>
          <Pressable
            onPress={() => {
              navigateToStationTimeTable
                ? navigateToStationTimeTable('Б.Момышулы')
                : navigateToStationDescription('Б.Момышулы');
            }}
          >
            <StationTitle>«Б.Момышулы»</StationTitle>
          </Pressable>
        </StationView>
      </View>
    </ScrollView>
  );
}

export default StationList;
