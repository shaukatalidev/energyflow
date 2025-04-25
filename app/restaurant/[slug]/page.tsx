// app/restaurant/[slug]/page.tsx

import { headers } from "next/headers";
import UpperPart from "../_components/UpperPart";
import CompanyPart from "../_components/CompanyPart";

export default function RestaurantPage() {
  const headersList = headers();
  const host = headersList.get("host") || "";
  const subdomain = host.split(".")[0];

  const restaurantName =
    subdomain !== "www" && subdomain !== "enerzyflow" ? subdomain : "Unknown";

  return (
    <>
      <UpperPart />
      <CompanyPart />
    </>
  );
}
