import { ScrollView, View, Text } from 'react-native';
import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  padding: 10px;
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
  margin-top: ${(props) => (props.section ? '5px' : '20px')}
  padding: 15px;
  font-size: ${(props) => (props.section ? '14px' : '17px')}
  text-align:  ${(props) => (props.section ? 'center' : '')}
  font-weight: 600;
  font-weight: bold;
`;

const PostDescription = styled.Text`
  flex: 1;
`;

const PostHighlightDescript = styled.Text`
  font-weight: bold;
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
    // contentContainerStyle={{ width: '100%', height: 667 }}
    // when working from pc
    <ScrollView>
      <View>
        <PostTitle>
          {truncateTitle('История строительства метрополитена')}
        </PostTitle>
        <PostContainer>
          <PostView>
            <PostImage source={require('../../assets/Metro-beginning.jpg')} />
            <PostDescription>
              <PostHighlightDescript>В 1988</PostHighlightDescript> году в
              Алматы началось активное строительство метрополитена. Но распад
              СССР в 1991 году и последовавший за ним разрыв хозяйственных и
              экономических связей не позволил в полной мере осуществить
              строительство метрополитена г. Алматы.
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

        <PostTitle section>
          Основные вехи строительства метрополитена в г. Алматы
        </PostTitle>
        <PostContainer>
          <PostView>
            <PostImage source={require('../../assets/1988.jpg')} />
            <PostDescription>
              <PostHighlightDescript>1988 год{'\n'}</PostHighlightDescript>
              сентября - В районе пересечения улицы Фурманова и проспекта им.
              50-летия Октября в 16 часов 25 минут экскаваторщик Ромсан Топаев
              из 59-й мехколонны треста «Средазстроймеханизация» вынул первый
              ковш грунта под строительство первой станции Алматинского
              метрополитена – «Октябрьская».
            </PostDescription>
          </PostView>
          <PostDescriptionUnderImg>
            28 сентября - Приказом министра Минтрансстроя № 156-ОР за подписью
            В.А. Брежнева строительство метрополитена в г. Алма-Ате с 01.01.
            1989 г. поручается осуществлять СУС «Бамтоннельстрой».
          </PostDescriptionUnderImg>
          <PostDescriptionUnderImg>
            Октябрь - Приступили к сооружению вентиляционного ствола № 13
            перегона ст. «Октябрьская» – ст. «Жибек Жолы».
          </PostDescriptionUnderImg>
        </PostContainer>

        <PostContainer style={{ paddingLeft: 5 }}>
          <Text
            style={{
              fontWeight: 'bold',
              paddingTop: 10,
              paddingLeft: 10,
              paddingBottom: 0,
            }}
          >
            1989 год
          </Text>
          <PostView>
            <PostDescription>
              Приступили к сооружению рабочего ствола № 110-бис, № 114-бис, №
              112-бис, вентиляционного ствола № 19, № 15, № 113, наклонного хода
              ст. «Жибек Жолы». {'\n'}
              {'\n'}Со стороны ст. «Октябрьская» приступили к сооружению левого
              перегонного тоннеля механизированным проходческим комплексом КТ
              5,6-Д2.
            </PostDescription>
          </PostView>
          <Text
            style={{
              fontWeight: 'bold',
              paddingTop: 10,
              paddingLeft: 10,
              paddingBottom: 0,
            }}
          >
            1990 год
          </Text>
          <PostView>
            <PostDescription>
              Приступили к сооружению рабочего ствола № 110-бис, № 114-бис, №
              112-бис, вентиляционного ствола № 19, № 15, № 113, наклонного хода
              ст. «Жибек Жолы». {'\n'}
              {'\n'}Со стороны ст. «Алатау» начата проходка левого перегонного
              тоннеля немеханизированным проходческим комплексом КПЩ-12. {'\n'}
              {'\n'}11 мая - Совет Министров КазССР принял Постановление № 182
              «Об обеспечении строительства первого участка первой линии
              метрополитена в г. Алма-Ате» с определением объемов, сроков и
              исполнителей.
            </PostDescription>
          </PostView>
        </PostContainer>

        <PostContainer style={{ paddingLeft: 5 }}>
          <Text
            style={{
              fontWeight: 'bold',
              paddingTop: 10,
              paddingLeft: 10,
              paddingBottom: 0,
            }}
          >
            1991 год
          </Text>
          <PostView>
            <PostDescription>
              Со стороны ст. «Алатау» начата проходка правого перегонного
              тоннеля немеханизированным проходческим комплексом КПЩ-12.
              {'\n'}
              {'\n'}Приступили к строительству правого перегонного тоннеля со
              стороны ст. «Райымбек».
            </PostDescription>
            <PostImage source={require('../../assets/1991.jpg')} />
          </PostView>

          <Text
            style={{
              fontWeight: 'bold',
              paddingTop: 10,
              paddingLeft: 10,
              paddingBottom: 0,
            }}
          >
            1992 год
          </Text>
          <PostView>
            <PostDescription>
              15июня - В целях создания единой структуры управления
              строительством первой очереди метрополитена в Алма-Ате и
              рационального использования финансовых ресурсов решением главы
              городской администрации З.К. Нуркадиловым № 221 Управление по
              координации проектирования и строительства метрополитена в г.
              Алма-Ате упразднено и создано Проектно-строительное объединение на
              базе ранее существовавших служб заказчика и генподрядчика – «ПСО
              Алматыметрострой». {'\n'}
              {'\n'}Приступили к сооружению вентиляционного ствола № 111.
            </PostDescription>
          </PostView>
        </PostContainer>

        <PostContainer>
          <PostView>
            <PostImage source={require('../../assets/1993.jpg')} />
            <PostDescription>
              <PostHighlightDescript>1993 год{'\n'}</PostHighlightDescript>1
              января - Из института «Алмаатагипротранс» отдел метро выделился в
              самостоятельную фирму «Метропроект» во главе П.В. Пашковским,
              которая вошла в состав «ПСО Алмаатаметрострой».
            </PostDescription>
          </PostView>
          <PostDescriptionUnderImg>
            ТОО «Тоннельный отряд № 1» произвел сбойку левого перегонного
            тоннеля с подходной выработкой ст. «Жибек Жолы».
          </PostDescriptionUnderImg>
          <PostDescriptionUnderImg>
            Приступили к сооружению рабочего ствола № 18-бис. Начато сооружение
            перегонных тоннелей под железнодорожными путями вокзала Алматы-2 со
            стороны южного портала в направлении электродепо.
          </PostDescriptionUnderImg>
          <PostDescriptionUnderImg>
            5 февраля - Сбойка со станцией «Жибек Жолы» правого перегонного
            тоннеля между двумя станциями «Райымбек» и «Жибек Жолы».
          </PostDescriptionUnderImg>
        </PostContainer>

        <PostContainer style={{ paddingLeft: 5 }}>
          <Text
            style={{
              fontWeight: 'bold',
              paddingTop: 10,
              paddingLeft: 10,
              paddingBottom: 0,
            }}
          >
            1994 год
          </Text>
          <PostView>
            <PostDescription>
              31 марта - На основании постановления Алматинского городского
              территориального комитета госимущества и приватизации образовано
              ОАО «Алматыметрокурылыс».
            </PostDescription>
          </PostView>
          <Text
            style={{
              fontWeight: 'bold',
              paddingTop: 10,
              paddingLeft: 10,
              paddingBottom: 0,
            }}
          >
            1996 год
          </Text>
          <PostView>
            <PostDescription>
              Июль - Приступили к сооружению наклонного хода ст. «Абай».
              Применен проходческий комплекс ТНУ-4.
            </PostDescription>
          </PostView>
        </PostContainer>

        <PostContainer style={{ paddingLeft: 5 }}>
          <Text
            style={{
              fontWeight: 'bold',
              paddingTop: 10,
              paddingLeft: 10,
              paddingBottom: 0,
            }}
          >
            2001 год
          </Text>
          <PostView>
            <PostDescription>
              22 ноября - Произведена сбойка левого перегонного тоннеля с
              западной подходной ст. «Тулпар». Тоннель протяженностью 1330
              метров от ст. «Алатау» до ст. «Тулпар» пробивался 11 лет.{'\n'}
              {'\n'}
              <PostHighlightDescript>
                2004 год{'\n'}
                {'\n'}
              </PostHighlightDescript>
              4 августа - Произведена сбойка левого перегонного тоннеля между
              двумя станциями «Жибек Жолы» и «Алмалы».{'\n'}
              {'\n'}4 октября – Произведена сбойка правого перегонного тоннеля
              между двумя станциями «Жибек жолы» и «Алмалы»{'\n'}
              {'\n'}
              21 декабря - Сбойка правого перегонного тоннеля с восточной
              подходной ст. «Тулпар». Тоннель протяженностью 1323 метров от ст.
              «Алатау» до ст. «Тулпар» пробивался 13 лет.
            </PostDescription>
            <PostImage source={require('../../assets/2001.jpg')} />
          </PostView>

          {/* <Text
            style={{
              fontWeight: 'bold',
              paddingTop: 10,
              paddingLeft: 10,
              paddingBottom: 0,
            }}
          >
            2004 год
          </Text> */}
          {/* <PostView>
            <PostDescription>
              4 августа - Произведена сбойка левого перегонного тоннеля между
              двумя станциями «Жибек Жолы» и «Алмалы». {'\n'}
              {'\n'}4 октября – Произведена сбойка правого перегонного тоннеля
              между двумя станциями «Жибек жолы» и «Алмалы»{'\n'}
              {'\n'}21 декабря - Сбойка правого перегонного тоннеля с восточной
              подходной ст. «Тулпар». Тоннель протяженностью 1323 метров от ст.
              «Алатау» до ст. «Тулпар» пробивался 13 лет.
            </PostDescription>
          </PostView> */}
        </PostContainer>
      </View>
    </ScrollView>
  );
}
