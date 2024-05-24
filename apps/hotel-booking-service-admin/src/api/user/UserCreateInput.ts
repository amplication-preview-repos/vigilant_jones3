import { BookingCreateNestedManyWithoutUsersInput } from "./BookingCreateNestedManyWithoutUsersInput";
import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  bookings?: BookingCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  passwordHash?: string | null;
  phoneNumber?: string | null;
  reviews?: ReviewCreateNestedManyWithoutUsersInput;
  username?: string | null;
};
