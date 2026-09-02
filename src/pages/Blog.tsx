"use client";
 
import { useState } from "react";
import BlogSection from "@/components/common/BlogSection";
import HeroSection from "@/components/common/HeroSection";
import PageTitleBanner from "@/components/common/PageTitleBanner";

 
const FEATURED_POST = {
    date: "SEP 29, 2025",
    category: "Project Management",
    title: "Handling construction projects can be quite demanding",
    image: "/images/blog.png",
    imageAlt: "Blueprints, a drill and screws on a workbench",
    href: "/blog/handling-construction-projects",
};
 
const ALL_POSTS = [
    {
        date: "SEP 29, 2025",
        category: "Project Management",
        title: "Field inspections that actually catch problems early",
        image: "/images/blog-1.png",
        imageAlt: "Construction worker inspecting rebar on a street barrier",
        href: "/blog/field-inspections",
    },
    {
        date: "SEP 28, 2025",
        category: "Home Improvement",
        title: "Pointers for a flourishing home improvement project",
        image: "/images/blog-2.png",
        imageAlt: "Blueprints and tools on a workbench",
        href: "/blog/home-improvement-pointers",
    },
    {
        date: "SEP 27, 2025",
        category: "Sustainability",
        title: "The future of eco-friendly building practices",
        image: "/images/blog-3.png",
        imageAlt: "Construction worker on a job site",
        href: "/blog/eco-friendly-building",
    },
    {
        date: "SEP 26, 2025",
        category: "Technology",
        title: "Advancements in construction technology",
        image: "/images/blog-4.png",
        imageAlt: "Drill and blueprints on a workbench",
        href: "/blog/construction-technology",
    },
    {
        date: "SEP 25, 2025",
        category: "Technology",
        title: "BIM's importance in the construction industry",
        image: "/images/blog-1.png",
        imageAlt: "Construction worker at a job site",
        href: "/blog/bim-importance",
    },
    {
        date: "SEP 24, 2025",
        category: "Safety",
        title: "Jobsite safety checklists that crews actually follow",
        image: "/images/blog-2.png",
        imageAlt: "Tools and blueprints on a workbench",
        href: "/blog/jobsite-safety-checklists",
    },
    {
        date: "SEP 23, 2025",
        category: "Logistics",
        title: "Why material delivery windows make or break a schedule",
        image: "/images/blog-3.png",
        imageAlt: "Construction worker inspecting materials",
        href: "/blog/material-delivery-windows",
    },
    {
        date: "SEP 22, 2025",
        category: "Design",
        title: "Design-build vs. design-bid-build: what actually saves time",
        image: "/images/blog-4.png",
        imageAlt: "Architectural blueprints on a table",
        href: "/blog/design-build-vs-design-bid-build",
    },
    {
        date: "SEP 21, 2025",
        category: "Cost Control",
        title: "Tracking change orders without losing the paper trail",
        image: "/images/blog-1.png",
        imageAlt: "Construction worker reviewing site documents",
        href: "/blog/tracking-change-orders",
    },
];
 
const PAGE_SIZE = 4;

export default function Blog() {
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    return (
        <>
            
            <PageTitleBanner heading="Blog" backgroundColor="#2B6BFF" />

            <BlogSection
                featuredPost={FEATURED_POST}
                posts={ALL_POSTS.slice(0, visibleCount)}
                columns={2}
                showLoadMore={visibleCount < ALL_POSTS.length}
                onLoadMore={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
            />
            <HeroSection
                image="/images/truck-1.png"
                imageAlt="Semi truck driving on a highway at sunset"
                heading={"Send us the lane. We'll\nsend back the landed\nnumber."}
                description="Origin, commodity, dimensions, weight, destination and the date it has to be on site. That's enough for us to come back with a routing and a delivered price."
                primaryCta={{ label: "Start a lane quote", href: "/quote" }}
                secondaryCta={{ label: "info@ktrfreight.com", href: "mailto:info@ktrfreight.com" }}
            />

        </>
    );
}