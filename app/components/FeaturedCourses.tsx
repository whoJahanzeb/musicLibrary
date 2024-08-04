"use client";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <>
      <div className="py-12 bg-zinc-950">
        <div>
          <div className="text-center space-y-4">
            <h2 className="uppercase text-teal-400 text-base tracking-wide font-semibold">
              Featured Courses
            </h2>
            <p className="text-4xl font-bold">Learn With the Best</p>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredCourses.map((course: Course) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="bg-zinc-900 rounded-[22px] flex flex-col overflow-hidden h-full max-w-sm">
                  <div className="py-10 px-4 space-y-4">
                    <p className="font-bold text-2xl">{course.title}</p>
                    <p className="text-base">{course.description}</p>
                    <div>
                      <Link
                        href={`/course/${course.id}`}
                        className="text-xs capitalize font-bold bg-white text-black rounded-full px-4 py-2"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-20">
          <Link href="/courses" className="p-4 bg-zinc-900 rounded-full">
            View All Coures
          </Link>
        </div>
      </div>
    </>
  );
}

export default FeaturedCourses;
