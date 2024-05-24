/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Review as PrismaReview,
  Hotel as PrismaHotel,
  User as PrismaUser,
} from "@prisma/client";

export class ReviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ReviewCountArgs, "select">): Promise<number> {
    return this.prisma.review.count(args);
  }

  async reviews<T extends Prisma.ReviewFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewFindManyArgs>
  ): Promise<PrismaReview[]> {
    return this.prisma.review.findMany<Prisma.ReviewFindManyArgs>(args);
  }
  async review<T extends Prisma.ReviewFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewFindUniqueArgs>
  ): Promise<PrismaReview | null> {
    return this.prisma.review.findUnique(args);
  }
  async createReview<T extends Prisma.ReviewCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewCreateArgs>
  ): Promise<PrismaReview> {
    return this.prisma.review.create<T>(args);
  }
  async updateReview<T extends Prisma.ReviewUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewUpdateArgs>
  ): Promise<PrismaReview> {
    return this.prisma.review.update<T>(args);
  }
  async deleteReview<T extends Prisma.ReviewDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewDeleteArgs>
  ): Promise<PrismaReview> {
    return this.prisma.review.delete(args);
  }

  async getHotel(parentId: string): Promise<PrismaHotel | null> {
    return this.prisma.review
      .findUnique({
        where: { id: parentId },
      })
      .hotel();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.review
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
