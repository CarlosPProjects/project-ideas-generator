import { type FC } from 'react'

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"

import { Project } from '@/types/ideas';
import { Badge } from '@/components/ui/badge';

interface Props {
  project: Project
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

const ProjectDetails: FC<Props> = ({ project, isOpen, onOpenChange }) => {

  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
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
            <div className='flex gap-2 justify-center sm:justify-start'>
              {project.suggested_technologies.map((tech, index) => (
                <Badge variant='outline' className='text-xs' key={index}>{tech.name}</Badge>
              ))}
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default ProjectDetails;