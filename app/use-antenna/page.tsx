import { List } from "@/components/list";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT_URL, GITHUB_URL } from "@/lib/constants";
import content from "@/lib/content.json";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Use Antenna | ${content.appName}`,
};

export default function UseAntenna() {
  return (
    <>
      <section className="p-24 max-lg:p-8">
        <div className="max-w-screen-md mx-auto">
          <h1 className="text-3xl font-medium mb-4">Use Antenna</h1>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Antenna can be used in different ways! To know what option will
              best fit your project, the first step is for us to understand your
              goals. Please share the details of your project in{" "}
              <Link href={CONTACT_URL}>this form</Link> and we will get in
              touch.{" "}
            </p>
            <p>
              From the form you can also join our <strong>newsletter</strong>.
              In May 2026, we plan to have our first user{" "}
              <strong>community</strong> group meeting. More details will be
              shared in the newsletter.
            </p>
          </div>
        </div>
      </section>

      <section className="p-24 bg-muted max-lg:p-8">
        <div className="max-w-screen-md mx-auto space-y-12 max-lg:space-y-8">
          <h1 className="text-3xl font-medium">Ways to use Antenna</h1>
          <div>
            <h2 className="text-2xl font-medium mb-2 max-lg:text-xl">
              👩🏼‍💻 Self-install
            </h2>
            <p className="text-muted-foreground">
              Clone{" "}
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                the repository
              </a>{" "}
              and run Antenna yourself! Open for anyone, but requires a bit of
              technical knowledge.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-medium mb-2 max-lg:text-xl">
              🧪 Demo environment
            </h2>
            <p className="text-muted-foreground">
              Test Antenna on a sample of your data to see if Antenna is a good
              fit for your project. We will help answer your questions in our
              Slack channel. When it comes to custom requests, our support here
              is limited. To get access, fill in{" "}
              <Link href={CONTACT_URL}>the form</Link> and we will get back to
              you.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-medium mb-2 max-lg:text-xl">
              🚀 Production environment
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                This is our stable and scalable environment for our long-term
                partners. Here, Antenna can be used for large-scale projects.
                For partners that can contribute (financially or in other ways),
                we can offer more support and customization options.{" "}
                <Link href={CONTACT_URL}>Reach out</Link> if your organization
                is planning a project over the coming years.
              </p>
              <p>
                For small-scale projects, our goal is to offer more self-service
                solutions in future. Fill in{" "}
                <Link href={CONTACT_URL}>the form</Link> and stay tuned!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-24 max-lg:p-8">
        <div className="max-w-screen-md mx-auto">
          <h1 className="text-3xl font-medium mb-4">We need your help!</h1>
          <div className="space-y-8 text-muted-foreground">
            <p>
              For automated insect monitoring, we all face similar problems. We
              hope Antenna, as an open-source codebase, can be a place where we
              can tackle these problems together and integrate solutions.
              Currently, staff is our biggest limitation. Here are a few areas
              where we welcome contributions to the project:
            </p>
            <List
              items={[
                "Model calibration",
                "Extended pre- and post-processing features",
                "Support for more import and export formats",
                "Research and testing of applied machine learning methods specific to arthropods ",
              ]}
            />
            <p>Please reach out and we can coordinate!</p>
            <Link
              className={buttonVariants({ variant: "accent" })}
              href={CONTACT_URL}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
