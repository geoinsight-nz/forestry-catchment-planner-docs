import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

import { GlobeIcon } from '@/components/icons/GlobeIcon'
import { MergeIcon } from '@/components/icons/MergeIcon'
import { MountainIcon } from '@/components/icons/MountainIcon'
import { TreesIcon } from '@/components/icons/TreesIcon'
import { createElement } from 'react'

const guides = [
  {
    href: '/background',
    name: 'Background',
    icon: MountainIcon,
    description: 'Learn about forestry and erosion in Aotearoa New Zealand.',
  },
  {
    href: '/regions',
    name: 'Regions',
    icon: GlobeIcon,
    description: 'Targeted regions with the goal of expanding.',
  },
  {
    href: '/plantation-forests',
    name: 'Plantation forests',
    icon: TreesIcon,
    description: 'Harvesting cycles in plantation forests.',
  },
  {
    href: '/depositional-zones',
    name: 'Depositional zones',
    icon: MergeIcon,
    description:
      'Sensitive receiving environments downstream of plantation forests.',
  },
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="quick-links">
        Quick links
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {guides.map((guide) => (
          <div key={guide.href}>
            <div className="flex gap-4 align-baseline">
              <span className="text-zinc-900 dark:text-white">
                {createElement(guide.icon)}
              </span>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {guide.name}
              </h3>
            </div>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
