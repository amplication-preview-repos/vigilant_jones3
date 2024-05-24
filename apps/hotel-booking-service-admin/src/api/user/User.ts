import { Booking } from "../booking/Booking";
import { Review } from "../review/Review";

export type User = {
  bookings?: Array<Booking>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  passwordHash: string | null;
  phoneNumber: string | null;
  reviews?: Array<Review>;
  updatedAt: Date;
  username: string | null;
};
