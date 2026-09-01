import Link from "next/link";
import type { ReactNode } from "react";
import type { WorkItem } from "@/lib/catalog";

type Props = {
  item: WorkItem;
  className?: string;
  children: ReactNode;
};

export default function ProjectLink({ item, className, children }: Props) {
  if (item.href) {
    return (
      <a
        href={item.href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={`/work/${item.slug}`} className={className}>
      {children}
    </Link>
  );
}
