"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function CourseView({ courseName }: { courseName: string }) {
  useEffect(() => {
    trackEvent("course_view", courseName);
  }, [courseName]);

  return null;
}