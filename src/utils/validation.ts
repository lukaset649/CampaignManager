import { z } from 'zod';
import { MIN_BID_AMOUNT } from '../config/constants';

export const campaignSchema = z.object({
  name: z.string().min(3, 'Nazwa musi mieć min. 3 znaki'),
  keywords: z.array(z.string()).min(1, 'Dodaj min. jedno słowo kluczowe'),
  bidAmount: z.number().min(MIN_BID_AMOUNT, `Min. stawka to ${MIN_BID_AMOUNT} PLN`),
  fundAmount: z.number().positive('Budżet musi być większy od 0'),
  status: z.boolean(),
  town: z.string().min(1, 'Wybierz miasto'),
  radius: z.number().positive('Zasięg musi być większy od 0'),
});

export type CampaignFormData = z.infer<typeof campaignSchema>;
