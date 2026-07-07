import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getCodelabSlugs, getCodelabSource } from "@/lib/codelabs";
import { mdxComponents } from "@/lib/mdx-components";
import CodelabView from "@/components/CodelabView";

export function generateStaticParams() {
  return getCodelabSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  if (!getCodelabSlugs().includes(params.slug)) return {};
  const { frontmatter } = getCodelabSource(params.slug);
  return { title: frontmatter.title, description: frontmatter.summary };
}

export default async function CodelabPage({ params }: { params: { slug: string } }) {
  if (!getCodelabSlugs().includes(params.slug)) {
    notFound();
  }

  const { content, frontmatter, steps } = getCodelabSource(params.slug);

  const { content: mdx } = await compileMDX({
    source: content,
    components: mdxComponents,
  });

  return (
    <CodelabView
      slug={frontmatter.slug}
      title={frontmatter.title}
      week={frontmatter.week}
      steps={steps}
    >
      {mdx}
    </CodelabView>
  );
}
