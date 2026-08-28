import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppLinkFallback } from "../../../components/AppLinkFallback";
import {
  createAppLinkMetadata,
  invalidAppLinkMetadata,
  normalizeTripInviteCode,
} from "../../../lib/app-links";

type TripInvitePageProps = {
  params: Promise<{ code: string }>;
};

const title = "You’ve been invited on a trip";
const description =
  "Open this invitation in Wandr to see the trip and join the crew.";

export async function generateMetadata({ params }: TripInvitePageProps): Promise<Metadata> {
  const { code: rawCode } = await params;
  const code = normalizeTripInviteCode(rawCode);
  if (!code) return invalidAppLinkMetadata;

  return createAppLinkMetadata({
    canonicalPath: `/trip-invite/${code}`,
    title: `${title} — Wandr`,
    description,
  });
}

export default async function TripInvitePage({ params }: TripInvitePageProps) {
  const { code: rawCode } = await params;
  const code = normalizeTripInviteCode(rawCode);
  if (!code) notFound();

  return (
    <AppLinkFallback
      eyebrow="Trip invitation"
      title={title}
      description={description}
      openHref={`wandr://trip-invite/${code}`}
    />
  );
}
