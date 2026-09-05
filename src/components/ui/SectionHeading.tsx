type SectionHeadingProps = {
  kicker: string;
  title: string;
};

export function SectionHeading({ kicker, title }: SectionHeadingProps) {
  return (
    <div className="mb-5">
      <p className="mb-2 font-mono text-base tracking-widest text-acc uppercase">
        {kicker}
      </p>
      <h2 className="font-serif text-[clamp(44px,6.5vw,68px)] leading-tight font-normal">
        {title}
      </h2>
    </div>
  );
}
