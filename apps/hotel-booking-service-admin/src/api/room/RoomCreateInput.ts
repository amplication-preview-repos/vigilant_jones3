import { BookingCreateNestedManyWithoutRoomsInput } from "./BookingCreateNestedManyWithoutRoomsInput";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";

export type RoomCreateInput = {
  availability?: boolean | null;
  bookings?: BookingCreateNestedManyWithoutRoomsInput;
  hotel?: HotelWhereUniqueInput | null;
  numberField?: string | null;
  price?: number | null;
  typeField?: "Option1" | null;
};
