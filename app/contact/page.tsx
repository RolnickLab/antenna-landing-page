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
          <p className="text-muted-foreground">
            Do you have data to test or future research to discuss? We want to
            talk to you! Contact us directly on{" "}
            <a href="mailto:antenna@mila.quebec">antenna@mila.quebec</a> or fill
            in the form below.
          </p>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
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
