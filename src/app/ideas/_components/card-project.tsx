import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Project } from "@/types/ideas"
import { FC } from "react"

interface Props {
  project: Project
}

const CardProject: FC<Props> = ({ project }) => {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="rounded-t-2xl bg-gray-100 border-b border-border p-5">
        <div className="flex justify-between items-center gap-2">
          <CardTitle>{project.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-5">
        <p className="text-sm">{project.description}</p>
      </CardContent>
    </Card>
  )
}

export default CardProject