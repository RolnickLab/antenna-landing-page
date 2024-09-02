import { FIELDGUIE_URL, ML_REPO_URL } from "@/lib/constants";
import { ReactNode } from "react";

export default function FAQ() {
  return (
    <section className="p-24 max-lg:p-8">
      <div className="max-w-screen-md mx-auto space-y-12 max-lg:space-y-8">
        <h1 className="text-3xl font-medium">Frequently Asked Questions</h1>
        <Question title="Do I have to contribute data to access the public dataset?">
          No! The public dataset is available to everyone so we can collectively
          deepen our understanding of biodiversity and accelerate conservation
          efforts.
        </Question>
        <Question title="What kind of invertebrates can you identify?">
          Antenna currently offers machine learning models to recognise
          nocturnal lepidoptera (moths). However the platform is flexible and
          can support most detection or classification algorithms. Note that the
          default processing pipeline is best suited for sequential (time
          series) images that contain multiple insects. The organisms must be
          visually identifiable from the “above” perspective. See our{" "}
          <a href={ML_REPO_URL}>Github repository</a> for more information.
        </Question>
        <Question title="How can I get and set up a monitoring station?">
          The Platform is device-agnostic. You can buy and set up any type of
          camera, then log on to the Platform to upload and process your images.
        </Question>
        <Question title="Can I use the Platform even though I am not a researcher?">
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
    <h2 className="text-2xl font-medium mb-2 max-lg:text-xl">{title}</h2>
    <p className="text-muted-foreground">{children}</p>
  </div>
);
