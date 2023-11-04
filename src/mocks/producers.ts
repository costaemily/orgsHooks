import Green from '../assets/produtores/green.png';
import Grow from '../assets/produtores/grow.png';
import JennyJack from '../assets/produtores/jenny-jack.png';
import Potager from '../assets/produtores/potager.png';
import Salad from '../assets/produtores/salad.png';

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const producersMock = {
  title: 'Produtores',
  list: [
    {
      name: 'Green',
      image: Green,
      distance: `${generateRandomNumber(1, 500)}m`,
      stars: generateRandomNumber(1, 5),
    },
    {
      name: 'Grow',
      image: Grow,
      distance: `${generateRandomNumber(1, 500)}m`,
      stars: generateRandomNumber(1, 5),
    },
    {
      name: 'JennyJack',
      image: JennyJack,
      distance: `${generateRandomNumber(1, 500)}m`,
      stars: generateRandomNumber(1, 5),
    },
    {
      name: 'Potager',
      image: Potager,
      distance: `${generateRandomNumber(1, 500)}m`,
      stars: generateRandomNumber(1, 5),
    },
    {
      name: 'Salad',
      image: Salad,
      distance: `${generateRandomNumber(1, 500)}m`,
      stars: generateRandomNumber(1, 5),
    },
  ],
};
