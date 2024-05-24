import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type RoomWhereInput = {
  availability?: BooleanNullableFilter;
  bookings?: BookingListRelationFilter;
  hotel?: HotelWhereUniqueInput;
  id?: StringFilter;
  numberField?: StringNullableFilter;
  price?: FloatNullableFilter;
  typeField?: "Option1";
};
