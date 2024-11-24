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
        <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-4'>
          {ideas.projects.map((project, index) => (
            <CardProject key={index} project={project} />
          ))}
        </div>
      ) : (
        <div className='max-w-sm mx-auto flex flex-col justify-center text-center space-y-2'>
          <h2 className='text-xl font-semibold'>Not project ideas</h2>
          <p className='text-base'>Try generating some ideas for your next project by filling out the form.</p>
        </div>
      )}
    </div>
  )
}

export default CardList