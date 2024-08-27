import { Country } from "@/types";
import Link from "next/link";

type CountryCardProps = {
  country: Country;
  link: string;
};
export default function CountryCard({
  country: { emoji, name },
  link,
}: CountryCardProps) {
  return (
    <Link href={link}>
      <div className="country-card">
        <div>{name}</div>
        <div className="country-card-emo">{emoji}</div>
      </div>
    </Link>
  );
}
