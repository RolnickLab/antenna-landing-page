import { Card } from "@/components/card";
import { List } from "@/components/list";
import { DeploymentsStats } from "@/components/stats/deployments-stats";
import { buttonVariants } from "@/components/ui/button";
import content from "@/lib//content.json";
import { DATA_PLATFORM_URL, WAITLIST_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
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
      <section className="px-24 py-12 overflow-hidden max-lg:p-0 max-lg:text-center">
        <div className="flex items-center gap-12 max-w-screen-lg mx-auto max-lg:flex-col-reverse max-lg:gap-0">
          <div className="max-lg:px-8 max-lg:py-12 max-lg:max-w-screen-md">
            <h1 className="text-4xl font-medium mb-4">{content.title}</h1>
            <h2 className="text-2xl mb-4">{content.subTitle}</h2>
            <p className="mb-12 text-muted-foreground">{content.description}</p>
            <Link
              className={cn(
                buttonVariants({ variant: "accent", size: "lg" }),
                "max-md:w-full"
              )}
              href={WAITLIST_URL}
            >
              Join the waitlist
            </Link>
          </div>
          <div className={`w-full mr-[-240px] max-lg:mr-0`}>
            <div className="w-[640px] h-[480px] rounded-xl bg-card border overflow-hidden max-lg:w-full max-lg:h-[320px] max-lg:rounded-none max-lg:border-none max-md:h-[240px]">
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
            <p>{content.intro.text1}</p>
            <div className="py-4">
              <List items={content.intro.listItems} />
            </div>
            <p>{content.intro.text2}</p>
          </div>
        </div>
      </section>

      <section className="p-24 overflow-hidden max-lg:p-0">
        <div className="flex flex-col items-end gap-8 max-w-screen-lg mx-auto">
          <div className="w-full bg-card rounded-xl border overflow-hidden max-lg:rounded-none max-lg:border-none">
            <video src="/adp-overview-video.mov" controls />
          </div>
          <div className="max-lg:hidden">
            <a
              href={DATA_PLATFORM_URL}
              className={buttonVariants({ variant: "outline" })}
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out the platform
              <ExternalLinkIcon className="h-4 w-4 ml-2" />
            </a>
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

      <section className="p-24 overflow-hidden max-lg:p-0">
        <div className="flex flex-col items-center gap-12 max-w-screen-lg mx-auto">
          <div className="w-full h-[480px] bg-card rounded-xl border overflow-hidden max-lg:rounded-none max-lg:border-none max-lg:h-[320px]">
            <DeploymentsMap height={{ desktop: 480, mobile: 320 }} />
          </div>
          <div className="max-lg:pb-12">
            <DeploymentsStats />
          </div>
        </div>
      </section>

      <section className="p-24 bg-muted/50 max-lg:p-8">
        <div className="max-w-screen-lg mx-auto max-lg:max-w-screen-md">
          <h1 className="text-3xl font-medium mb-12 max-lg:mb-8">
            {content.cards.title}
          </h1>
          <div className="grid grid-cols-3 gap-12 max-lg:grid-cols-1 max-lg:gap-8">
            {content.cards.items.map((item, index) => {
              const className = buttonVariants({ variant: "accent" });

              return (
                <Card key={index} title={item.title} listItems={item.listItems}>
                  {item.button.external ? (
                    <a
                      href={item.button.href}
                      className={className}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.button.label}
                      <ExternalLinkIcon className="h-4 w-4 ml-2" />
                    </a>
                  ) : (
                    <Link href={item.button.href} className={className}>
                      <ClockIcon className="h-4 w-4 mr-2" />
                      {item.button.label}
                    </Link>
                  )}
                </Card>
              );
            })}
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
