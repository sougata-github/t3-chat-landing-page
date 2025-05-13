import { RiGeminiFill, RiClaudeFill, RiOpenaiFill } from "react-icons/ri";
import { BotMessageSquare } from "lucide-react";
import Image from "next/image";

import { OrbitingCircles } from "../magicui/orbiting-circles";
import FeatureCard from "./FeatureCard";

const ModelFeatureCard = () => {
  return (
    <FeatureCard
      className="lg:col-span-3"
      title="Multi-model"
      description="Choose from a variety of popular ai models."
    >
      {/* orbiting circles */}
      <div className="relative flex-col gap-4 py-10 h-[260px] w-full items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent)] sm:flex hidden">
        {/* main logo */}
        <div className="p-2.5 absolute rounded-full bg-neutral-800 flex items-center justify-center">
          <BotMessageSquare className="text-white size-8" />
        </div>

        <OrbitingCircles iconSize={100} radius={180}>
          <Icon icon={<RiClaudeFill className="size-7.5" fill="#ff9f5b" />} />
          <Icon
            icon={
              <Image
                src="/deepseek-logo.svg"
                height={32}
                width={32}
                alt="deepseek"
              />
            }
          />
        </OrbitingCircles>
        <OrbitingCircles iconSize={30} radius={100} reverse speed={1}>
          <Icon icon={<RiOpenaiFill className="size-7.5" fill="#d8d8d8" />} />
          <Icon icon={<RiGeminiFill className="size-7" fill="#3195ff" />} />
        </OrbitingCircles>
      </div>

      {/* for mobile */}
      <div className="relative flex-col gap-4 py-10 h-[260px] w-full items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent)] hidden max-sm:flex">
        {/* main logo */}
        <div className="p-2.5 absolute rounded-full bg-neutral-800 flex items-center justify-center">
          <BotMessageSquare className="text-white size-6" />
        </div>

        <OrbitingCircles iconSize={100} radius={120}>
          <Icon icon={<RiClaudeFill className="size-5" fill="#ff9f5b" />} />
          <Icon
            icon={
              <Image
                src="/deepseek-logo.svg"
                height={20}
                width={20}
                alt="deepseek"
              />
            }
          />
        </OrbitingCircles>
        <OrbitingCircles iconSize={30} radius={60} reverse speed={1}>
          <Icon icon={<RiOpenaiFill className="size-5" fill="#d8d8d8" />} />
          <Icon icon={<RiGeminiFill className="size-4.5" fill="#3195ff" />} />
        </OrbitingCircles>
      </div>
    </FeatureCard>
  );
};

const Icon = ({ icon }: { icon: React.ReactElement }) => {
  return <div className="p-2 bg-neutral-800 rounded-full">{icon}</div>;
};

export default ModelFeatureCard;
