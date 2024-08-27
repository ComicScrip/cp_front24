import CountryCard from "@/components/CountryCard";
import getCountries from "@/graphql/queries/getCountries";
import { Country } from "@/types";
import { useQuery } from "@apollo/client";

export default function CountryList() {
  const { data, loading, error } = useQuery(getCountries);
  const countries: Country[] = data?.countries || [];

  if (loading) return "Loading countries...";

  return (
    <section className="country-list">
      {error && <p className="error">Cannot load countries</p>}
      {countries.map((c) => (
        <CountryCard key={c.id} country={c} link={`/countries/${c.code}`} />
      ))}
    </section>
  );
}
