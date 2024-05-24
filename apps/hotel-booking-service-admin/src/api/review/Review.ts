import { Hotel } from "../hotel/Hotel";
import { User } from "../user/User";

export type Review = {
  comment: string | null;
  createdAt: Date;
  hotel?: Hotel | null;
  id: string;
  rating: number | null;
  updatedAt: Date;
  user?: User | null;
};
