import imageMarker from "../../../images/marker.svg";

export default () => {
  const { ymaps } = window;
  const myMap = new ymaps.Map(
    "map",
    {
      center: [45.01772207460092, 38.935418999999925],
      zoom: 17
    },
    {
      searchControlProvider: "yandex#search"
    }
  );

  // Создаем геообъект с типом геометрии "Точка".

  const myPlacemark = new ymaps.Placemark(
    [45.01772207460092, 38.935418999999925],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: imageMarker,
      iconImageSize: [31, 42],
      iconImageOffset: [-11, -40]
    },
    {
      // Опции.
      // Иконка метки будет растягиваться под размер ее содержимого.
      preset: "islands#blackStretchyIcon"
    }
  );

  myMap.geoObjects.add(myPlacemark);
};
