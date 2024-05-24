import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingUpdateInput = {
  checkInDate?: Date | null;
  checkOutDate?: Date | null;
  room?: RoomWhereUniqueInput | null;
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
};
