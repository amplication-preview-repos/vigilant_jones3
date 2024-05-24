import { Booking } from "../booking/Booking";
import { Hotel } from "../hotel/Hotel";

export type Room = {
  availability: boolean | null;
  bookings?: Array<Booking>;
  createdAt: Date;
  hotel?: Hotel | null;
  id: string;
  numberField: string | null;
  price: number | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
