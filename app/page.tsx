import { Antenna } from "@/components/antenna";
import { Article } from "@/components/article";
import { List } from "@/components/list";
import { DeploymentsStats } from "@/components/stats/deployments-stats";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT_URL, DEMO_URL, USE_ANTENNA_URL } from "@/lib/constants";
import content from "@/lib/content.json";
import { cn } from "@/lib/utils";
import {
  BoxIcon,
  CameraIcon,
  CodeIcon,
  DatabaseIcon,
  ExternalLinkIcon,
  GlobeIcon,
  UserIcon,
} from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const DeploymentsMap = dynamic(
  () => import("@/components/map/deployments-map"),
  { ssr: false },
);
const Icons: { [key: string]: any } = {
  user: UserIcon,
  globe: GlobeIcon,
  code: CodeIcon,
  camera: CameraIcon,
  database: DatabaseIcon,
  box: BoxIcon,
};

export default function Home() {
  return (
    <>
      <section className="p-24 overflow-hidden bg-[url('/images/20231110170410-snapshot.jpg')] bg-cover bg-[position:20%_center] max-md:p-0 max-lg:text-center">
        <div className="grid grid-cols-2 gap-12 max-w-screen-lg mx-auto max-lg:grid-cols-1 max-lg:gap-0">
          <div className="light p-8 rounded-xl bg-card/90 max-lg:mx-6 max-lg:my-12 max-lg:p-6">
            <Antenna />
            <h2 className="text-2xl text-foreground mb-6 lg:whitespace-pre max-lg:text-xl">
              {content.subTitle}
            </h2>
            <p className="mb-12 text-muted-foreground">{content.description}</p>
            <Link
              className={cn(
                buttonVariants({ variant: "accent", size: "lg" }),
                "max-md:w-full",
              )}
              href="#learn-more"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="p-24 max-lg:p-8">
        <div className="grid grid-cols-2 gap-12 max-w-screen-lg mx-auto mb-24 max-lg:grid-cols-1 max-lg:gap-8 max-lg:mb-12">
          <div>
            <h1 className="text-3xl font-medium mb-4">{content.intro.title}</h1>
            <div className="space-y-4 text-muted-foreground">
              <p>{content.intro.text}</p>
              <p>{content.intro.text2}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            {content.intro.listItems.map((listItem, index) => {
              const Icon = Icons[listItem.icon];

              return (
                <div key={index} className="p-4 bg-muted rounded-md">
                  <Icon className="w-6 h-6 text-primary mb-4" />
                  <span className="font-medium text-base">{listItem.text}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto max-lg:-mx-8">
          <div className="w-full h-[480px] relative bg-card rounded-xl border overflow-hidden mb-12 max-lg:rounded-none max-lg:border-none max-lg:h-[320px]">
            <div className="absolute bottom-4 left-4 px-2 bg-accent rounded-sm text-accent-foreground z-10">
              <span className="text-base">{content.deployments.mapLabel}</span>
            </div>
            <DeploymentsMap height={{ desktop: 480, mobile: 320 }} />
          </div>
          <div className="max-lg:pb-4">
            <DeploymentsStats />
          </div>
        </div>
      </section>

      <section className="p-24 bg-muted max-lg:p-8">
        <div className="max-w-screen-md mx-auto">
          <h1 className="text-3xl font-medium mb-4">{content.about.title}</h1>
          <div className="space-y-4 text-muted-foreground">
            {content.about.text.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="p-24 max-lg:p-8" id="learn-more">
        <div className="max-w-screen-lg mx-auto max-lg:max-w-screen-md">
          <div className="grid gap-24 mb-24 max-lg:gap-8 max-lg:mb-0">
            <h1 className="text-center text-4xl font-medium max-lg:text-3xl">
              {content.features.title}
            </h1>
            {content.features.highlighted.map((item, index) => (
              <div
                key={index}
                className={cn("flex gap-12 max-lg:flex-col max-lg:gap-0", {
                  "flex-row-reverse": index % 2 !== 0,
                })}
              >
                <div className="flex-1 aspect-[4/3] border rounded-xl overflow-hidden max-lg:rounded-b-none">
                  <img
                    loading="lazy"
                    alt={item.image.alt ?? ""}
                    src={item.image.src}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 py-12 max-lg:flex-initial max-lg:p-4 max-lg:border-x max-lg:border-b max-lg:rounded-b-xl">
                  <h2 className="text-3xl font-medium mb-4 max-lg:text-xl">
                    {item.title}
                  </h2>
                  <List items={item.listItems} />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-24 max-lg:hidden">
            {content.features.extra.map((item, index) => (
              <div key={index}>
                <h2 className="text-xl font-medium mb-4">{item.title}</h2>
                <List items={item.listItems} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="p-24 bg-muted/50 max-lg:p-8">
        <div className="max-w-screen-lg mx-auto max-lg:max-w-screen-md">
          <div className="grid grid-cols-3 gap-24 mb-24 max-lg:block max-lg:mb-12">
            <div className="max-lg:mb-12">
              <h1 className="text-3xl font-medium mb-4">
                {content.cta.demo.title}
              </h1>
              <p
                className="text-muted-foreground mb-8"
                dangerouslySetInnerHTML={{ __html: content.cta.demo.text }}
              />
              <a
                href={DEMO_URL}
                className={buttonVariants({ variant: "outline" })}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
                <ExternalLinkIcon className="h-4 w-4 ml-2" />
              </a>
            </div>
            <div
              className="rounded-xl border overflow-hidden max-md:-mx-8 max-md:rounded-none max-md:border-none"
              style={{ aspectRatio: "1920/1200", gridColumn: "span 2" }}
            >
              <video
                className="w-full h-full"
                controls
                poster="/videos/adp-overview-video-cover.png"
                preload="false"
                src="/videos/adp-overview-video.mov"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-24 max-lg:block max-lg:space-y-12">
            <div>
              <h1 className="text-3xl font-medium mb-4">
                {content.cta.use.title}
              </h1>
              <p
                className="text-muted-foreground mb-8"
                dangerouslySetInnerHTML={{ __html: content.cta.use.text }}
              />
              <div className="flex items-center gap-4">
                <Link
                  className={buttonVariants({ variant: "accent" })}
                  href={CONTACT_URL}
                >
                  Get in touch
                </Link>
                <Link
                  className={buttonVariants({ variant: "ghost" })}
                  href={USE_ANTENNA_URL}
                >
                  Learn more
                </Link>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-medium mb-4">
                {content.cta.help.title}
              </h1>
              <p
                className="text-muted-foreground mb-8"
                dangerouslySetInnerHTML={{ __html: content.cta.help.text }}
              />
              <Link
                className={buttonVariants({ variant: "outline" })}
                href={CONTACT_URL}
              >
                Partner with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="p-24 max-lg:p-8">
        <div className="max-w-screen-md space-y-24 mx-auto text-center max-lg:space-y-12 max-lg:text-left">
          <div>
            <h1 className="text-3xl font-medium mb-4">
              {content.aboutUs.title}
            </h1>
            <p
              className="text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: content.aboutUs.text }}
            />
          </div>
          <div>
            <h1 className="text-3xl font-medium mb-4">{content.media.title}</h1>
            <div className="">
              {content.media.articles.map((article, index) => (
                <Article key={index} {...article} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
