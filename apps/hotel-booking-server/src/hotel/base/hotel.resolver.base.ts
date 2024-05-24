/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Hotel } from "./Hotel";
import { HotelCountArgs } from "./HotelCountArgs";
import { HotelFindManyArgs } from "./HotelFindManyArgs";
import { HotelFindUniqueArgs } from "./HotelFindUniqueArgs";
import { DeleteHotelArgs } from "./DeleteHotelArgs";
import { HotelService } from "../hotel.service";
@graphql.Resolver(() => Hotel)
export class HotelResolverBase {
  constructor(protected readonly service: HotelService) {}

  async _hotelsMeta(
    @graphql.Args() args: HotelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Hotel])
  async hotels(@graphql.Args() args: HotelFindManyArgs): Promise<Hotel[]> {
    return this.service.hotels(args);
  }

  @graphql.Query(() => Hotel, { nullable: true })
  async hotel(
    @graphql.Args() args: HotelFindUniqueArgs
  ): Promise<Hotel | null> {
    const result = await this.service.hotel(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Hotel)
  async deleteHotel(
    @graphql.Args() args: DeleteHotelArgs
  ): Promise<Hotel | null> {
    try {
      return await this.service.deleteHotel(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}