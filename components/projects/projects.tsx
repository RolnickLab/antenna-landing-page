"use client";

import { useProjects } from "@/components/projects/useProjects";
import content from "@/lib/content.json";
import { Loader2Icon } from "lucide-react";
import { useMemo } from "react";
import ProjectsMap from "./projects-map";

export const Projects = () => {
  const { projects = [] } = useProjects();

  const counts = useMemo(() => {
    const stationsCount = projects.reduce(
      (total, project) => total + project.deployments_count,
      0,
    );

    const cameraImagesCount = projects.reduce(
      (total, project) => total + project.captures_count,
      0,
    );

    return [
      {
        value: projects.length
          ? `${Math.round(projects.length / 10) * 10}` // Round to nearest 10
          : "-",
        unit: "Projects",
      },
      {
        value: stationsCount
          ? `${Math.round(stationsCount / 100) * 100}` // Round to nearest 100
          : "-",
        unit: "Stations",
      },
      {
        value: cameraImagesCount
          ? `${Math.round(cameraImagesCount / 1000000)}M`
          : "-",
        unit: "Camera images", // Convert to millions
      },
    ];
  }, [projects]);

  return (
    <>
      <div className="w-full h-[480px] relative bg-muted rounded-xl border overflow-hidden mb-12 max-lg:rounded-none max-lg:border-none max-lg:h-[320px]">
        <div className="absolute bottom-4 left-4 px-2 bg-accent rounded-sm text-accent-foreground z-10">
          <span className="text-base">{content.deployments.mapLabel}</span>
        </div>
        {projects.length ? (
          <ProjectsMap
            height={{ desktop: 480, mobile: 320 }}
            projects={projects}
          />
        ) : (
          <div className="absolute top-0 bottom-0 w-full h-full flex items-center justify-center">
            <Loader2Icon className="w-16 h-16 animate-spin text-accent" />
          </div>
        )}
      </div>
      <div className="max-lg:pb-12">
        <div className="flex items-center justify-center gap-24 max-md:gap-8">
          {counts.map((count, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-6xl mb-2 max-md:text-4xl">
                {count.value}
              </span>
              <span className="text-sm font-medium uppercase text-muted-foreground">
                {count.unit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
