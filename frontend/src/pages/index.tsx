import CountryForm from "@/components/CountryForm";
import CountryList from "@/components/CountryList";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout pageTitle="Countries">
      <CountryForm />
      <CountryList />
    </Layout>
  );
}
