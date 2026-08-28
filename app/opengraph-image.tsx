import { ImageResponse } from "next/og";
import { SocialCard } from "../components/SocialCard";
import {
  SOCIAL_IMAGE_ALT,
  SOCIAL_IMAGE_SIZE,
} from "../lib/seo";

export const runtime = "edge";
export const alt = SOCIAL_IMAGE_ALT;
export const size = SOCIAL_IMAGE_SIZE;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<SocialCard />, size);
}
