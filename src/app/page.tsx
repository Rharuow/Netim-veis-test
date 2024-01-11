import { AdsSection } from "@/components/domain/home/section/ads";
import { Banner } from "@/components/domain/home/section/banner";
import { PlacesSection } from "@/components/domain/home/section/places";
import { TabsSection } from "@/components/domain/home/section/tabs";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Banner />
      <TabsSection />
      <AdsSection />
      <PlacesSection />
    </div>
  );
}
