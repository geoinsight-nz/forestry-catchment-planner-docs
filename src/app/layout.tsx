import glob from 'fast-glob'
import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { type Section } from '@/components/SectionProvider'
import { Inter } from 'next/font/google'

import { cn } from '@/lib/utils'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Forestry Catchment Planner Documentation',
    default: 'Forestry Catchment Planner Documentation',
  },
  openGraph: {
    title: 'Forestry Catchment Planner',
    url: 'https://www.docs.forestrycatchmentplanner.nz',
    siteName: 'Forestry Catchment Planner',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `https://www.docs.forestrycatchmentplanner.nz/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Forestry Catchment Planner',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let pages = await glob('**/*.mdx', { cwd: 'src/app' })
  let allSectionsEntries = (await Promise.all(
    pages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)page\.mdx$/, ''),
      (await import(`./${filename}`)).sections,
    ]),
  )) as Array<[string, Array<Section>]>
  let allSections = Object.fromEntries(allSectionsEntries)

  return (
    <html
      lang="en"
      className={cn(inter.variable, 'h-full')}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-white antialiased dark:bg-zinc-900">
        <Providers>
          <div className="w-full">
            <Layout allSections={allSections}>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
