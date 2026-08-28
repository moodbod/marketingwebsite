import { notFound, permanentRedirect } from "next/navigation";
import { normalizePublicId } from "../../../lib/app-links";

type ItineraryAliasPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ItineraryAliasPage({ params }: ItineraryAliasPageProps) {
  const { id: rawId } = await params;
  const id = normalizePublicId(rawId);
  if (!id) notFound();

  permanentRedirect(`/itineraries/${id}`);
}
