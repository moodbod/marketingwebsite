import { notFound, permanentRedirect } from "next/navigation";
import { normalizeTravelerInviteCode } from "../../../lib/app-links";

type InviteAliasPageProps = {
  params: Promise<{ code: string }>;
};

export default async function InviteAliasPage({ params }: InviteAliasPageProps) {
  const { code: rawCode } = await params;
  const code = normalizeTravelerInviteCode(rawCode);
  if (!code) notFound();

  permanentRedirect(`/i/${code}`);
}
