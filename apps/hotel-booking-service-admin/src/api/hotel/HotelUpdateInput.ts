import { ReviewUpdateManyWithoutHotelsInput } from "./ReviewUpdateManyWithoutHotelsInput";
import { RoomUpdateManyWithoutHotelsInput } from "./RoomUpdateManyWithoutHotelsInput";

export type HotelUpdateInput = {
  address?: string | null;
  city?: string | null;
  country?: string | null;
  description?: string | null;
  name?: string | null;
  rating?: number | null;
  reviews?: ReviewUpdateManyWithoutHotelsInput;
  rooms?: RoomUpdateManyWithoutHotelsInput;
  zipCode?: string | null;
};
