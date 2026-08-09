import { Link } from "react-router-dom";
import Particle from "../Particle.tsx";

const LAST_UPDATED = "8 August 2026";
const CONTACT_EMAIL = "tamjedpeace@gmail.com";

interface Permission {
  name: string;
  code: string;
  reason: string;
}

/**
 * Permissions declared in the shipped Touch Block release build. This list is
 * cross-checked against the app's AndroidManifest — Google compares the policy
 * against the manifest and the Data safety form, and a mismatch is a
 * documented cause of rejection. Do not add an entry here that the app does
 * not actually request.
 */
const PERMISSIONS: Permission[] = [
  {
    name: "Display over other apps",
    code: "SYSTEM_ALERT_WINDOW",
    reason:
      "Draws the floating button and the transparent layer that absorbs touches. This is the app's core function and it cannot work without it. The overlay only appears after you start the service yourself.",
  },
  {
    name: "Foreground service",
    code: "FOREGROUND_SERVICE, FOREGROUND_SERVICE_SPECIAL_USE",
    reason:
      "Keeps the floating button available while you use other apps. Android would otherwise stop it, removing the block without warning.",
  },
  {
    name: "Notifications",
    code: "POST_NOTIFICATIONS",
    reason:
      "Shows an ongoing notification while the service runs, so you can always see that it is active and return to the app to stop it.",
  },
  {
    name: "Vibration",
    code: "VIBRATE",
    reason:
      "Gives short haptic feedback when you lock or unlock the screen.",
  },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">
        {title}
      </h2>
      <div className="text-[var(--text-secondary)] leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}

function TouchBlockPrivacy(): React.ReactElement {
  return (
    <section className="relative min-h-screen py-20">
      <Particle />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Privacy <strong className="text-gradient">Policy</strong>
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Touch Block for Android
          </p>
          <p className="text-sm text-[var(--text-muted)] mt-2">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <article
          className="rounded-2xl border p-6 sm:p-10 backdrop-blur-xl"
          style={{
            background: "var(--glass-bg)",
            borderColor: "var(--glass-border)",
            boxShadow: "0 8px 32px var(--glass-shadow)",
          }}
        >
          <Section title="Summary">
            <p className="text-[var(--text-primary)] text-lg">
              Touch Block does not collect, store, transmit or share any
              personal data. The app has no analytics, no advertising, no
              accounts and no network connection of any kind.
            </p>
          </Section>

          <Section title="Data we collect">
            <p>
              None. Touch Block does not request access to your contacts,
              location, camera, microphone, files, or any other personal
              information. Nothing you do in the app leaves your device,
              because the app has no internet access.
            </p>
          </Section>

          <Section title="Permissions and why they are needed">
            <p>
              Touch Block requests the following Android permissions. Each is
              used only for the app&apos;s single function of blocking screen
              touches:
            </p>
            <ul className="space-y-4 mt-4">
              {PERMISSIONS.map((permission) => (
                <li key={permission.code}>
                  <span className="font-semibold text-[var(--text-primary)]">
                    {permission.name}
                  </span>{" "}
                  <code className="px-2 py-0.5 rounded text-sm bg-purple-500/10 border border-purple-500/30 text-purple-300">
                    {permission.code}
                  </code>
                  <p className="mt-1">{permission.reason}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              None of these permissions are used to gather information about
              you. Touch Block does not request the internet permission, so it
              cannot send anything anywhere even in principle.
            </p>
          </Section>

          <Section title="Children">
            <p>
              Touch Block is intended for adults. It is not directed at
              children and does not knowingly collect information from anyone.
            </p>
          </Section>

          <Section title="Third parties">
            <p>
              Touch Block contains no third-party software development kits, no
              advertising libraries and no analytics services. No data is
              shared with anyone, because no data is gathered.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              If this policy changes, the revised version will be posted on
              this page with an updated date.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about this policy can be sent to{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-gradient font-medium underline underline-offset-4"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>
        </article>

        <div className="text-center mt-10">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/5 hover:bg-purple-600 border border-white/10 hover:border-purple-500 text-[var(--text-primary)] font-medium transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TouchBlockPrivacy;
