import Image from "next/image";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  imageUrl: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  imageUrl,
}: PageHeroProps) {
  return (
    <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#08172f] px-5 py-12 text-white sm:min-h-[430px] sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:px-20 lg:py-24">
        <Image
          src={imageUrl}
          alt=""
          fill
          sizes="(max-width: 1280px) 100vw, 1200px"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,#08172f_15%,rgba(8,23,47,0.82),rgba(8,23,47,0.3))]" />
        <div className="relative z-10 flex min-h-[260px] flex-col justify-center sm:min-h-[300px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af6d]">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-7xl">
            {title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}