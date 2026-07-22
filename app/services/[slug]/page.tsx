import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { SERVICES, getService } from "@/lib/catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.name} — Looping Binary`,
    description: service.short,
    openGraph: {
      title: `${service.name} — Looping Binary`,
      description: service.short,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
