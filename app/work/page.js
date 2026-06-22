import Work from "@/components/Work";
import WorkPageCTA from "@/components/WorkPageCTA";

export const metadata = {
  title: "Code4Community | Work",
  description:
    "Real sites. Real businesses. Real results. Every site below is live, managed by us, and built to turn visitors into paying clients.",
};

export default function WorkPage() {
  return (
    <>
      <Work standalone />
      <WorkPageCTA />
    </>
  );
}
