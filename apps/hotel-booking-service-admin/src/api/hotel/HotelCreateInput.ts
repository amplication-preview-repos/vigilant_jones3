import { ReviewCreateNestedManyWithoutHotelsInput } from "./ReviewCreateNestedManyWithoutHotelsInput";
import { RoomCreateNestedManyWithoutHotelsInput } from "./RoomCreateNestedManyWithoutHotelsInput";

export type HotelCreateInput = {
  address?: string | null;
  city?: string | null;
  country?: string | null;
  description?: string | null;
  name?: string | null;
  rating?: number | null;
  reviews?: ReviewCreateNestedManyWithoutHotelsInput;
  rooms?: RoomCreateNestedManyWithoutHotelsInput;
  zipCode?: string | null;
};
