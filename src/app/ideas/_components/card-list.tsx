'use client'

import { useIdeas } from "@/contexts/IdeasContext";
import CardProject from "./card-project";

const CardList = () => {

  const ideasContext = useIdeas();
  if (!ideasContext) {
    throw new Error("useIdeas must be used within an IdeasProvider");
  }

  const { ideas } = ideasContext;

  return (
    <div className="flex-1 flex">
      {ideas.projects && ideas.projects.length > 0 ? (
        <div className='grid grid-cols-4 gap-4'>
          {ideas.projects.map((project, index) => (
            <CardProject key={index} project={project} />
          ))}
        </div>
      ) : (
        <div className='w-full flex flex-col justify-center text-center space-y-2'>
          <h2 className='text-xl font-medium'>Not project ideas found</h2>
          <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      )}
    </div>
  )
}

export default CardList