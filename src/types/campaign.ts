export interface Campaign {
  id: string;
  name: string;
  keywords: string[];
  bidAmount: number;
  fundAmount: number;
  status: boolean;
  town: string;
  radius: number;
}
