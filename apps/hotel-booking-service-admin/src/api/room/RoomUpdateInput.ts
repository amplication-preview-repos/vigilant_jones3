import { BookingUpdateManyWithoutRoomsInput } from "./BookingUpdateManyWithoutRoomsInput";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";

export type RoomUpdateInput = {
  availability?: boolean | null;
  bookings?: BookingUpdateManyWithoutRoomsInput;
  hotel?: HotelWhereUniqueInput | null;
  numberField?: string | null;
  price?: number | null;
  typeField?: "Option1" | null;
};
