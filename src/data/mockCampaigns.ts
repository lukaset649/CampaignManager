import type { Campaign } from '../types/campaign';

export const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'Buty sportowe — wiosna',
    keywords: ['buty sportowe', 'sneakersy', 'nowa kolekcja'],
    bidAmount: 1.5,
    fundAmount: 200,
    status: true,
    town: 'Warszawa',
    radius: 25,
  },
  {
    id: '2',
    name: 'Elektronika — promocja letnia',
    keywords: ['elektronika', 'smartfon', 'promocja'],
    bidAmount: 2.0,
    fundAmount: 350,
    status: true,
    town: 'Kraków',
    radius: 15,
  },
  {
    id: '3',
    name: 'Moda damska — wyprzedaż',
    keywords: ['moda damska', 'wyprzedaż', 'odzież sportowa'],
    bidAmount: 0.75,
    fundAmount: 150,
    status: false,
    town: 'Wrocław',
    radius: 10,
  },
];
