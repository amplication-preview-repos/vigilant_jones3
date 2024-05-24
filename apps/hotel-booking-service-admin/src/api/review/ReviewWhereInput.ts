import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewWhereInput = {
  comment?: StringNullableFilter;
  hotel?: HotelWhereUniqueInput;
  id?: StringFilter;
  rating?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
