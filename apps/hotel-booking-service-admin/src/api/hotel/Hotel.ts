import { Review } from "../review/Review";
import { Room } from "../room/Room";

export type Hotel = {
  address: string | null;
  city: string | null;
  country: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  rating: number | null;
  reviews?: Array<Review>;
  rooms?: Array<Room>;
  updatedAt: Date;
  zipCode: string | null;
};
