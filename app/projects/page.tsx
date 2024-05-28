import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
    )
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const top1 = allProjects.find((project) => project.slug === "logan_flood")!;
  const top2 = allProjects.find((project) => project.slug === "monash_health")!;
  const top3 = allProjects.find((project) => project.slug === "habitify")!;
  const top4 = allProjects.find((project) => project.slug === "unily4e")!;
  const top5 = allProjects.find((project) => project.slug === "uniways")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== top1.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug &&
        project.slug !== top4.slug,

    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-100">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div/>

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">

          <div className="flex flex-col w-full  gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top1, top2, top3, top4, top5].map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={views[project.slug] ?? 0} />
              </Card>
            ))}
          </div>
        </div>
        <div/>
      </div>
    </div>
  );
}
