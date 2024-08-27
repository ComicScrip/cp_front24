import addCountry from "@/graphql/mutations/addCountry";
import getCountries from "@/graphql/queries/getCountries";
import { useMutation } from "@apollo/client";
import { FormEvent } from "react";

export default function CountryForm() {
  const [createCountry, { error, loading }] = useMutation(addCountry);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data: any = Object.fromEntries(formData.entries());

    try {
      const refetchQueries = [getCountries];
      await createCountry({ variables: { data }, refetchQueries });

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
        <button disabled={loading}>Add</button>
      </div>
    </form>
  );
}
