import type { Campaign } from '../types/campaign';

export const mockCampaigns: Campaign[] = [
  {
    id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    name: 'Buty sportowe - wiosna',
    keywords: ['buty sportowe', 'sneakersy', 'nowa kolekcja'],
    bidAmount: 1.5,
    fundAmount: 200,
    status: true,
    town: 'Warszawa',
    radius: 25,
  },
  {
    id: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    name: 'Elektronika - promocja letnia',
    keywords: ['elektronika', 'smartfon', 'promocja'],
    bidAmount: 2.0,
    fundAmount: 350,
    status: true,
    town: 'Kraków',
    radius: 15,
  },
  {
    id: 'c3d4e5f6-a7b8-9012-cdef-123456789012',
    name: 'Moda damska - wyprzedaż',
    keywords: ['moda damska', 'wyprzedaż', 'odzież sportowa'],
    bidAmount: 0.75,
    fundAmount: 150,
    status: false,
    town: 'Wrocław',
    radius: 10,
  },
];
