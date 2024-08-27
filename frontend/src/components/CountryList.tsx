import CountryCard from "@/components/CountryCard";
import getContinents from "@/graphql/queries/getContinents";
import getCountries from "@/graphql/queries/getCountries";
import { Continent, Country } from "@/types";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function CountryList() {
  const router = useRouter();
  const { continentId } = router.query;

  console.log({ continentId });

  const { data, loading, error } = useQuery(getCountries, {
    variables: { continentId },
  });
  const countries: Country[] = data?.countries || [];

  const { data: continentsData } = useQuery(getContinents);
  const continents: Continent[] = continentsData?.continents || [];

  if (loading) return "Loading countries...";

  return (
    <>
      <label className="label" htmlFor="continentFilter">
        <span className="label-text">Filter by continent : </span>
        <select
          required
          name="continentFilter"
          id="continentFilter"
          value={continentId}
          onChange={(e) => {
            router.push("/?continentId=" + e.target.value);
          }}
        >
          {[{ id: "", name: "All" }, ...continents].map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </label>

      <section className="country-list">
        {error && <p className="error">Cannot load countries</p>}
        {countries.map((c) => (
          <CountryCard key={c.id} country={c} link={`/countries/${c.code}`} />
        ))}
      </section>
    </>
  );
}
