import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface Props {
  name: string;
  position: string;
  text: string;
  highlightIndex: number;
}

const TestimonialCard = ({ name, position, text, highlightIndex }: Props) => {
  const sentences = text.split(/(?<=[.!?])\s+/);

  const fullText = sentences.map((sentence, i) =>
    i === highlightIndex ? (
      <span key={i} className="mr-1 bg-pink-700/80 text-white rounded px-1">
        {sentence}
      </span>
    ) : (
      <span key={i}>{sentence} </span>
    )
  );

  return (
    <Card className="flex-none max-w-[320px] h-[220px] flex flex-col justify-between border-none">
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {fullText}
        </p>
      </CardContent>
      <CardFooter className="flex gap-4 items-center">
        <div className="rounded-full p-2 size-6 bg-gradient-to-bl from-pink-500 via-pink-700 to-pink-900" />

        <div className="flex flex-col">
          <span className="text-sm">{name}</span>
          <span className="text-xs text-muted-foreground/40 max-w-xs">
            {position}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
