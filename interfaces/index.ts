export interface ListingDetail {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    images: string[];
    createdAt: Date;
    updatedAt?: Date;
}