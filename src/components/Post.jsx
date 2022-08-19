import { View } from 'react-native';
import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rbga(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  flex-direction: row;
  padding: 15px;
  font-size: 17px;
  font-weight: 600;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

const truncateTitle = (str) => {
  if (str.length >= 50) {
    return str.substring(0, 50) + '...';
  }

  return str;
};

export default function Post() {
  return (
    <View>
      <PostTitle>
        {truncateTitle('История строительства метрополитена')}
      </PostTitle>
      <PostView>
        <PostImage source={require('../../assets/Metro-beginning.jpg')} />
        <PostDetails>
          В 1988 году в Алматы началось активное строительство метрополитена. Но
          распад СССР в 1991 году и последовавший за ним разрыв хозяйственных и
          экономических связей не позволил в полной мере осуществить
          строительство метрополитена г. Алматы. Многие вопросы остались
          нерешенными из-за ликвидации ряда министерств и ведомств. И это стало
          причиной значительного отставания в сроках строительства метро. 1990-е
          годы явились периодом создания собственной материально-технической и
          научной базы метростроения. Несмотря на минимальное финансирование,
          продолжалась проходка перегонных и эскалаторных станций, подходных
          выработок к станциям глубокого заложения, а главное, были сохранены
          опытные кадры инженеров и рабочих.
        </PostDetails>
      </PostView>
    </View>
  );
}
