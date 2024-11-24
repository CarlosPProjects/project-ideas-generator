'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Project } from "@/types/ideas"
import { FC, useState } from "react"
import ProjectDetails from "./project-details"

interface Props {
  project: Project
}

const CardProject: FC<Props> = ({ project }) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <>
      <Card className="rounded-2xl cursor-pointer" onClick={handleOpenDrawer}>
        <CardHeader className="rounded-t-2xl bg-gray-100 border-b border-border p-5">
          <div className="flex justify-between items-center gap-2">
            <CardTitle>{project.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-5">
          <p className="text-sm">{project.description}</p>
        </CardContent>
      </Card >
      <ProjectDetails
        project={project}
        isOpen={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
      />
    </>
  )
}

export default CardProject