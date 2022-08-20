import { ScrollView, View } from 'react-native';
import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
`;

const PostContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: rbga(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 120px;
  height: 120px;
  margin: 0 15px 0 0;
  border-radius: 12px;
`;

const PostTitle = styled.Text`
  margin-top: 20px;
  padding: 15px;
  font-size: 17px;
  font-weight: 600;
`;

const PostDescription = styled.Text`
  flex: 2;
`;

const PostDescriptionUnderImg = styled.Text`
  padding-right: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
`;

const truncateTitle = (str) => {
  if (str.length >= 50) {
    return str.substring(0, 50) + '...';
  }

  return str;
};

export default function Post() {
  return (
    <ScrollView>
      <View>
        <PostTitle>
          {truncateTitle('История строительства метрополитена')}
        </PostTitle>
        <PostContainer>
          <PostView>
            <PostImage source={require('../../assets/Metro-beginning.jpg')} />
            <PostDescription>
              В 1988 году в Алматы началось активное строительство
              метрополитена. Но распад СССР в 1991 году и последовавший за ним
              разрыв хозяйственных и экономических связей не позволил в полной
              мере осуществить строительство метрополитена г. Алматы.
            </PostDescription>
          </PostView>
          <PostDescriptionUnderImg>
            Многие вопросы остались нерешенными из-за ликвидации ряда
            министерств и ведомств. И это стало причиной значительного
            отставания в сроках строительства метро. 1990-е годы явились
            периодом создания собственной материально-технической и научной базы
            метростроения. Несмотря на минимальное финансирование, продолжалась
            проходка перегонных и эскалаторных станций, подходных выработок к
            станциям глубокого заложения, а главное, были сохранены опытные
            кадры инженеров и рабочих.
          </PostDescriptionUnderImg>
        </PostContainer>

        <PostTitle>
          {truncateTitle('История строительства метрополитена')}
        </PostTitle>
        <PostContainer>
          <PostView>
            <PostImage source={require('../../assets/Metro-beginning.jpg')} />
            <PostDescription>
              В 1988 году в Алматы началось активное строительство
              метрополитена. Но распад СССР в 1991 году и последовавший за ним
              разрыв хозяйственных и экономических связей не позволил в полной
              мере осуществить строительство метрополитена г. Алматы.
            </PostDescription>
          </PostView>
          <PostDescriptionUnderImg>
            Многие вопросы остались нерешенными из-за ликвидации ряда
            министерств и ведомств. И это стало причиной значительного
            отставания в сроках строительства метро. 1990-е годы явились
            периодом создания собственной материально-технической и научной базы
            метростроения. Несмотря на минимальное финансирование, продолжалась
            проходка перегонных и эскалаторных станций, подходных выработок к
            станциям глубокого заложения, а главное, были сохранены опытные
            кадры инженеров и рабочих.
          </PostDescriptionUnderImg>
        </PostContainer>
      </View>
    </ScrollView>
  );
}
