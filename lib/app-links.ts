import type { Metadata } from "next";
import {
  APP_STORE_URL,
  createPageMetadata,
  SITE_URL,
} from "./seo";

const TRAVELER_INVITE_PATTERN = /^[A-HJ-NP-Z2-9]{6}$/;
const TRIP_INVITE_PATTERN = /^[A-HJ-NP-Z2-9]{6,32}$/;
const PUBLIC_ID_PATTERN = /^[A-Za-z0-9_-]{20,64}$/;

export { APP_STORE_URL };

export function normalizeTravelerInviteCode(value: string): string | null {
  const normalized = value.toUpperCase();
  return TRAVELER_INVITE_PATTERN.test(normalized) ? normalized : null;
}

export function normalizeTripInviteCode(value: string): string | null {
  const normalized = value.toUpperCase();
  return TRIP_INVITE_PATTERN.test(normalized) ? normalized : null;
}

export function normalizeGroupId(value: string): string | null {
  return normalizePublicId(value);
}

export function normalizePublicId(value: string): string | null {
  return PUBLIC_ID_PATTERN.test(value) ? value : null;
}

export function getCanonicalUrl(pathname: string): string {
  return `${SITE_URL}${pathname}`;
}

type AppLinkMetadataOptions = {
  canonicalPath: string;
  title: string;
  description: string;
};

export function createAppLinkMetadata({
  canonicalPath,
  title,
  description,
}: AppLinkMetadataOptions): Metadata {
  const canonicalUrl = getCanonicalUrl(canonicalPath);

  return createPageMetadata({
    title,
    description,
    canonicalPath,
    noIndex: true,
    appArgument: canonicalUrl,
  });
}

export const invalidAppLinkMetadata: Metadata = {
  title: { absolute: "Link unavailable — Wandr" },
  description: "This Wandr link is unavailable.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};
