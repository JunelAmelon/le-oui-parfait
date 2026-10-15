import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDepartmentBySlug, IDF_DEPARTMENTS } from '../_idfData';
import { DeptPillarPage } from '@/components/DeptPillarPage';

type PageProps = {
  params: Promise<{ dept: string }>;
};

export async function generateStaticParams() {
  return IDF_DEPARTMENTS.map((d) => ({ dept: d.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { dept } = await params;
  const d = getDepartmentBySlug(dept);
  if (!d) return {};

  const url = `https://leouiparfait.com/ile-de-france/${d.slug}`;
  const seoTitle = d.seoTitle ?? `Wedding planner ${d.name} (${d.code}) | Organisation de mariage`;
  const seoDescription =
    d.seoDescription ??
    `Organisatrice de mariage en ${d.name} (${d.code}). Organisation clé en main, organisation partielle et coordination du jour J. Intervention partout en Île-de-France. Devis sur demande.`;

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: seoTitle,
      description: `Organisation de mariage en ${d.name} : clé en main, organisation partielle, coordination du jour J.`,
      url,
      type: 'website',
    },
  };
}

export default async function IleDeFranceDepartmentPage({ params }: PageProps) {
  const { dept } = await params;
  const d = getDepartmentBySlug(dept);
  if (!d) notFound();

  return <DeptPillarPage dept={d} />;
}
