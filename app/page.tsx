import { Article } from "@/components/article";
import { List } from "@/components/list";
import { DeploymentsStats } from "@/components/stats/deployments-stats";
import { buttonVariants } from "@/components/ui/button";
import content from "@/lib//content.json";
import { CONTACT_URL, DATA_PLATFORM_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const DeploymentsMap = dynamic(
  () => import("@/components/map/deployments-map"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <section className="p-24 overflow-hidden max-lg:p-0 max-lg:text-center">
        <div className="grid grid-cols-2 gap-12 max-w-screen-lg mx-auto max-lg:grid-cols-1 max-lg:gap-0">
          <div className="max-lg:px-8 max-lg:py-12 max-lg:order-2">
            <h1 className="text-4xl font-medium mb-4">{content.title}</h1>
            <h2 className="text-2xl mb-4">{content.subTitle}</h2>
            <p className="mb-12 text-muted-foreground">{content.description}</p>
            <Link
              className={cn(
                buttonVariants({ variant: "accent", size: "lg" }),
                "max-md:w-full"
              )}
              href="#learn-more"
            >
              Learn more
            </Link>
          </div>
          <div className="w-full max-lg:mr-0">
            <div className="rounded-xl bg-card border overflow-hidden max-lg:w-full max-lg:h-[320px] max-lg:rounded-none max-lg:border-none max-md:h-[240px]">
              <picture>
                <source
                  srcSet="/images/intro.webp"
                  media="(min-width: 1024px)"
                />
                <source srcSet="/images/intro-small.webp" />
                <img
                  alt="Trap image with bounding boxes and labels"
                  src="/images/intro.webp"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section className="p-24 bg-muted max-lg:p-8">
        <div className="max-w-screen-md mx-auto">
          <h1 className="text-3xl font-medium mb-4">{content.intro.title}</h1>
          <div className="space-y-4 text-muted-foreground">
            <p>{content.intro.text}</p>
            <div className="py-4">
              <List items={content.intro.listItems} />
            </div>
            <p>{content.intro.text2}</p>
          </div>
        </div>
      </section>

      <section className="p-24 overflow-hidden max-lg:p-0">
        <div className="max-w-screen-lg mx-auto">
          <div className="w-full h-[480px] relative bg-card rounded-xl border overflow-hidden mb-12 max-lg:rounded-none max-lg:border-none max-lg:h-[320px]">
            <div className="absolute bottom-4 left-4 px-2 bg-accent rounded-sm text-accent-foreground z-10">
              <span className="text-base text-3xl font-medium mb-12">
                {content.deployments.mapLabel}
              </span>
            </div>
            <DeploymentsMap height={{ desktop: 480, mobile: 320 }} />
          </div>
          <div className="max-lg:pb-12">
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
          <div className="grid gap-24 mb-24">
            {content.features.highlighted.map((item, index) => (
              <div
                key={index}
                className={cn("flex gap-12", {
                  "flex-row-reverse": index % 2 !== 0,
                })}
              >
                <div className="flex-1 aspect-[4/3] border rounded-xl overflow-hidden">
                  <img
                    loading="lazy"
                    alt={item.image?.alt ?? ""}
                    src={item.image?.src}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 py-12">
                  <h2 className="text-3xl font-medium mb-4">{item.title}</h2>
                  <List items={item.listItems} />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-24">
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
          <div className="grid grid-cols-3 gap-x-12 gap-24 mb-24">
            <div>
              <h1 className="text-3xl font-medium mb-4">
                {content.cta.demo.title}
              </h1>
              <p className="text-muted-foreground mb-8">
                {content.cta.demo.text}
              </p>
              <a
                href={DATA_PLATFORM_URL}
                className={buttonVariants({ variant: "outline" })}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
                <ExternalLinkIcon className="h-4 w-4 ml-2" />
              </a>
            </div>
            <div
              className="rounded-xl border overflow-hidden max-lg:rounded-none max-lg:border-none"
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
          <div className="grid grid-cols-2 gap-24">
            <div>
              <h1 className="text-3xl font-medium mb-4">
                {content.cta.contact.title}
              </h1>
              <p className="text-muted-foreground mb-8">
                {content.cta.contact.text}
              </p>
              <Link
                className={buttonVariants({ variant: "accent" })}
                href={CONTACT_URL}
              >
                Get in touch
              </Link>
            </div>
            <div>
              <h1 className="text-3xl font-medium mb-4">
                {content.cta.pipelines.title}
              </h1>
              <p className="text-muted-foreground mb-8">
                {content.cta.pipelines.text}
              </p>
              <a
                className={buttonVariants({ variant: "outline" })}
                target="_blank"
                rel="noopener noreferrer"
              >
                Gradio demo
                <ExternalLinkIcon className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="p-24 max-lg:p-8">
        <div className="max-w-screen-md space-y-24 mx-auto text-center max-lg:space-y-8 max-lg:text-left">
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
          <div>
            <h1 className="text-3xl font-medium mb-4">
              {content.citation.title}
            </h1>
            <p
              className="text-muted-foreground mb-4"
              dangerouslySetInnerHTML={{ __html: content.citation.text }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
