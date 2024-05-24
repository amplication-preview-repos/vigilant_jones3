import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  availability?: SortOrder;
  createdAt?: SortOrder;
  hotelId?: SortOrder;
  id?: SortOrder;
  numberField?: SortOrder;
  price?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
