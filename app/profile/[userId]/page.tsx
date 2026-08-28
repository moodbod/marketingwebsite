import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppLinkFallback } from "../../../components/AppLinkFallback";
import {
  createAppLinkMetadata,
  invalidAppLinkMetadata,
  normalizePublicId,
} from "../../../lib/app-links";

type ProfilePageProps = {
  params: Promise<{ userId: string }>;
};

const title = "A traveler shared their Wandr profile";
const description =
  "Open this profile in Wandr to see their travel footprint and shared journeys.";

export async function generateMetadata({ params }: ProfilePageProps): Promise<Metadata> {
  const { userId: rawUserId } = await params;
  const userId = normalizePublicId(rawUserId);
  if (!userId) return invalidAppLinkMetadata;

  return createAppLinkMetadata({
    canonicalPath: `/profile/${userId}`,
    title: `${title} — Wandr`,
    description,
  });
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { userId: rawUserId } = await params;
  const userId = normalizePublicId(rawUserId);
  if (!userId) notFound();

  return (
    <AppLinkFallback
      eyebrow="Shared profile"
      title={title}
      description={description}
      openHref={`wandr://profile/${userId}`}
    />
  );
}
