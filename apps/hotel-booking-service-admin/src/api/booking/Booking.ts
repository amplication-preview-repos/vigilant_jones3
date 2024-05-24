import { Room } from "../room/Room";
import { User } from "../user/User";

export type Booking = {
  checkInDate: Date | null;
  checkOutDate: Date | null;
  createdAt: Date;
  id: string;
  room?: Room | null;
  totalPrice: number | null;
  updatedAt: Date;
  user?: User | null;
};
