import Link from "next/link";
import Image from "next/image";
import { ServiceItem } from "@/data/services";
import { ArrowRight } from "lucide-react";

export function ServiceCard({ service, priority = false }: { service: ServiceItem, priority?: boolean }) {
  return (
    <Link 
      href={`/services/${service.slug}`}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md block h-full"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <div className="absolute inset-0 bg-black/40 z-10 transition-opacity group-hover:opacity-30" />
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
          <p className="text-slate-200 text-sm line-clamp-2 mb-4">{service.description}</p>
          <div className="inline-flex items-center text-sm font-semibold text-white">
            Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
