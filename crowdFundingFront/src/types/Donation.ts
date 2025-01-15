import { User } from './User';
import { Campaign } from './Campaign';

export interface Donation {
  id: number;
  amount: number;
  donatedAt: string;
  updatedAt: string;
  user: User;
  campaign: Campaign;
}
