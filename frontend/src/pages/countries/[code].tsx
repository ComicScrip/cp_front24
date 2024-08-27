import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import getCountryDetails from "@/graphql/queries/getCountryDetails";
import { CountryDetails } from "@/types";

export default function CountryDetailsPage() {
  const router = useRouter();
  const { code } = router.query;

  const { data, error, loading } = useQuery(getCountryDetails, {
    variables: { code },
    skip: !router.isReady,
  });

  const country: CountryDetails | undefined = data?.country;

  return (
    <Layout pageTitle={country?.name || ""}>
      <div className="country-details-container">
        {loading && <p>Loading...</p>}
        {error && <p className="error">Cannot load country</p>}
        {country && (
          <div className="country-details">
            <p className="country-details-emo">{country.emoji}</p>
            <p>
              Name : {country.name} ({country.code})
            </p>
            {country.continent && <p>Continent : {country.continent.name}</p>}
          </div>
        )}
      </div>
    </Layout>
  );
}
