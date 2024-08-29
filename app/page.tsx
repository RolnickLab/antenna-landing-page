/* eslint-disable @next/next/no-img-element */

import { Card } from "@/components/card";
import { List } from "@/components/list";
import { DeploymentsStats } from "@/components/stats/deployments-stats";
import { buttonVariants } from "@/components/ui/button";
import {
  DATA_PLATFORM_REPO_URL,
  DATA_PLATFORM_URL,
  ML_REPO_URL,
  WAITLIST_URL,
} from "@/lib/constants";
import { ClockIcon, ExternalLinkIcon } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const DeploymentsMap = dynamic(
  () => import("@/components/map/deployments-map"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <section className="px-24 py-12 overflow-hidden">
        <div className="flex items-center gap-12 max-w-screen-lg mx-auto">
          <div>
            <h1 className="text-4xl font-medium mb-4">
              Antenna - The Insect Data Platform
            </h1>
            <h2 className="text-2xl mb-4">
              AI-Enabled Detection And Classification Of Insects At Scale
            </h2>
            <p className="mb-12 text-muted-foreground">
              An interdisciplinary platform to upload, classify, and analyse
              in-the-wild images of invertebrates for research and conservation
              efforts.
            </p>
            <Link
              className={buttonVariants({ size: "lg" })}
              href={WAITLIST_URL}
            >
              Join waitlist
            </Link>
          </div>
          <div style={{ marginRight: "-240px" }}>
            <div className="w-[640px] h-[480px] rounded-xl bg-card border overflow-hidden">
              <img
                alt="Trap image with bounding boxes and labels"
                src="/intro.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="p-24 bg-muted">
        <div className="max-w-screen-md mx-auto">
          <h1 className="text-3xl font-medium mb-4">Introducing Antenna</h1>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Antenna fills the data gap to help understand insects and protect
              biodiversity by enabling the scale-up of data collection with
              greater spatial, temporal, and taxonomic coverage than has ever
              been possible. It is an online platform where entomologists,
              ecologists, and machine learning (ML) and computer scientists
              collaborate to build trustworthy datasets by implementing and
              improving upon ML research designed specifically for real-world
              applications. Antenna cost-effectively and rapidly classifies a
              wide range of species in a large number of images, building a rich
              dataset that grows and updates over time.
            </p>
            <div className="py-4">
              <List
                items={[
                  "Open source machine learning models - no black box",
                  "Classifications informed and quality controlled by experts",
                  "Compatible with all high-resolution cameras",
                  "User-friendly interface",
                  "Standardised data formats and metadata",
                  "Programmable data uploads, processings, and downloads",
                  "No software installation required",
                ]}
              />
            </div>
            <p>
              Antenna currently focuses on moths but expansions to other insects
              are planned.
            </p>
          </div>
        </div>
      </section>

      <section className="p-24">
        <div className="flex flex-col items-center gap-12 max-w-screen-lg mx-auto">
          <div className="w-full rounded-xl bg-card border overflow-hidden">
            <DeploymentsMap height={480} />
          </div>
          <DeploymentsStats />
        </div>
      </section>

      <section className="p-24 bg-muted">
        <div className="max-w-screen-md mx-auto">
          <h1 className="text-3xl font-medium mb-4">How Antenna helps</h1>
          <div className="space-y-4 text-muted-foreground">
            <p>
              A billion insects for every human at any one time and 10 million
              insect species on Earth.
            </p>
            <p>
              These estimates show how challenging it is to collect sufficient
              data, recognise observed species, and monitor population changes.
              Insects are key to ecosystems and agriculture, and severely
              impacted by climate change. Rich, quality data is critical to
              describing and responding to insect population patterns.
            </p>
            <p>
              Antenna uses artificial intelligence to automate, accelerate,
              standardise, and scale up the identification of invertebrates in
              the wild. It rapidly performs fine-grained species classification
              and new species discovery using the GBIF and Darwin Core
              Standards. The resulting research-grade datasets comprise
              continuously updating information about the location, time,
              frequency, quantity of species as observed around the world. Our
              technology is the most convenient and cost-effective way to enable
              monitoring at scale.
            </p>
          </div>
        </div>
      </section>

      <section className="p-24 bg-muted/50">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-3xl font-medium mb-12">
            What do you want to do?
          </h1>
          <div className="grid grid-cols-2 gap-12">
            <Card
              title="Label the species in my images"
              listItems={[
                "Programmatically upload camera images",
                "Use my or a Platform model to generate classification labels",
                "Compare model performance on my dataset",
              ]}
            >
              <Link
                href={WAITLIST_URL}
                className={buttonVariants({ variant: "accent" })}
              >
                <ClockIcon className="h-4 w-4 mr-2" /> Join waitlist
              </Link>
            </Card>
            <Card
              title="Track where and when a species was observed"
              listItems={[
                "Explore images for a given species, location, or time window",
                "Download timestamped, geolocated datasets for analysis",
              ]}
            >
              <a
                href={DATA_PLATFORM_URL}
                className={buttonVariants({ variant: "accent" })}
                target="_blank"
                rel="noopener noreferrer"
              >
                Checkout platform <ExternalLinkIcon className="h-4 w-4 ml-2" />
              </a>
            </Card>
            <Card
              title="Help validate the data with my moth expertise"
              listItems={[
                "Confirm or adjust AI-generated taxons",
                "Suggest IDs for unidentified images",
              ]}
            >
              <Link
                href={WAITLIST_URL}
                className={buttonVariants({ variant: "accent" })}
              >
                <ClockIcon className="h-4 w-4 mr-2" /> Join waitlist
              </Link>
            </Card>
            <Card
              title="Contribute my ML skills"
              listItems={[
                "Train or share new object detectors, species classifiers or behavioral analysis models",
                "Benchmark evaluation metrics to compare model performance",
              ]}
            >
              <a
                href={ML_REPO_URL}
                className={buttonVariants({ variant: "accent" })}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit repo <ExternalLinkIcon className="h-4 w-4 ml-2" />
              </a>
            </Card>
            <Card
              title="Grow the open-source software"
              listItems={[
                "Create new integrations for data interchange",
                "Add new features to an existing codebase",
              ]}
            >
              <a
                href={DATA_PLATFORM_REPO_URL}
                className={buttonVariants({ variant: "accent" })}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit repo <ExternalLinkIcon className="h-4 w-4 ml-2" />
              </a>
            </Card>
          </div>
        </div>
      </section>

      <section className="p-24">
        <div className="max-w-screen-md space-y-24 mx-auto text-center">
          <div>
            <h1 className="text-3xl font-medium mb-4">Who we are</h1>
            <p className="text-muted-foreground">
              Antenna is led by a group of researchers and engineers from the{" "}
              <a href="https://mila.quebec/en/automated-monitoring-of-insects-ami/">
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
              for more detail.) We gratefully thank Andre Poremski and Kent
              McFarland for their contributions in shaping the platform. We are
              proud co-founders of the{" "}
              <a href="insectmonitoring.org">
                Automated Monitoring of Insects (AMI) Consortium
              </a>
              , whose mission is to empower local communities to protect and
              conserve biodiversity by generating labelled insect data at wide
              spatial, temporal and taxonomic scales.
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
          <div>
            <div>
              <p>
                This work is licensed under{" "}
                <a
                  href="https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1"
                  target="_blank"
                  rel="license noopener noreferrer"
                >
                  Creative Commons Attribution-NonCommercial 4.0 International
                </a>
              </p>
              <div className="flex items-center justify-center gap-2 p-2">
                <img
                  className="w-6 h-6"
                  src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
                  alt=""
                />
                <img
                  className="w-6 h-6"
                  src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
                  alt=""
                />
                <img
                  className="w-6 h-6"
                  src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
