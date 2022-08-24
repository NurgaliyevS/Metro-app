import React, { useEffect } from 'react';

import { ScrollView } from 'react-native';

import styled from 'styled-components/native';

import { setTitle } from '../station/StationTimetable';

const StationContainerDescription = styled.View``;

const StationDescriptionTitle = styled.Text`
  font-weight: bold;
  font-size: 17px;
  padding: 15px;
`;

const StationDescriptionText = styled.Text`
  font-size: 14px;
  padding: 15px;
`;

const StationDescriptionTextHighlight = styled.Text`
  font-weight: bold;
`;

const StationDescriptionImage = styled.Image`
  width: 350px;
  height: 220px;
  border-radius: 12px;
`;

const StationDescriptionImageContainer = styled.View`
  padding: 20px;
`;

function stationDescriptionRaimbek() {
  return (
    <>
      <StationContainerDescription>
        <StationDescriptionTitle>
          Станция «Райымбек батыра»
        </StationDescriptionTitle>
        <StationDescriptionText>
          <StationDescriptionTextHighlight>
            Станция «Райымбек батыра»{' '}
          </StationDescriptionTextHighlight>
          - мелкого заложения. Расположена в районе пересечения ​проспекта
          ​Назарбаева и проспекта Райымбека батыра. Входы и выходы в подземный
          вестибюль расположены на каждом углу перекрестка ​проспекта
          ​Назарбаева​ и проспекта Райымбека батыра. Ещё два входа-выхода
          расположены по ​проспекта ​Назарбаева, севернее проспекта Райымбека
          батыра.
          {'\n'} {'\n'}
          Станция мелкого заложения односводчатая с одной островной платформой
          шириной — 10 м, длиной — 104 м. {'\n'} {'\n'}
          Дизайн выполнен в духе совмещения древнего с современностью. На стенах
          изображены национальные узоры и наскальные рисунки. {'\n'} {'\n'}
          <StationDescriptionTextHighlight>
            Ближайшие объекты от станции «Райымбек батыра»​: {'\n'} {'\n'}
          </StationDescriptionTextHighlight>
          -ТД "Мерей" {'\n'}-ЖД вокзал "Алматы-2"{'\n'}-Зеленый Базар{'\n'}
          -Автовокзал "Саяхат"{'\n'}
        </StationDescriptionText>
      </StationContainerDescription>
      <StationDescriptionImageContainer
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <StationDescriptionImage
          source={require('../../../assets/raiymbekStation.jpg')}
        />
      </StationDescriptionImageContainer>
    </>
  );
}

function stationDescriptionZhibek() {
  return (
    <>
      <StationContainerDescription>
        <StationDescriptionTitle>Станция «Жибек жолы»</StationDescriptionTitle>
        <StationDescriptionText>
          <StationDescriptionTextHighlight>
            Станция «Жибек жолы»{' '}
          </StationDescriptionTextHighlight>
          - глубокого заложения. Расположена в районе пересечения улиц Панфилова
          и Гоголя. Входы и выходы в подземный вестибюль расположены на
          юго-восточном пересечении улиц Гоголя и Панфилова
          {'\n'} {'\n'}
          Станция глубокого заложения (глубина 30 м) пилонного типа с
          междупутьем 25 м. Состоит из трёх залов — центрального и двух боковых,
          которые образуют общую островную платформу шириной 19,8 м, длиной 104
          м. Спуск-подъем на станцию по эскалаторам (4 ленты) высотой подъема
          28,5 м, длиной 57,0 м.{'\n'}
          {'\n'}
          Архитектурно-художественное решение интерьера основано на традиционных
          приемах декоративно-прикладного искусства казахского народа. Стены
          облицованы мраморной мозаикой бежевого цвета, украшены декоративными
          элементами, изготовленными из искусственного камня. Арки проходов и
          плинтус — мрамор коричневого цвета. Пол выложен гранитными плитками с
          изображенным на них национальным орнаментом. На торцевой стене
          центрального зала платформы исполнено декоративное панно в виде двух
          окружностей, изображающее известнейшие символы стран, через которые
          проходил Великий Шелковый Путь: индийский Тадж-Махал, Великая
          китайская стена,Мавзолей Ходжи Ахмеда Ясави, Египетские пирамиды,
          Римский Колизей, Афинский Парфенон, Монастырь Эд-Дейр в Иордании. Что
          примечательно, в том же ряду изображена Пирамида Кукулькана,
          находящаяся в Мексике, на территории, лежащей по другую сторону
          Земного шара от Шелкового пути. Основным технологическим материалом
          исполнения явялется керамика в виде глазурированной рельефной основы,
          покрытой ручной росписью в сочетании со скульптурными барельефами.
          {'\n'}
          {'\n'}
          <StationDescriptionTextHighlight>
            Ближайшие объекты от станции «Жибек жолы»:{'\n'}
            {'\n'}
          </StationDescriptionTextHighlight>
          -ЦУМ (ТД «Зангар»){'\n'}-Гостиницы «Отрар», «Жетысу»{'\n'}-Аптека № 2
          {'\n'}-Супермаркет «Юбилейный»{'\n'}-Магазины «Москва», «Академкнига»,
          «Silk Way»{'\n'}-Кинотеатр «Цезарь»{'\n'}-Пешеходная зона (улица Жибек
          Жолы между проспектом Абылай-Хана и улицей Кунаева: «Алматинский
          Арбат»){'\n'}-Вознесенский собор{'\n'}-Парк 28 Панфиловцев.{'\n'}-офис
          "Алматытелеком"
        </StationDescriptionText>
      </StationContainerDescription>
      <StationDescriptionImageContainer
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <StationDescriptionImage
          source={require('../../../assets/zhibekStation.jpg')}
        />
      </StationDescriptionImageContainer>
    </>
  );
}

function stationDescriptionAlmaly() {
  return (
    <>
      <StationContainerDescription>
        <StationDescriptionTitle>Станция «Алмалы»</StationDescriptionTitle>
        <StationDescriptionText>
          <StationDescriptionTextHighlight>
            Станция «Алмалы»{' '}
          </StationDescriptionTextHighlight>
          - глубокого заложения. Расположена в районе пересечения улиц Карасай
          батыра и Панфилова. Входы и выходы расположены по восточной стороне
          ул. Панфилова, севернее ул. Карасай батыра.
          {'\n'} {'\n'}
          Станция глубокого заложения (глубина 30 м) пилонного типа с
          междупутьем 25 м. Состоит из трёх залов — центрального и двух боковых,
          которые образуют общую островную платформу шириной 19,8 м, длиной 104
          м. Спуск-подъем на станцию по эскалаторам (4 ленты) высотой подъема
          29,0 м, длиной 58,0 м. {'\n'} {'\n'}
          Стены станции облицованы мраморной мозаикой, рисунок которой образует
          национальный орнамент. Источниками освещения являются декоративные
          люстры и светильники, расположенные над карнизами из нержавеющей
          стали. Арки проходов и плинтусы — мрамор коричневого цвета. Полы
          выложены гранитными плитками. В торце платформы расположено
          художественно-тематическое витражное панно с искусственной подсветкой.
          В панно заложена идея древнего города и цветущего сада. Композиция
          состоит из трех частей: правая часть — цветение сада с очертаниями
          древнего города Алмалы. Левая часть — созревание плодов с силуэтом
          каравана. Центральная часть — яблоня с плодами, как символ плодородия,
          древа жизни и благоденствия.{'\n'} {'\n'}
          <StationDescriptionTextHighlight>
            Ближайшие объекты станции «Алмалы»:{'\n'} {'\n'}
          </StationDescriptionTextHighlight>
          -Театр оперы и балета имени Абая
          {'\n'}-Гостиница «Алма-Ата»
          {'\n'}-Управление «Казахстан Темир Жолы»
          {'\n'}-Площадь Астаны
          {'\n'}-Казахская национальная академия искусств имени Т. К. Жургенова
          {'\n'}-Главпочтамт
          {'\n'}-Магазин «Столичный»
          {'\n'}-КБТУ
        </StationDescriptionText>
      </StationContainerDescription>
      <StationDescriptionImageContainer
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <StationDescriptionImage
          source={require('../../../assets/almalyStation.jpg')}
        />
      </StationDescriptionImageContainer>
    </>
  );
}

function stationDescriptionAbay() {
  return (
    <>
      <StationContainerDescription>
        <StationDescriptionTitle>Станция «Абая»</StationDescriptionTitle>
        <StationDescriptionText>
          <StationDescriptionTextHighlight>
            Станция «Абая»{' '}
          </StationDescriptionTextHighlight>
          - глубокого заложения. Расположена в районе пересечения проспекта
          Назарбаева и проспекта Абая. Входы и выходы расположены восточнее пр.
          Назарбаева, на пересечении с улицей Тулебаева, с северной и южной
          стороны пр. Абая.
          {'\n'} {'\n'}
          Станция глубокого заложения (глубина 78 м) колонного типа с
          междупутьем 18.1 м. Состоит из трех залов — центрального и двух
          боковых, которые образуют общую островную платформу шириной 15.2 м и
          длиной 104 м. Спуск-подъем на станцию по эскалаторам (4 ленты) высотой
          подъема 46,0 м, длиной 92,0 м. {'\n'} {'\n'}
          Архитектурно-художественное решение станции выполнено в современном
          стиле без использования традиционных архитектурных элементов. Стены
          отделаны мрамором бежевого и коричневого цветов. Полы выложены
          гранитом серо-бежевого и коричневого цветов. Карниз выполнен из
          нержавеющей стали. В торце платформы расположено художественное панно,
          выполненное в технике рельеф в бронзе и «флорентийская мозаика».
          Композиция выполнена в современном стиле. Бронзовый рельеф,
          изображающий Абая Кунанбаева, выделен на каменном фоне, на котором
          написаны отрывки из произведений Абая.{'\n'} {'\n'}
          <StationDescriptionTextHighlight>
            Ближайшие объекты от станции «Абая»:{'\n'} {'\n'}
          </StationDescriptionTextHighlight>
          -Дворец Республики
          {'\n'}-Гостиница «Казахстан»
          {'\n'}-Кинотеатр «Арман»
          {'\n'}-Канатная дорога на Кок-Тобе
          {'\n'}-магазин "Французский дом"
          {'\n'}-Площадь Республики
          {'\n'}-Театр драмы им. Лермонтова
          {'\n'}-Национальная библиотека
          {'\n'}-Университеты: КИМЭП, UIB, Аграрный, Туран
          {'\n'}-Колледж строительства и менеджмента
          {'\n'}-Акимат г. Алматы
        </StationDescriptionText>
      </StationContainerDescription>
      <StationDescriptionImageContainer
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <StationDescriptionImage
          source={require('../../../assets/abayStation.jpg')}
        />
      </StationDescriptionImageContainer>
    </>
  );
}

function stationDescriptionBaykonyr() {
  return (
    <>
      <StationContainerDescription>
        <StationDescriptionTitle>Станция «Байконыр»</StationDescriptionTitle>
        <StationDescriptionText>
          <StationDescriptionTextHighlight>
            Станция «Байконыр»{' '}
          </StationDescriptionTextHighlight>
          - глубокого заложения. Расположена в районе пересечения проспекта Абая
          и улицы Байтурсынова. Входы и выходы Входы-выхоы в подземный вестибюль
          расположены вдоль улицы Байтурсынова на юго-восточном и юго-западном
          пересечении спроспектом Абая. Юго-восточный вход оборудованным
          двухленточным эскалатором высотой подъема 6,0 м, длиной 12,0 м.​
          {'\n'} {'\n'}
          Станция глубокого заложения (глубина 20 м) колонного типа с
          междупутьем 18,1 м. Состоит из трёх залов — центрального и двух
          боковых, которые образуют общую островную платформу шириной 15,2 м и
          длиной 104 м. Спуск-подъем на станцию по эскалаторам (4 ленты) высотой
          подъема 20,0 м, длиной 40,0 м. {'\n'} {'\n'}
          Дизайн станции в стиле хайтек связан с космодромом Байконыр. Для
          отделки стен использована облицовка металлическими панелями голубого и
          светло-серого цветов. Пол выложен гранитом серого цвета. В торце
          платформенного участка установлено рекламно-информационное табло
          «видеостена», собранное из 16 светодиодных дисплев.{'\n'} {'\n'}
          <StationDescriptionTextHighlight>
            Ближайшие объекты от станции «Байконыр»:{'\n'} {'\n'}
          </StationDescriptionTextHighlight>
          -Дворец спорта имени Балуана Шолака
          {'\n'}-Центральный cтадион
          {'\n'}-ТД «Променад»
          {'\n'}-КазНИТУ им. Сатпаева
          {'\n'}-Алматинский университет энергетики и связи
          {'\n'}-Академия туризма и спорта​
        </StationDescriptionText>
      </StationContainerDescription>
      <StationDescriptionImageContainer
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <StationDescriptionImage
          source={require('../../../assets/baykonyrStation.jpg')}
        />
      </StationDescriptionImageContainer>
    </>
  );
}

function stationDescriptionAuesoz() {
  return (
    <>
      <StationContainerDescription>
        <StationDescriptionTitle>
          Станция «Театр имени Мухтара Ауэзова»
        </StationDescriptionTitle>
        <StationDescriptionText>
          <StationDescriptionTextHighlight>
            Станция «Театр имени Мухтара Ауэзова»{' '}
          </StationDescriptionTextHighlight>
          - глубокого заложения. Расположена в районе пересечения пр. Абая и ул.
          Муканова. Входы и выходы в подземный вестибюль расположены на северной
          и южной сторонах проспекта Абая в районе улицы Джандосова. К вестибюлю
          подходит пешеходный переход, расположенный поперек проспекта Абая.
          {'\n'} {'\n'}
          Станция глубокого заложения (глубина 30 м) колонного типа с
          междупутьем 18,1 м. Состоит из трех залов — центрального и двух
          боковых, которые образуют общую островную платформу шириной 15,2 м и
          длиной 104 м. Спуск-подъем на станцию по эскалаторам (4 ленты) высотой
          подъема 27,0 м, длиной 54,0 м.​ {'\n'} {'\n'}
          Интерьер станции выполнен из отделанных стен и колонн плитками
          травертина со вставленными объемными медальонами, выполненными из
          гиперпласта и украшенными национальным орнаментом и сценами из быта
          кочевников (16 сцен — по 8 с каждой стороны зала). Стены также
          украшены карнизным профилем из искусственного камня. Полы гранитные с
          простым, крупным рисунком. В торце платформы располагается живописное
          мозаичное панно с изображением сцены из спектакля.​{'\n'} {'\n'}
          <StationDescriptionTextHighlight>
            Ближайшие объекты от станции "Театр имени Мухтара Ауэзова​":{'\n'}{' '}
            {'\n'}
          </StationDescriptionTextHighlight>
          - Казахский государственный академический театр драмы имени М. Ауэзова
          {'\n'}- Казахский государственный цирк
          {'\n'}- Центральный дворец бракосочетания
          {'\n'}- Спортивный комплекс «Достык»
          {'\n'}- Государственный музей искусств РК имени А. Кастеева
        </StationDescriptionText>
      </StationContainerDescription>
      <StationDescriptionImageContainer
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <StationDescriptionImage
          source={require('../../../assets/AuesozStation.jpg')}
        />
      </StationDescriptionImageContainer>
    </>
  );
}

function stationDescriptionAlatau() {
  return (
    <>
      <StationContainerDescription>
        <StationDescriptionTitle>Станция «Алатау»</StationDescriptionTitle>
        <StationDescriptionText>
          <StationDescriptionTextHighlight>
            Станция «Алатау»{' '}
          </StationDescriptionTextHighlight>
          мелкого заложения. Расположена южнее пр. Абая, между ул. Жарокова и
          пр. Гагарина. Входы и выходы расположены вдоль проспекта Абая,
          Гагарина и улицы Жарокова. К вестибюлю № 1 подходит пешеходный
          переход, расположенный поперек проспекта Абая. Подземные вестибюли
          расположены по обе стороны платформенного участка.
          {'\n'} {'\n'}
          Станция мелкого заложения односводчатая с двумя боковыми посадочными
          платформами шириной — 5.4 м, длиной — 104 м, между которыми проходят
          рельсовые пути. Платформенный участок шириной — 17,7 м, высотой от
          уровня платформы — 11,6 м.​ {'\n'} {'\n'}
          За основу идеи проекта интерьера взято название станции — «Алатау», а
          также древнейшая символика народов, живших на территории Казахстана.
          Стены отделаны белым и зелёным мрамором. Полы из серого гранита с
          простым графическим рисунком из светло-коричневого гранита. Над
          спусками со стороны вестибюлей в торцах платформенного участка
          расположены художественные тематические панно, выполненные из римской
          мозаики, бронзы и рельефа с изображением горного хребта Заилийского
          Алатау, который величаво поднимается над городом Алма-Аты.​{'\n'}{' '}
          {'\n'}
          <StationDescriptionTextHighlight>
            Ближайшие объекты от станции Алатау:{'\n'} {'\n'}
          </StationDescriptionTextHighlight>
          -Дом издательств
          {'\n'}-ТД "Жанна"
          {'\n'}-ТД "Арена"
        </StationDescriptionText>
      </StationContainerDescription>
      <StationDescriptionImageContainer
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <StationDescriptionImage
          source={require('../../../assets/alatauStation.jpg')}
        />
      </StationDescriptionImageContainer>
    </>
  );
}

function stationDescriptionSairan() {
  return (
    <>
      <StationContainerDescription>
        <StationDescriptionTitle>Станция «Сайран»</StationDescriptionTitle>
        <StationDescriptionText>
          <StationDescriptionTextHighlight>
            Станция «Сайран»{' '}
          </StationDescriptionTextHighlight>
          расположена по проспекту Абая под проезжей частью между ул.
          Брусиловского и ул. Тлендиева в Бостандыкском районе.
          {'\n'} {'\n'}
          Является трехпролетной, колонной с островной платформой шириной 15,2
          м, длина посадочной платформы составляет – 110, 3 м.​ {'\n'} {'\n'}
          Станция мелкого заложения, расположена на глубине 16 м до платформы,
          разработана с двумя подземными вестибюлями, расположенными по торцам
          платформы и связанными с платформой станции лестницей высотой 4,0 м со
          стороны каждого вестибюля.​{'\n'} {'\n'}
          Входы в вестибюли станций предусмотрены через два наземных павильона в
          каждый вестибюль. Каждый из павильонов связан с вестибюлем двумя
          эскалаторами и лестницей, высотой от 6,8 до 8,3 м.{'\n'}
          {'\n'}
          <StationDescriptionTextHighlight>
            Ближайшие объекты от станции Сайран:{'\n'} {'\n'}
          </StationDescriptionTextHighlight>
          - Медицинский Центр «Темкен»
          {'\n'}- Институт горного дела имени Д. А. Кунаева
          {'\n'}- Школа-гимназия №140 имени М. Макатаева
          {'\n'}- Торгово-развлекательный комплекс «ADK»
          {'\n'}- Алматинский государственный колледж сервиса и технологий
        </StationDescriptionText>
      </StationContainerDescription>
      <StationDescriptionImageContainer
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <StationDescriptionImage
          source={require('../../../assets/sairanStation.jpg')}
        />
      </StationDescriptionImageContainer>
    </>
  );
}

function stationDescriptionMoscow() {
  return (
    <>
      <StationContainerDescription>
        <StationDescriptionTitle>Станция «Москва»</StationDescriptionTitle>
        <StationDescriptionText>
          <StationDescriptionTextHighlight>
            Станция «Москва»{' '}
          </StationDescriptionTextHighlight>
          расположена по проспекту Абая под проезжей частью между ул. Утеген
          батыра и пр. Алтынсарина в Ауэзовском районе.
          {'\n'} {'\n'}
          Является трехпролетной, колонной с островной платформой шириной 15,2
          м, длина платформы составляет – 110, 3 м.​ {'\n'} {'\n'}
          Станция мелкого заложения, расположена на глубине 20 м, разработана с
          двумя подземными вестибюлями, расположенными по торцам платформы и
          связанными с платформой станции лестницей высотой 4,0 м со стороны
          каждого вестибюля.​{'\n'} {'\n'}
          Входы в вестибюли станций предусмотрены через два наземных павильона в
          каждый вестибюль. Каждый из павильонов связан с вестибюлем двумя
          эскалаторами и лестницей, высотой от 6,8 до 8,3 м.{'\n'}
          {'\n'}В конструктивном отношении здания решены в виде
          пространственного рамно-связевого каркаса, состоящего из колонн,
          ригелей и диафрагм, объединённых в уровне верха этажей монолитными
          плитами перекрытий.{'\n'}
          {'\n'}
          <StationDescriptionTextHighlight>
            Ближайшие объекты от станции Москва:{'\n'} {'\n'}
          </StationDescriptionTextHighlight>
          - Бизнес-центр «КазИнвестСтрой»
          {'\n'}- Вещевой рынок «Тигрохауд»
          {'\n'}- ТЦ «MOSKVA Metropolitan»
          {'\n'}- Кинотеатр «Сарыарка»
          {'\n'}- Парк культуры и отдыха «Familypark»
        </StationDescriptionText>
      </StationContainerDescription>
      <StationDescriptionImageContainer
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <StationDescriptionImage
          source={require('../../../assets/moscowStation.jpg')}
        />
      </StationDescriptionImageContainer>
    </>
  );
}

function stationDescriptionSaryarka() {
  return (
    <>
      <StationContainerDescription>
        <StationDescriptionTitle>Станция «Сарыарка»</StationDescriptionTitle>
        <StationDescriptionText>
          <StationDescriptionTextHighlight>
            Станция «Сарыарка»{' '}
          </StationDescriptionTextHighlight>
          расположена под проезжей частью пр. Абая, между пр. Алтынсарина и ул.
          Саина, в районе Family парка.
          {'\n'} {'\n'}
          Станция глубокого заложения (33 м), трёхстворчатая, пилонного типа, с
          одним вестибюлем. Длина платформы 110 м.​ {'\n'} {'\n'}
          Основная идея при создании архитектурно-художественного оформления
          интерьера станции – отразить красоту и своеобразие бескрайних
          просторов Сарыарки.​{'\n'} {'\n'}
          Стены платформенного участка облицованы мраморной мозаичной плиткой с
          волнообразными вставками из гранитных плит, символически повторяющих
          рельеф мелкопесочника.{'\n'}
          {'\n'}На торцовой стене расположено панно, изображающее восход солнца
          над степями, на переднем плане целеустремленно мчится табун лошадей на
          фоне молодой столицы Нурсултан, расположенной в сердце бескрайних
          степей Сарыарки. Панно напоминают о богатом культурно-историческом
          наследии казахского народа.{'\n'}
          {'\n'}
        </StationDescriptionText>
      </StationContainerDescription>
      <StationDescriptionImageContainer
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <StationDescriptionImage
          source={require('../../../assets/saryarkaStation.jpg')}
        />
      </StationDescriptionImageContainer>
    </>
  );
}

function stationDescriptionMomushuly() {
  return (
    <>
      <StationContainerDescription>
        <StationDescriptionTitle>Станция «Б. Момышулы»</StationDescriptionTitle>
        <StationDescriptionText>
          <StationDescriptionTextHighlight>
            Станция «Б. Момышулы»{' '}
          </StationDescriptionTextHighlight>
          второй очереди метрополитена г. Алматы расположена по пр. Абая,
          западнее ул. Момышулы. Станция мелкого заложения, колонного типа,
          состоит из трёх пролетов 7,5 м; 5,7 м; 7,5 м; высотой 5,6 м. Длина
          платформы - 108 м.
          {'\n'} {'\n'}
          Станция расположена посреди большого жилого массива, так называемых
          спальных районов. С учетом этого, главной задачей проекта стало не
          только использование самых современных отделочных материалов, но также
          создание дружественной человеку культурной среды.​{'\n'} {'\n'}
          Для отделки стен и колонн платформы использованы инновационные
          керамические панели Kalesinterflex "под дерево" светлых тонов,
          жемчужно-серого цвета, для облицовки пола - натуральный гранит
          светло-серого цвета.{'\n'}
          {'\n'}В отделке стен и колонн вестибюля также использованы
          керамические панели Kalesinterflex, серого цвета и "под светлое
          дерево", освещение светодиодными светильниками нейтрального белого
          цвета.{'\n'}
          {'\n'}
        </StationDescriptionText>
      </StationContainerDescription>
      <StationDescriptionImageContainer
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <StationDescriptionImage
          source={require('../../../assets/momushulyStation.jpg')}
        />
      </StationDescriptionImageContainer>
    </>
  );
}

function stationSwitchCase(stationName) {
  switch (stationName.toLowerCase()) {
    case 'райымбек батыра':
      return stationDescriptionRaimbek();
    case 'жибек жолы':
      return stationDescriptionZhibek();
    case 'алмалы':
      return stationDescriptionAlmaly();
    case 'абая':
      return stationDescriptionAbay();
    case 'байконыр':
      return stationDescriptionBaykonyr();
    case 'театр имени мухтара ауэзова':
      return stationDescriptionAuesoz();
    case 'алатау':
      return stationDescriptionAlatau();
    case 'сайран':
      return stationDescriptionSairan();
    case 'москва':
      return stationDescriptionMoscow();
    case 'сарыарка':
      return stationDescriptionSaryarka();
    case 'б.момышулы':
      return stationDescriptionMomushuly();
  }
}

function StationDescription({ navigation, route }) {
  useEffect(() => {
    setTitle(route.params.name, navigation);
  }, [route, navigation]);

  return (
    <ScrollView style={{ flex: 1 }}>
      {stationSwitchCase(route.params.name)}
    </ScrollView>
  );
}

export default StationDescription;
