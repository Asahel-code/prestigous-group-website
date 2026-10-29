"use client";

import { useState } from "react";
import { Calendar as CalendarIcon, MapPin, Monitor, Layers, Search, ArrowUpRight } from "lucide-react";
import { trainingCalendarData, TrainingCourse } from "@/data/training-calendar";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export function TrainingCalendar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [deliveryFilter, setDeliveryFilter] = useState<string>("All");
  const [yearFilter, setYearFilter] = useState<string>("All");

  const filteredCourses = trainingCalendarData.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.month.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.date.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDelivery = deliveryFilter === "All" || course.delivery === deliveryFilter;
    const matchesYear = yearFilter === "All" || course.month.includes(yearFilter);

    return matchesSearch && matchesDelivery && matchesYear;
  });

  // Group filtered courses by month
  const groupedByMonth = filteredCourses.reduce((acc, course) => {
    if (!acc[course.month]) {
      acc[course.month] = [];
    }
    acc[course.month].push(course);
    return acc;
  }, {} as Record<string, TrainingCourse[]>);

  return (
    <div className="min-h-screen bg-[#f8f6f1] pb-24 text-[#0d1b3d]">

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Filters and Search Bar */}
        <div className="mb-12 flex flex-col gap-6 rounded-3xl border border-[#e8e2d5] bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search courses or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-3 pl-12 pr-4 text-sm font-medium text-[#0d1b3d] placeholder:text-slate-400 focus:border-[#d4af6d] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af6d]/20"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* Year Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Year:</span>
              <div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1">
                {["All", "2026", "2027"].map((year) => (
                  <button
                    key={year}
                    type="button"
                    onClick={() => setYearFilter(year)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${yearFilter === year ? "bg-[#0d1b3d] text-white shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Delivery:</span>
              <div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1">
                {["All", "Physical", "Online", "Hybrid"].map((delivery) => (
                  <button
                    key={delivery}
                    type="button"
                    onClick={() => setDeliveryFilter(delivery)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${deliveryFilter === delivery ? "bg-[#0d1b3d] text-white shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
                  >
                    {delivery}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Grid / List */}
        {Object.keys(groupedByMonth).length > 0 ? (
          <div className="space-y-12">
            {Object.entries(groupedByMonth).map(([month, courses]) => (
              <div key={month} className="rounded-3xl border border-[#e8e2d5] bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-[#f1e8d4] p-2.5 text-[#715426]">
                      <CalendarIcon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-[#0d1b3d]">{month}</h3>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {courses.length} {courses.length === 1 ? "Course" : "Courses"}
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {courses.map((course) => {
                    const isPhysical = course.delivery === "Physical";
                    const isOnline = course.delivery === "Online";
                    const isHybrid = course.delivery === "Hybrid";

                    return (
                      <div
                        key={course.id}
                        className="group relative flex flex-col justify-between rounded-2xl border border-slate-100 bg-[#f8f6f1]/50 p-6 transition-all hover:border-[#d4af6d]/50 hover:bg-white hover:shadow-md"
                      >
                        <div>
                          <div className="mb-3 flex items-center justify-between">
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#715426]">
                              <CalendarIcon className="h-3.5 w-3.5" />
                              {course.date}
                            </span>
                            <span
                              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                                isPhysical
                                  ? "bg-amber-100/80 text-amber-800"
                                  : isOnline
                                  ? "bg-blue-100/80 text-blue-800"
                                  : "bg-purple-100/80 text-purple-800"
                              }`}
                            >
                              {isPhysical && <MapPin className="h-3 w-3" />}
                              {isOnline && <Monitor className="h-3 w-3" />}
                              {isHybrid && <Layers className="h-3 w-3" />}
                              {course.delivery}
                            </span>
                          </div>

                          <h4 className="text-lg font-bold text-[#0d1b3d] group-hover:text-[#715426] transition-colors">
                            {course.title}
                          </h4>
                        </div>

                        <div className="mt-6 flex items-center justify-between border-t border-slate-200/60 pt-4">
                          <span className="text-xs font-medium text-slate-500">Corporate & Individual Booking</span>
                          <TrackedLink
                            href={`/contact?interest=training&course=${encodeURIComponent(course.title)}&date=${encodeURIComponent(course.date)}`}
                            eventName="training_registration_click"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0d1b3d] transition-colors hover:text-[#715426]"
                          >
                            Book / Enquire <ArrowUpRight className="h-3.5 w-3.5" />
                          </TrackedLink>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-[#e8e2d5] bg-white py-20 text-center shadow-sm">
            <CalendarIcon className="mx-auto h-12 w-12 text-slate-300" />
            <h3 className="mt-4 text-lg font-bold text-[#0d1b3d]">No courses found</h3>
            <p className="mt-1 text-sm text-slate-500">Try adjusting your search or filter criteria.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setDeliveryFilter("All");
                setYearFilter("All");
              }}
              className="mt-6 inline-flex rounded-xl bg-[#0d1b3d] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#162c5c]"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-[#0d1b3d] to-[#08172f] p-8 text-white shadow-xl sm:p-12">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold">Custom Corporate Training</h3>
            <p className="mt-4 text-lg text-blue-100">
              Need tailored training for your entire team or organization? We customize our masterclasses and workshops to address your specific organizational goals and challenges.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <TrackedLink
                href="/contact?interest=custom-training"
                eventName="custom_training_click"
                className="inline-flex items-center justify-center rounded-xl bg-[#d4af6d] px-6 py-3 text-sm font-semibold text-[#08172f] shadow-sm transition-colors hover:bg-[#c7a267]"
              >
                Request Custom Training <ArrowUpRight className="h-4 w-4 ml-1.5" />
              </TrackedLink>
              <TrackedLink
                href="/services"
                eventName="explore_services_click"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                View All Services
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
