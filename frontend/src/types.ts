export type Country = {
  id: number;
  name: string;
  emoji: string;
  code: string;
};

export type Continent = {
  id: number;
  name: string;
};

export type CountryDetails = Country & {
  continent: Continent;
};
