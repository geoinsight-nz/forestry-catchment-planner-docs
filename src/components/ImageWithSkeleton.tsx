import React, { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

interface ImageWithSkeletonProps {
  src: string
  alt: string
  className?: string
}

const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  src,
  alt,
  className,
}) => {
  const [isLoading, setIsLoading] = useState(true)

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className={cn('relative', className)}>
      {isLoading && (
        <Skeleton className="absolute inset-0 h-full w-full rounded" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        className={cn('h-full w-full rounded object-cover', {
          hidden: isLoading,
        })}
      />
    </div>
  )
}

export default ImageWithSkeleton
