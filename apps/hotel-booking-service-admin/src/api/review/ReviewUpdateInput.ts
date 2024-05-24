import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  comment?: string | null;
  hotel?: HotelWhereUniqueInput | null;
  rating?: number | null;
  user?: UserWhereUniqueInput | null;
};
