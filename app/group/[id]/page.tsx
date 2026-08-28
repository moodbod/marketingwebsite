import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppLinkFallback } from "../../../components/AppLinkFallback";
import {
  createAppLinkMetadata,
  invalidAppLinkMetadata,
  normalizeGroupId,
} from "../../../lib/app-links";

type GroupPageProps = {
  params: Promise<{ id: string }>;
};

const title = "A Wandr group was shared with you";
const description =
  "Open this group in Wandr to meet the travelers and join the conversation.";

export async function generateMetadata({ params }: GroupPageProps): Promise<Metadata> {
  const { id: rawId } = await params;
  const id = normalizeGroupId(rawId);
  if (!id) return invalidAppLinkMetadata;

  return createAppLinkMetadata({
    canonicalPath: `/group/${id}`,
    title: `${title} — Wandr`,
    description,
  });
}

export default async function GroupPage({ params }: GroupPageProps) {
  const { id: rawId } = await params;
  const id = normalizeGroupId(rawId);
  if (!id) notFound();

  return (
    <AppLinkFallback
      eyebrow="Shared group"
      title={title}
      description={description}
      openHref={`wandr://group/${id}`}
    />
  );
}
