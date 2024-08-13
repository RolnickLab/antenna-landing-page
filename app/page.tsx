import { Card } from "@/components/card";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Stats } from "@/components/stats";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ClockIcon, ExternalLinkIcon } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="py-2 bg-muted sticky top-0">
        <nav className="flex items-center justify-end max-w-screen-lg h-full mx-auto">
          <ThemeToggle />
        </nav>
      </section>

      <section className="px-24 py-12 overflow-hidden">
        <div className="flex items-center gap-12 max-w-screen-lg mx-auto">
          <div>
            <h1 className="text-4xl font-medium mb-4">
              AMI Data Platform: AI-enabled detection and classification of
              insects at scale
            </h1>
            <h2 className="text-2xl mb-12">
              Delivering trustworthy data for biodiversity monitoring,
              policy-making, and conservation efforts
            </h2>
            <Button size="lg">Join waitlist</Button>
          </div>
          <div style={{ marginRight: "-240px" }}>
            <div className="w-[640px] h-[480px] rounded-xl bg-card border overflow-hidden">
              <ImagePlaceholder />
            </div>
          </div>
        </div>
      </section>

      <section className="p-24 bg-muted">
        <div className="max-w-screen-md mx-auto">
          <h1 className="text-3xl font-medium mb-4">How it helps</h1>
          <div className="space-y-4 text-muted-foreground">
            <p>
              The AMI Data Platform fills the data gap to understand and protect
              insects.
            </p>
            <p>
              A billion insects for every human at any one time and 10 million
              insect species on Earth. These estimates show how challenging it
              is to collect sufficient data, recognise observed species, and
              monitor population changes.
            </p>
            <p>
              Insects are key to ecosystems and agriculture, and severely
              impacted by climate change. Rich, quality data is critical to
              describing and responding to insect population patterns. The
              Platform uses artificial intelligence to automate, accelerate, and
              scale up the identification of insects in in-the-wild images. The
              resulting research-grade datasets comprise continuously updating
              information about the location, time, frequency, quantity of
              species as observed around the world.
            </p>
          </div>
        </div>
      </section>

      <section className="p-24">
        <div className="flex flex-col items-center gap-12 max-w-screen-lg mx-auto">
          <div className="w-full h-[480px] rounded-xl bg-card border">
            {/* TODO: Add map */}
          </div>
          <Stats
            items={[
              { value: "100k", unit: "Deployments" },
              { value: "500k", unit: "Sessions" },
              { value: "350m", unit: "Occurrences" },
            ]}
          />
        </div>
      </section>

      <section className="p-24 bg-muted/50">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-3xl font-medium mb-4">How can ADP help you?</h1>
          <p className="text-muted-foreground mb-12">
            I want to build on and contribute to a global effort to scale the
            understanding of insects and biodiversity:
          </p>
          <div className="grid grid-cols-2 gap-12">
            <Card
              title="Know the species in many images"
              listItems={[
                "Programmatically upload batches of images",
                "The AI detects and identifies the species",
              ]}
            >
              <Button variant="accent">
                <ClockIcon className="h-4 w-4 mr-2" /> Join waitlist
              </Button>
            </Card>
            <Card
              title="Know where and when a species was observed"
              listItems={[
                "Explore or search observations for a given species, location, or time",
                "Download timestamped, geolocated datasets for analysis",
              ]}
            >
              <Button variant="accent">
                Checkout platform <ExternalLinkIcon className="h-4 w-4 ml-2" />
              </Button>
            </Card>
            <Card
              title="Apply my ML skills to support biodiversity"
              listItems={[
                "Use structured & verified data to train new object detectors, species classifiers or behavioral analysis models",
                "Benchmark evaluation metrics to compare results with / compare model performance",
              ]}
            >
              <Button variant="accent">
                Visit repo <ExternalLinkIcon className="h-4 w-4 ml-2" />
              </Button>
            </Card>
            <Card
              title="Contribute to open-source software related to biodiversity"
              listItems={[
                "Create new integrations for data interchange",
                "Add new features to an existing codebase",
              ]}
            >
              <Button variant="accent">
                Visit repo <ExternalLinkIcon className="h-4 w-4 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="p-24">
        <div className="max-w-screen-md space-y-24 mx-auto text-center">
          <div>
            <h1 className="text-3xl font-medium mb-4">Who we are</h1>
            <p className="text-muted-foreground">
              The AMI Data Platform is led by a group of researchers and
              engineers from the{" "}
              <a href="https://mila.quebec/en/automated-monitoring-of-insects-ami">
                Mila - Quebec Artificial Intelligence Institute
              </a>{" "}
              with support from{" "}
              <a href="https://espacepourlavie.ca/en/insectarium">
                Espace pour la vie - Insectarium
              </a>{" "}
              and technical contributions from scientists around the world (see{" "}
              <a href="https://github.com/RolnickLab/ami-platform">
                Github repository
              </a>{" "}
              for more detail).
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-medium mb-4">Learn more about</h1>
            <ul className="space-y-4">
              <li>
                <a href="https://arxiv.org/abs/2406.12452">The AMI dataset</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
