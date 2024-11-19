import { cn } from '@/lib/utils';
import { type FC } from 'react'

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Container: FC<Props> = ({ children, className }) => {
  return (
    <section className={cn('w-full max-w-7xl mx-auto', className)}>
      {children}
    </section>
  )
}

export default Container;