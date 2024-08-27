import addCountry from "@/graphql/mutations/addCountry";
import getContinents from "@/graphql/queries/getContinents";
import getCountries from "@/graphql/queries/getCountries";
import { Continent } from "@/types";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FormEvent } from "react";

export default function CountryForm() {
  const router = useRouter();
  const { continentId } = router.query;
  const { data } = useQuery(getContinents);
  const continents: Continent[] = data?.continents || [];
  const [createCountry, { error, loading }] = useMutation(addCountry);
  const client = useApolloClient();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data: any = Object.fromEntries(formData.entries());
    data.continent = { id: parseInt(data.continent, 10) };

    try {
      const res = await createCountry({ variables: { data } });
      const newCountry = res.data.addCountry;
      const queryInfo = {
        query: getCountries,
        variables: { continentId: continentId ? data.continent : continentId },
      };
      const getCountriesQuery = await client.readQuery(queryInfo);
      const previousCountries = getCountriesQuery.countries;
      const newCountries = [newCountry, ...previousCountries];
      const newData = { data: { countries: newCountries } };
      client.writeQuery({ ...queryInfo, ...newData });

      /*
      const refetchQueries = [getCountries];
      await createCountry({ variables: { data }, refetchQueries });
      */

      (e.target as any).reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="country-form">
      <div className="country-fields">
        <div className="field">
          <label className="label" htmlFor="name">
            <span className="label-text">Name</span>
            <input
              required
              type="text"
              name="name"
              id="name"
              maxLength={50}
              minLength={2}
            />
          </label>
        </div>

        <div className="field">
          <label className="label" htmlFor="emoji">
            <span className="label-text">Emoji</span>
            <input required type="text" name="emoji" id="emoji" maxLength={4} />
          </label>
        </div>

        <div className="field">
          <label className="label" htmlFor="code">
            <span className="label-text">Code</span>
            <input
              required
              type="text"
              name="code"
              id="code"
              maxLength={3}
              minLength={2}
            />
            {error?.message && <p className="error">{error.message}</p>}
          </label>
        </div>

        <div className="field">
          <label className="label" htmlFor="continent">
            <span className="label-text">Continent</span>
            <select required name="continent" id="continent">
              {continents.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button disabled={loading}>Add</button>
      </div>
    </form>
  );
}
