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
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!getCodelabSlugs().includes(slug)) return {};
  const { frontmatter } = getCodelabSource(slug);
  return { title: frontmatter.title, description: frontmatter.summary };
}

export default async function CodelabPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getCodelabSlugs().includes(slug)) {
    notFound();
  }

  const { content, frontmatter, steps } = getCodelabSource(slug);

  const { content: mdx } = await compileMDX({
    source: content,
    components: mdxComponents,
    options: {
      // Content is first-party and trusted, so re-enable MDX expressions
      // (component props like minutes={20} and code-block children) that
      // next-mdx-remote v6 blocks by default.
      blockJS: false,
    },
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
