import { z } from 'zod';
import { MIN_BID_AMOUNT } from '../config/constants';

export const campaignSchema = z
  .object({
    name: z.string().min(3, 'Nazwa musi mieć min. 3 znaki'),
    keywords: z.array(z.string()).min(1, 'Dodaj min. jedno słowo kluczowe'),
    bidAmount: z.number({ invalid_type_error: 'Wprowadź kwotę' }).min(MIN_BID_AMOUNT, `Min. stawka to ${MIN_BID_AMOUNT} PLN`),
    fundAmount: z.number({ invalid_type_error: 'Wprowadź kwotę' }).positive('Budżet musi być większy od 0'),
    status: z.boolean(),
    town: z.string().min(1, 'Wybierz miasto'),
    radius: z.number({ invalid_type_error: 'Wprowadź liczbę' }).positive('Zasięg musi być większy od 0'),
  })
  .superRefine((data, ctx) => {
    if (data.bidAmount > data.fundAmount) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Stawka nie może być wyższa od budżetu',
        path: ['bidAmount'],
      });
    }
  });

export type CampaignFormData = z.infer<typeof campaignSchema>;
