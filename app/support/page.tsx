import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Wandr Support",
  description: "Get help with the Wandr app, your trips, account, or subscription.",
};

export default function SupportPage() {
  return (
    <>
      <SiteHeader />
      <main className="legal-page section-pad">
        <p className="kicker">SUPPORT</p>
        <h1>How can we help?</h1>
        <p className="legal-date">Wandr app help and account support</p>

        <p>
          For help with Wandr, email{" "}
          <a href="mailto:support@wandr.com?subject=Wandr%20Support%20Request">
            support@wandr.com
          </a>
          . Include a short description of the issue and the email address used for your
          Wandr account. Do not send passwords, verification codes, or payment details.
        </p>

        <h2>Trips and saved places</h2>
        <p>
          Create and manage trips from your Profile. When viewing a place, use the add-to-trip
          action to save it to an existing trip. If changes do not appear immediately, confirm
          that the device is online and reopen the trip.
        </p>

        <h2>Location and navigation</h2>
        <p>
          Location access is optional until a location-based feature needs it. You can review or
          change Wandr&apos;s location permission in iOS Settings. Background tracking runs only
          during an active trip or wander and stops when you end it.
        </p>

        <h2>Account deletion</h2>
        <p>
          You can delete your Wandr account from Settings in the app. Account deletion is
          permanent. If you cannot access the app, email support from the address associated with
          your account so we can verify and process the request.
        </p>

        <h2>Subscriptions</h2>
        <p>
          App Store subscriptions are managed through your Apple ID subscription settings.
          Deleting Wandr or deleting your Wandr account does not automatically cancel an active
          Apple subscription.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
