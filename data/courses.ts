import { servicesData } from "@/data/services";

const TODO = "TODO(owner)";

export interface TrainingCourse {
  slug: string;
  title: string;
  category: string;
  summary: string;
  audience: string;
  outcomes: string[];
  duration: string;
  certification: string;
  delivery: string;
  prerequisites: string;
  faqs: { question: string; answer: string }[];
}

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const trainingService = servicesData.find((service) => service.slug === "training");

export const trainingCourses: TrainingCourse[] = (trainingService?.detailSections ?? [])
  .flatMap((section) =>
    section.items.map((item) => {
      const title = item === "Work at Heights" ? "Work at Heights Training" : item;
      return {
        slug: createSlug(item),
        title,
        category: section.title,
        summary: TODO,
        audience: TODO,
        outcomes: [TODO],
        duration: TODO,
        certification: TODO,
        delivery: TODO,
        prerequisites: TODO,
        faqs: [],
      };
    }),
  );

export function getTrainingCourseBySlug(slug: string): TrainingCourse | undefined {
  return trainingCourses.find((course) => course.slug === slug);
}

export function getTrainingCourseForTopic(topic: string): TrainingCourse | undefined {
  return trainingCourses.find(
    (course) => course.title === topic || (topic === "Work at Heights" && course.slug === "work-at-heights"),
  );
}