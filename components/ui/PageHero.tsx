import Image from "next/image";

interface PageHeroProps {
  variant: "services" | "events" | "contact" | "about";
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  imageUrl: string;
  preload?: boolean;
}

export function PageHero({
  variant,
  eyebrow,
  title,
  description,
  imageUrl,
  preload = false,
}: PageHeroProps) {
  const styles = {
    services: {
      container: "bg-brand-sand text-brand-navy sm:min-h-[430px]",
      image: "absolute inset-y-0 right-0 hidden w-[58%] sm:block",
      overlay:
        "bg-[linear-gradient(90deg,var(--brand-sand)_0%,var(--brand-sand)_36%,rgba(var(--brand-sand-rgb),0.82)_54%,rgba(var(--brand-sand-rgb),0.08)_100%)]",
      content: "max-w-full sm:max-w-[62%]",
      eyebrow: "text-brand-gold-ink",
      description: "text-brand-text-muted",
    },
    events: {
      container: "bg-brand-navy-deep text-white sm:min-h-[460px]",
      image: "absolute inset-0",
      overlay:
        "bg-[linear-gradient(0deg,rgba(var(--brand-navy-deep-rgb),0.94),rgba(var(--brand-navy-deep-rgb),0.32))]",
      content: "mx-auto max-w-4xl items-center text-center",
      eyebrow: "text-brand-gold",
      description: "max-w-2xl text-white/75",
    },
    contact: {
      container: "bg-brand-navy-deep text-white sm:min-h-[360px]",
      image: "absolute inset-y-0 right-0 hidden w-[42%] sm:block",
      overlay:
        "bg-[linear-gradient(90deg,var(--brand-navy-deep)_0%,var(--brand-navy-deep)_48%,rgba(var(--brand-navy-deep-rgb),0.12)_100%)]",
      content: "max-w-3xl",
      eyebrow: "text-brand-gold",
      description: "max-w-xl text-white/75",
    },
    about: {
      container:
        "border border-brand-border bg-brand-cream text-brand-navy sm:min-h-[430px]",
      image: "absolute inset-y-5 left-5 hidden w-[34%] sm:block lg:inset-y-8 lg:left-8",
      overlay: "hidden",
      content: "max-w-full sm:ml-auto sm:max-w-[62%]",
      eyebrow: "text-brand-gold-ink",
      description: "text-brand-text-muted",
    },
  }[variant];

  return (
    <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
      <div className={`relative mx-auto max-w-7xl overflow-hidden rounded-3xl px-5 py-12 sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:px-20 lg:py-20 ${styles.container}`}>
        <div className={`${styles.image} ${variant === "about" ? "overflow-hidden rounded-2xl" : ""}`}>
          <Image
            src={imageUrl}
            alt=""
            fill
            preload={preload}
            sizes="(max-width: 1280px) 100vw, 1200px"
            className={`object-cover ${variant === "events" ? "opacity-55" : variant === "services" ? "object-[64%_center] opacity-90" : ""}`}
          />
        </div>
        <div className={`absolute inset-0 ${styles.overlay}`} />
        <div className={`relative z-10 flex min-h-[260px] flex-col justify-center sm:min-h-[300px] ${styles.content}`}>
          <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${styles.eyebrow}`}>
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-7xl">
            {title}
          </h1>
          <p className={`mt-8 max-w-3xl text-lg leading-8 sm:text-xl ${styles.description}`}>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}