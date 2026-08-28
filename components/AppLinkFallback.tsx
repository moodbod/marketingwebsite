import Image from "next/image";
import { APP_STORE_URL } from "../lib/app-links";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import styles from "./AppLinkFallback.module.css";

type AppLinkFallbackProps = {
  eyebrow: string;
  title: string;
  description: string;
  openHref: string;
};

export function AppLinkFallback({
  eyebrow,
  title,
  description,
  openHref,
}: AppLinkFallbackProps) {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.card} aria-labelledby="shared-link-title">
          <Image
            className={styles.icon}
            src="/wandr-icon.png"
            alt=""
            width={76}
            height={76}
            priority
          />
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 id="shared-link-title">{title}</h1>
          <p className={styles.description}>{description}</p>

          <div className={styles.actions}>
            <a className={styles.primaryAction} href={openHref}>
              Open in Wandr
            </a>
            <a
              className={styles.secondaryAction}
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
            >
              Download on the App Store
            </a>
          </div>

          <p className={styles.returnNote}>
            New to Wandr? Install the app, then return to this page and tap
            <strong> Open in Wandr</strong> to continue.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
