import Link from "next/link";
import { notFound } from "next/navigation";
import { CourseView } from "@/components/analytics/CourseView";
import { BreadcrumbJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { getCanonicalUrl } from "@/config/site";
import { getTrainingCourseBySlug, trainingCourses } from "@/data/courses";
import { createPageMetadata } from "@/lib/metadata";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

function isKnown(value: string): boolean {
  return value.length > 0 && !value.includes("TODO(owner)");
}

export function generateStaticParams() {
  return trainingCourses.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getTrainingCourseBySlug(slug);
  if (!course) return {};

  return createPageMetadata({
    title: `${course.title} Training`,
    description: `Contact Prestigious Consultancy about ${course.title} training in Nairobi, Kenya. Request confirmed course details and a proposal for your organisation and team.`,
    path: `/services/training/${course.slug}`,
  });
}

export default async function TrainingCoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getTrainingCourseBySlug(slug);
  if (!course) notFound();

  const courseUrl = getCanonicalUrl(`services/training/${course.slug}`);

  return (
    <>
      <CourseView courseName={course.slug} />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: getCanonicalUrl() },
        { name: "Services", url: getCanonicalUrl("services") },
        { name: "Training", url: getCanonicalUrl("services/training") },
        { name: course.title, url: courseUrl },
      ]} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: course.title,
        serviceType: course.category,
        provider: { "@id": `${getCanonicalUrl()}#organization` },
        areaServed: ["Nairobi, Kenya", "Kenya", "East Africa"],
        url: courseUrl,
        ...(isKnown(course.summary) ? { description: course.summary } : {}),
      }} />
      <section className="bg-[#f8f6f1] px-4 py-16 text-[#0d1b3d] sm:px-6 lg:px-8 lg:py-24">
        <article className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#715426]">
            {course.category}
          </p>
          <h1 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">
            {course.title}
          </h1>
          {isKnown(course.summary) && (
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#596170]">{course.summary}</p>
          )}
          {isKnown(course.audience) && (
            <section className="mt-10 border-t border-[#d9d2c4] pt-8">
              <h2 className="text-2xl font-medium">Who should attend</h2>
              <p className="mt-3 leading-7 text-[#596170]">{course.audience}</p>
            </section>
          )}
          {course.outcomes.some(isKnown) && (
            <section className="mt-10 border-t border-[#d9d2c4] pt-8">
              <h2 className="text-2xl font-medium">Learning outcomes</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[#596170]">
                {course.outcomes.filter(isKnown).map((outcome) => <li key={outcome}>{outcome}</li>)}
              </ul>
            </section>
          )}
          <Link
            href={`/services/training?course=${course.slug}#service-enquiry`}
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded-md bg-[#0d1b3d] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#08172f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d] focus-visible:ring-offset-2"
          >
            Request a training proposal
          </Link>
        </article>
      </section>
    </>
  );
}