import { type FC } from 'react'

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { Project } from '@/types/ideas';
import { Badge } from '@/components/ui/badge';

interface Props {
  project: Project
}

const ProjectDetails: FC<Props> = ({ project }) => {
  return (
    <Drawer>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent className='rounded-t-2xl'>
        <div className='mx-auto max-w-4xl'>
          <DrawerHeader>
            <DrawerTitle>{project.title}</DrawerTitle>
            <DrawerDescription>{project.short_description}</DrawerDescription>
          </DrawerHeader>
          <div className='p-4 text-center sm:text-left'>
            <p>
              {project.description}
            </p>
          </div>
          <DrawerFooter>
            <div className='flex gap-2'>
              {project.suggested_technologies.map((tech, index) => (
                <Badge variant='outline' className='text-xs' key={index}>{tech.name}</Badge>
              ))}
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>

  )
}

export default ProjectDetails;