import React from 'react';
import { View, ScrollView, Button } from 'react-native';
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

function Station() {
  return (
    <ScrollView>
      <View>
        <StationView>
          <StationContainer style={{ marginTop: 30 }}>
            <StationButton title='«Райымбек батыра»'></StationButton>
          </StationContainer>
        </StationView>

        <StationView>
          <StationContainer>
            <StationButton title='«Жибек жолы»'></StationButton>
          </StationContainer>
        </StationView>

        <StationView>
          <StationContainer>
            <StationButton title='«Алмалы»'></StationButton>
          </StationContainer>
        </StationView>

        <StationView>
          <StationContainer>
            <StationButton title='«Абая»'></StationButton>
          </StationContainer>
        </StationView>

        <StationView>
          <StationContainer>
            <StationButton title='«Байконыр»'></StationButton>
          </StationContainer>
        </StationView>

        <StationView>
          <StationContainer>
            <StationButton title='«Театр имени Мухтара Ауэзова»'></StationButton>
          </StationContainer>
        </StationView>

        <StationView>
          <StationContainer>
            <StationButton title='«Алатау»'></StationButton>
          </StationContainer>
        </StationView>

        <StationView>
          <StationContainer>
            <StationButton title='«Сайран»'></StationButton>
          </StationContainer>
        </StationView>

        <StationView>
          <StationContainer>
            <StationButton title='«Москва»'></StationButton>
          </StationContainer>
        </StationView>

        <StationView>
          <StationContainer>
            <StationButton title='«Сарыарка»'></StationButton>
          </StationContainer>
        </StationView>

        <StationView>
          <StationContainer>
            <StationButton title='«Б.Момышулы»'></StationButton>
          </StationContainer>
        </StationView>
      </View>
    </ScrollView>
  );
}

export default Station;
