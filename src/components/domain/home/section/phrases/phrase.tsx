import { SectionSeparator } from "@/components/ui/sectionSeparator";

export const Phrase = ({
  subtitle,
  title,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <SectionSeparator />

      <h1 className="font-bold text-[#4E5254]">{title}</h1>

      <p className="text-sm text-[#4E5254]">{subtitle}</p>
    </div>
  );
};
