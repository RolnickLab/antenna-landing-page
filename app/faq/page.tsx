import content from "@/lib/content.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${content.faq.title} | ${content.appName}`,
};

export default function FAQ() {
  return (
    <section className="p-24 max-lg:p-8">
      <div className="max-w-screen-md mx-auto space-y-12 max-lg:space-y-8">
        <h1 className="text-3xl font-medium">{content.faq.title}</h1>
        {content.faq.questions.map((question, index) => (
          <Question key={index} title={question.title} text={question.text} />
        ))}
      </div>
    </section>
  );
}

const Question = ({ title, text }: { title: string; text: string }) => (
  <div>
    <h2 className="text-2xl font-medium mb-2 max-lg:text-xl">{title}</h2>
    <p
      className="text-muted-foreground"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  </div>
);
