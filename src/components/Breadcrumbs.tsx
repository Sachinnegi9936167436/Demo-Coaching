import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { generateBreadcrumbSchema, SITE_URL } from '@/lib/seo';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  const allItems: BreadcrumbItem[] = [
    { name: 'Home', path: '/' },
    ...items,
  ];

  const jsonLd = generateBreadcrumbSchema(allItems);

  return (
    <>
      {/* Schema.org Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Crawlable Semantic Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className={`py-3 text-xs font-display tracking-wider uppercase text-[#8e9eaf] ${className}`}
      >
        <ol
          className="flex flex-wrap items-center gap-2 list-none p-0 m-0"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            const fullUrl = item.path.startsWith('http')
              ? item.path
              : `${SITE_URL}${item.path.startsWith('/') ? item.path : `/${item.path}`}`;

            return (
              <li
                key={item.path}
                className="flex items-center gap-2"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={String(index + 1)} />
                {index > 0 && (
                  <ChevronRight size={11} className="text-[#D7B879]/50 shrink-0" aria-hidden="true" />
                )}

                {isLast ? (
                  <span
                    className="text-[#D7B879] font-semibold truncate max-w-[220px] sm:max-w-none"
                    itemProp="name"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="hover:text-[#F9F7F2] transition-colors flex items-center gap-1.5"
                    itemProp="item"
                  >
                    {index === 0 && <Home size={11} className="text-[#D7B879] shrink-0" aria-hidden="true" />}
                    <span itemProp="name">{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
