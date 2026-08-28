import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppLinkFallback } from "../../../components/AppLinkFallback";
import {
  createAppLinkMetadata,
  invalidAppLinkMetadata,
  normalizeTravelerInviteCode,
} from "../../../lib/app-links";

type TravelerInvitePageProps = {
  params: Promise<{ code: string }>;
};

const title = "A friend invited you to Wandr";
const description =
  "Open this traveler invite in Wandr to connect and start planning together.";

export async function generateMetadata({ params }: TravelerInvitePageProps): Promise<Metadata> {
  const { code: rawCode } = await params;
  const code = normalizeTravelerInviteCode(rawCode);
  if (!code) return invalidAppLinkMetadata;

  return createAppLinkMetadata({
    canonicalPath: `/i/${code}`,
    title: `${title} — Wandr`,
    description,
  });
}

export default async function TravelerInvitePage({ params }: TravelerInvitePageProps) {
  const { code: rawCode } = await params;
  const code = normalizeTravelerInviteCode(rawCode);
  if (!code) notFound();

  return (
    <AppLinkFallback
      eyebrow="Traveler invite"
      title={title}
      description={description}
      openHref={`wandr://i/${code}`}
    />
  );
}
