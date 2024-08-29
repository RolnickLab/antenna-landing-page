import { FIELDGUIE_URL } from "@/lib/constants";
import { ReactNode } from "react";

export default function FAQ() {
  return (
    <section className="p-24">
      <div className="max-w-screen-md mx-auto space-y-12">
        <h1 className="text-3xl font-medium">Frequently Asked Questions</h1>
        <Question title="Do I have to contribute data to access the public dataset?">
          No! The public dataset is available to everyone so we can collectively
          deepen our understanding of biodiversity and accelerate conservation
          efforts.
        </Question>
        <Question title="How can I get and set up a monitoring station?">
          The Platform is device-agnostic. You can buy and set up any type of
          camera, then log on to the Platform to upload and process your images.
        </Question>
        <Question title="How can I get and set up a monitoring station?">
          We LOVE citizen scientists! You absolutely can use the public dataset.
          However we are not quite ready to receive images from phone cameras.
          Until we are, you can check out our partner’s app{" "}
          <a href={FIELDGUIE_URL}>Fieldguide</a> and start snapping away!
        </Question>
      </div>
    </section>
  );
}

const Question = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <div>
    <h2 className="text-2xl font-medium mb-2">{title}</h2>
    <p className="text-muted-foreground">{children}</p>
  </div>
);
