import { BookingUpdateManyWithoutUsersInput } from "./BookingUpdateManyWithoutUsersInput";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  bookings?: BookingUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  passwordHash?: string | null;
  phoneNumber?: string | null;
  reviews?: ReviewUpdateManyWithoutUsersInput;
  username?: string | null;
};
