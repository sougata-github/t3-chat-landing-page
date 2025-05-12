import FeatureCard from "./FeatureCard";

const ModelFeatureCard = () => {
  return (
    <FeatureCard
      className="lg:col-span-3"
      title="Multi-model"
      description="Choose from a variety of popular ai models."
    >
      <div className="flex flex-col gap-4 py-10 h-[220px]"></div>
    </FeatureCard>
  );
};

export default ModelFeatureCard;
