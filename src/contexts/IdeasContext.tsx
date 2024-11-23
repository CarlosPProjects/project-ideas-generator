'use client'

import { Ideas } from '@/types/ideas';
import React, { createContext, useState, useContext } from 'react';

const IdeasContext = createContext<{ ideas: Ideas; setIdeas: React.Dispatch<React.SetStateAction<Ideas>> } | undefined>(undefined);

export const IdeasProvider = ({ children }: { children: React.ReactNode }) => {
  const [ideas, setIdeas] = useState<Ideas>({
    projects: []
  });

  return (
    <IdeasContext.Provider value={{ ideas, setIdeas }}>
      {children}
    </IdeasContext.Provider>
  );
};

export const useIdeas = () => useContext(IdeasContext);