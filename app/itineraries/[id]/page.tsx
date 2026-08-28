import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppLinkFallback } from "../../../components/AppLinkFallback";
import {
  createAppLinkMetadata,
  invalidAppLinkMetadata,
  normalizePublicId,
} from "../../../lib/app-links";

type ItineraryPageProps = {
  params: Promise<{ id: string }>;
};

const title = "A Wandr itinerary was shared with you";
const description =
  "Open this itinerary in Wandr to explore the route, stops and trip ideas.";

export async function generateMetadata({ params }: ItineraryPageProps): Promise<Metadata> {
  const { id: rawId } = await params;
  const id = normalizePublicId(rawId);
  if (!id) return invalidAppLinkMetadata;

  return createAppLinkMetadata({
    canonicalPath: `/itineraries/${id}`,
    title: `${title} — Wandr`,
    description,
  });
}

export default async function ItineraryPage({ params }: ItineraryPageProps) {
  const { id: rawId } = await params;
  const id = normalizePublicId(rawId);
  if (!id) notFound();

  return (
    <AppLinkFallback
      eyebrow="Shared itinerary"
      title={title}
      description={description}
      openHref={`wandr://itineraries/${id}`}
    />
  );
}
