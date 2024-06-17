import { Trip } from '../models/Trip';

export class TripService {
  public static getTrips(): Trip[] {
    return [
      {
        id: 1,
        destination: 'Rio de Janeiro',
        description:
          'Descubra as maravilhas do Rio, com praias icônicas e o Cristo Redentor.',
        reviewsCount: 1020,
        roomsCount: 150,
        adults: 2,
        children: 2,
        imageUrl: 'https://via.placeholder.com/300x200',
        checkInDate: '2024-07-15',
        checkOutDate: '2024-07-20',
        price: 2000.5,
      },
      {
        id: 2,
        destination: 'Salvador',
        description:
          'Explore o coração cultural do Brasil com sua rica história e belas praias.',
        reviewsCount: 750,
        roomsCount: 80,
        adults: 2,
        children: 1,
        imageUrl: 'https://via.placeholder.com/300x200',
        checkInDate: '2024-08-05',
        checkOutDate: '2024-08-10',
        price: 1500.75,
      },
      {
        id: 3,
        destination: 'Florianópolis',
        description:
          'Aproveite as maravilhosas praias e a natureza exuberante de Florianópolis.',
        reviewsCount: 920,
        roomsCount: 60,
        adults: 4,
        children: 0,
        imageUrl: 'https://via.placeholder.com/300x200',
        checkInDate: '2024-09-01',
        checkOutDate: '2024-09-07',
        price: 1800.0,
      },
    ];
  }
}
