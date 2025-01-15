import { Campaign } from "./Campaign";
import { Donation } from "./Donation";

export interface User{
    id: number;
    name: string;
    address: string;
    email: string;
    role: 'ADMIN' | 'DONOR' | 'ORGANIZER';
    createdAt: Date;
    updatedAt: Date;
    campaigns?: Campaign[];
    donations?: Donation[];
}