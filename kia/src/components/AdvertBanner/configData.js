import carRio from "../../images/car_1.png";
import carCeed from "../../images/car_2.png";

export default [
  {
    id: "kiaRio",
    title: "KIA Rio X-Line",
    image: carRio,
    text: "Зимняя резина в подарок",
    subtext: "Выгода до 60 000 руб.",
    buttons: [
      {
        title: "В кредит за 3 500 р./мес.",
        type: "credit"
      },
      {
        title: "получить выгоду",
        type: "benefit"
      },
      {
        title: "спецпредложение",
        type: "special"
      }
    ]
  },
  {
    id: "kiaCeed",
    title: "KIA Ceed",
    image: carCeed,
    text: "Летняя резина в подарок",
    subtext: "Выгода до 80 000 руб.",
    status: "New",
    buttons: [
      {
        title: "В кредит за 3 500 р./мес.",
        type: "credit"
      },
      {
        title: "получить выгоду",
        type: "benefit"
      },
      {
        title: "спецпредложение",
        type: "special"
      }
    ]
  }
];
