import { ScrollView, View, Text } from 'react-native';
import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  padding: ${(props) => (props.section ? '10px 10px 0 10px' : '10px')};
`;

const PostContainer = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: rbga(0, 0, 0, 0.1);
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
  font-weight: bold;
`;

const PostDescription = styled.Text`
  flex: 1;
  padding: ${(props) => (props.section ? '0 0 0 5px' : '0')};
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
        <PostTitle style={{ fontWeight: 'bold' }}>
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
              <PostHighlightDescript>1993 год{'\n'}`</PostHighlightDescript>1
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
          <PostView section>
            <PostDescription>
              22 ноября - Произведена сбойка левого перегонного тоннеля с
              западной подходной ст. «Тулпар». Тоннель протяженностью 1330
              метров от ст. «Алатау» до ст. «Тулпар» пробивался 11 лет.{' '}
            </PostDescription>
            <PostImage source={require('../../assets/2001.jpg')} />
          </PostView>

          <Text
            style={{
              fontWeight: 'bold',
              paddingLeft: 10,
              paddingBottom: 0,
            }}
          >
            2004 год
          </Text>
          <PostView>
            <PostDescription>
              4 августа - Произведена сбойка левого перегонного тоннеля между
              двумя станциями «Жибек Жолы» и «Алмалы». {'\n'}
              {'\n'}4 октября – Произведена сбойка правого перегонного тоннеля
              между двумя станциями «Жибек жолы» и «Алмалы»{'\n'}
              {'\n'}21 декабря - Сбойка правого перегонного тоннеля с восточной
              подходной ст. «Тулпар». Тоннель протяженностью 1323 метров от ст.
              «Алатау» до ст. «Тулпар» пробивался 13 лет.{'\n'}
            </PostDescription>
          </PostView>

          <Text
            style={{
              fontWeight: 'bold',
              paddingLeft: 10,
              paddingTop: 10,
              paddingBottom: 0,
            }}
          >
            2005 год
          </Text>
          <PostView>
            <PostDescription>
              19 апреля - Совместно со специалистами австрийской компании «Бетон
              унд Мониербау» приступили к сооружению левого станционного тоннеля
              ст. «Жибек Жолы».{'\n'}
              {'\n'}7 ноября - Посещение Президентом Республики Казахстан Н.А.
              Назарбаевым объекта строящегося метрополитена станции «Алмалы».
            </PostDescription>
          </PostView>
        </PostContainer>

        <PostContainer>
          <Text
            style={{
              fontWeight: 'bold',
              paddingTop: 10,
              paddingLeft: 15,
              paddingBottom: 0,
            }}
          >
            2006 год
          </Text>
          <PostView>
            <PostDescription section>
              1 января - Завершена проходка левого перегонного тоннеля ст.
              «Тулпар» – ст. «Байконур». Начато сооружение поперечной камеры ст.
              «Байконур» через проходческий комплекс КПЩ-12. Начато сооружение
              защитного экрана под улицей Жарокова. Для устройства экрана
              использован микротоннелепроходческий комплекс (МТПК) AVN -600
              фирмы «Херренкнехт АГ». Пуск щита «Херренкнехт» на ст. «Алмалы».
            </PostDescription>
          </PostView>

          <PostView>
            <PostDescription section>
              9 июня - Сбойка правого перегонного тоннеля с поперечной камерой
              ст. «Байконур».
            </PostDescription>
          </PostView>

          <PostView>
            <PostDescription section>
              7 июля - Сбойка левого перегонного тоннеля с конвейерной камерой
              на ст. «Алмалы» (первая сбойка проходческого комплекса
              «Херренкнехт»).
            </PostDescription>
          </PostView>

          <PostView>
            <PostDescription section>
              Начато сооружение правого станционного тоннеля ст. «Алмалы»
              методом НАТМ, а также наклонного хода ст. «Тулпар».
            </PostDescription>
          </PostView>
        </PostContainer>

        <PostContainer>
          <PostView>
            <PostImage source={require('../../assets/2007.jpg')} />
            <PostDescription>
              <PostHighlightDescript>2007 год{'\n'}</PostHighlightDescript>
              Начато сооружение левого станционного тоннеля ст. «Тулпар», левого
              станционного тоннеля ст. «Алмалы», правого станционного тоннеля
              ст. «Жибек жолы», левого станционного тоннеля ст. Байконур»,
              среднего станционного тоннеля ст. «Алмалы» методом НАТМ, а также
              сооружение наклонного хода и подходного коридора ст. «Байконур».
            </PostDescription>
          </PostView>
          <PostView>
            <PostDescription section>
              25 мая – Сбойка с поперечной камерой станции «Абай» правого
              перегонного тоннеля между станциями «Алмалы» и «Абай».
            </PostDescription>
          </PostView>

          <PostView>
            <PostDescription section>
              10 июня – Сбойка с поперечной камерой станции «Абай» левого
              перегонного тоннеля между станциями «Алмалы» и «Абай» (
              проходческий комплекс «Херренкнехт»).
            </PostDescription>
          </PostView>

          <PostView>
            <PostDescription section>
              Завершено сооружение правого станционного тоннеля ст. «Алмалы» в
              основной обделке
            </PostDescription>
          </PostView>

          <PostView>
            <PostDescription section>
              Начато сооружение защитного экрана из труб под проспектом
              Гагарина. Для устройства экрана использован
              микротоннелепроходческий комплекс (МТПК) AVN-600 фирмы
              «Херренкнехт АГ».
            </PostDescription>
          </PostView>

          <PostView>
            <PostDescription section>
              3 августа - Президент Республики Казахстан Нурсултан Назарбаев
              посетил объекты метрополитена.
            </PostDescription>
          </PostView>

          <PostView>
            <PostDescription section>
              Завершено сооружение левого станционного тоннеля ст. «Алмалы» и
              левого станционного тоннеля ст. «Тулпар» в основной обделке.
            </PostDescription>
          </PostView>
        </PostContainer>

        <PostContainer>
          <Text
            style={{
              fontWeight: 'bold',
              paddingLeft: 15,
              paddingTop: 10,
              paddingBottom: 0,
            }}
          >
            2008 год
          </Text>
          <PostView>
            <PostDescription section>
              16 января - Завершено сооружение среднего станционного тоннеля ст.
              «Алмалы» в основной обделке{'\n'}
              {'\n'}2 марта - Начато сооружение правого станционного тоннеля ст.
              «Абай» методом НАТМ.
            </PostDescription>
            <PostImage source={require('../../assets/2008.jpg')} />
          </PostView>
          <PostView>
            <PostDescription section>
              10 марта - Начато сооружение правого станционного тоннеля ст.
              «Тулпар» методом НАТМ.
            </PostDescription>
          </PostView>

          <PostView>
            <PostDescription section>
              15 апреля - Сбойка правого перегонного тоннеля ст. «Абай» – ст.
              «Байконур» с демонтажной камерой. Данной сбойкой завершена
              проходка правого перегонного тоннеля от ст. «Райымбек» до ст.
              «Алатау».
            </PostDescription>
          </PostView>

          <PostView>
            <PostDescription section>
              25 июля - Произведена последняя сбойка между станциями «Абай» и
              «Байконур». Завершение строительства перегонных тоннелей первой
              очереди.
            </PostDescription>
          </PostView>
        </PostContainer>

        <PostContainer>
          <Text
            style={{
              fontWeight: 'bold',
              paddingLeft: 15,
              paddingTop: 10,
              paddingBottom: 0,
            }}
          >
            2011 год
          </Text>
          <PostView>
            <PostDescription section>
              1-декабря первая очередь метрополитена общей протяженностью 8,6 км
              была сдана в эксплуатацию . В нее входят семь станций: «Райымбек
              батыр», «Жибек жолы», «Алмалы», «Абай», «Байконыр» и «Драмтеатр
              им. Ауэзова» и «Алатау».
            </PostDescription>
          </PostView>

          <Text
            style={{
              fontWeight: 'bold',
              paddingLeft: 15,
              paddingTop: 10,
              paddingBottom: 0,
            }}
          >
            2015 год
          </Text>
          <PostView>
            <PostDescription section>
              18 апреля – введен в эксплуатацию первый пусковой комплекс второй
              очереди первой линии метрополитена: станции «Сайран» и «Москва».
              Протяженность тоннели метро увеличилась на 2,74 км.
            </PostDescription>
          </PostView>

          <PostView>
            <PostDescription section>
              Станция «Сайран» расположена по проспекту Абая, между ул.
              Брусиловского и ул. Тлендиева.
            </PostDescription>
          </PostView>

          <PostView>
            <PostDescription section>
              Станция «Москва» расположена по проспекту Абая, между ул. Утеген
              батыра и пр. Алтынсарина.
            </PostDescription>
          </PostView>
        </PostContainer>
      </View>
    </ScrollView>
  );
}
