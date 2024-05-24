import { Hotel as THotel } from "../api/hotel/Hotel";

export const HOTEL_TITLE_FIELD = "id";

export const HotelTitle = (record: THotel): string => {
  return record.id?.toString() || String(record.id);
};
