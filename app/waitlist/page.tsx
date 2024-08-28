import { MAILCHIMP_SNIPPET } from "./constants";

export default function Waitlist() {
  return (
    <section className="p-24">
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-3xl font-medium mb-4">
          Interested in joining the Antenna community?
        </h1>
        <div className="space-y-4 text-muted-foreground mb-12">
          <p>
            There is currently a waitlist to access Antenna. We are working hard
            to open up the platform to more people! Please tell us more so we
            can better serve you.
          </p>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: MAILCHIMP_SNIPPET }}
          className="p-8 border rounded-xl"
        />
      </div>
    </section>
  );
}
