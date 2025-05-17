import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

interface Props {
  tier: string;
  description: string;
  features: string[];
  price: string;
  buttonText: string;
  isPrimary: boolean;
}

const PricingCard = ({
  tier,
  description,
  features,
  price,
  buttonText,
  isPrimary,
}: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col px-6 py-4 rounded-xl cursor-pointer max-w-md w-full",
        isPrimary ? "relative bg-muted-foreground/10" : "bg-muted-foreground/5"
      )}
    >
      {/* card header */}
      <div className="mt-5 flex flex-col gap-4">
        <h2 className="text-lg font-semibold">{tier}</h2>
        <span className="inline-flex items-center gap-1 text-3xl sm:text-4xl font-bold">
          ${price} <span className="text-muted-foreground text-sm">/month</span>
        </span>

        <p className="text-muted-foreground">{description}</p>

        <Button
          className={cn(
            "py-6 mt-5 text-base rounded-full w-full",
            isPrimary &&
              "relative bg-pink-700 text-white transition duration-300 hover:bg-pink-700/90 lg:hover:ring-2 lg:hover:ring-pink-700 lg:hover:ring-offset-4 lg:hover:ring-offset-background"
          )}
          asChild
          size="lg"
        >
          <Link
            href={
              isPrimary
                ? "https://t3.chat/settings/subscription"
                : "https://t3.chat/chat"
            }
          >
            {buttonText}
          </Link>
        </Button>
      </div>

      <Separator className="my-10" />

      <ul className="flex flex-col gap-4 py-8">
        {features.map((feature) => (
          <li key={feature} className="inline-flex gap-4 items-center">
            <CheckCircle2
              className={cn(
                "size-5",
                isPrimary ? "text-pink-700" : "text-muted-foreground"
              )}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
