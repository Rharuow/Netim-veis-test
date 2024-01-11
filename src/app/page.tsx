import { Banner } from "@/components/domain/home/section/banner";
import { TabsSection } from "@/components/domain/home/section/tabs";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Banner />
      <TabsSection />
    </div>
  );
}
