import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PostList from "@/components/PostList";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Legal Insights & Updates – Blog by United Associates Lawyers",
  description:
    "Stay informed with the latest legal insights, news, and updates from United Associates Lawyers. Explore articles on a range of legal topics and keep up to date with recent changes in the law.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Insights"
        crumbs={[{ label: "Insights" }]}
        image="/images/heroes/insights.png"
        align="center"
      />

      <section className="bg-section py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <PostList posts={posts} />
        </div>
      </section>
    </>
  );
}
