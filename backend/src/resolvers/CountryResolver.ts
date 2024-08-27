import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Country, NewCountryInput } from "../entities/Country";
import { GraphQLError } from "graphql";
import { Continent } from "../entities/Continent";

@Resolver(Country)
export class CountryResolver {
  @Query(() => [Country])
  async countries(
    @Arg("continentId", { nullable: true }) continentId?: string
  ): Promise<Country[]> {
    const continent = continentId
      ? await Continent.findOneByOrFail({ id: parseInt(continentId, 10) })
      : undefined;
    return Country.find({
      relations: { continent: true },
      where: { continent },
    });
  }

  @Query(() => Country)
  async country(@Arg("code") code: string) {
    return Country.findOne({ where: { code }, relations: { continent: true } });
  }

  @Mutation(() => Country)
  async addCountry(@Arg("data", { validate: true }) data: NewCountryInput) {
    if (await Country.findOneBy({ code: data.code }))
      throw new GraphQLError("a country with that code already exists", {
        extensions: { code: "CODE_ALREADY_EXISTS" },
      });

    const newCountry = new Country();
    Object.assign(newCountry, data);
    const { id } = await newCountry.save();
    return Country.findOne({ where: { id }, relations: { continent: true } });
  }
}
