export const Topics = ({
  title,
  topics,
}: {
  title: string;
  topics: Array<string>;
}) => {
  return (
    <div className="flex flex-col gap-6">
      <p className="font-bold text-[#063D7E]">{title}</p>

      <div className="flex flex-col gap-3">
        {topics.map((topic, index) => (
          <p key={index} className="text-[#555555]">
            {topic}
          </p>
        ))}
      </div>
    </div>
  );
};
