import content from "@/lib/content.json";
import { Metadata } from "next";
import { MAILCHIMP_SNIPPET } from "./constants";
import { FormHelper } from "./form-helper";
import "./page.css";

export const metadata: Metadata = {
  title: `${content.contact.title} | ${content.appName}`,
};

export default function Contact() {
  return (
    <section className="p-24 max-lg:p-8">
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-3xl font-medium mb-4">{content.contact.title}</h1>
        <div className="space-y-4 mb-12 max-lg:mb-8">
          {content.contact.text.map((__html, index) => (
            <p
              key={index}
              className="text-muted-foreground"
              dangerouslySetInnerHTML={{ __html }}
            />
          ))}
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: MAILCHIMP_SNIPPET,
          }}
          className="p-8 border rounded-xl max-lg:p-0 max-lg:border-none"
        />
        <FormHelper />
      </div>
    </section>
  );
}
