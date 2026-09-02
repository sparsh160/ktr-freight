"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export interface BlogPost {
    date: string;
    category: string;
    title: string;
    image: string;
    imageAlt?: string;
    href: string;
}

export interface BlogSectionProps {
    featuredPost: BlogPost;
    posts: BlogPost[];
    columns?: 2 | 3;
    onLoadMore?: () => void;
    loadMoreLabel?: string;
    showLoadMore?: boolean;
    className?: string;
}

const PostMeta: React.FC<{
    date: string;
    category: string;
}> = ({ date, category }) => (
    <div className="flex items-center gap-2.5 text-[12px] sm:text-[13px] font-medium tracking-[0.04em] uppercase text-gray-500 mb-4">
        <span>{date}</span>

        <span className="w-1 h-1 bg-gray-400 rounded-full shrink-0" />

        <span>{category}</span>
    </div>
);

const BlogSection: React.FC<BlogSectionProps> = ({
    featuredPost,
    posts,
    columns = 2,
    onLoadMore,
    loadMoreLabel = "Load More",
    showLoadMore = true,
    className = "",
}) => {
    const lgColsClass =
        columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";

    return (
        <section
            className={`w-full bg-[#F2F1EE] py-14 sm:py-16 md:py-20 ${className}`}
        >
            <div className="max-w-[1340px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">

                {/* Featured Post */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    className="flex flex-col lg:flex-row gap-8 lg:gap-14 mb-14 sm:mb-16 md:mb-20"
                >
                    <Link
                        href={featuredPost.href}
                        className="relative w-full lg:w-[55%] aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-gray-100 group"
                    >
                        <Image
                            src={featuredPost.image}
                            alt={
                                featuredPost.imageAlt ??
                                featuredPost.title
                            }
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </Link>

                    <div className="w-full lg:w-[45%] flex flex-col justify-center">
                        <PostMeta
                            date={featuredPost.date}
                            category={featuredPost.category}
                        />

                        <Link href={featuredPost.href}>
                            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium text-gray-900 leading-tight mb-8 hover:text-blue-600 transition-colors">
                                {featuredPost.title}
                            </h2>
                        </Link>

                        <Link
                            href={featuredPost.href}
                            className="self-start"
                        >
                            <motion.span
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[13px] sm:text-[14px] font-semibold tracking-[0.04em] uppercase px-6 py-3.5 transition-colors"
                            >
                                Read More

                                <ArrowUpRight
                                    size={16}
                                    strokeWidth={2}
                                />
                            </motion.span>
                        </Link>
                    </div>
                </motion.div>

                {/* Posts Grid */}
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 ${lgColsClass} gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-14`}
                >
                    {posts.map((post) => (
                        <motion.div
                            key={post.href}
                            initial={{
                                opacity: 0,
                                y: 24,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.1,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <Link
                                href={post.href}
                                className="relative block w-full aspect-[16/10] overflow-hidden bg-gray-100 mb-5 group"
                            >
                                <Image
                                    src={post.image}
                                    alt={
                                        post.imageAlt ??
                                        post.title
                                    }
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </Link>

                            <PostMeta
                                date={post.date}
                                category={post.category}
                            />

                            <Link href={post.href}>
                                <h3 className="text-[22px] sm:text-[26px] font-medium text-gray-900 leading-snug hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Load More */}
                {showLoadMore && (
                    <div className="flex justify-end mt-14 sm:mt-16">
                        <motion.button
                            type="button"
                            onClick={onLoadMore}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="bg-blue-600 hover:bg-blue-700 text-white text-[13px] sm:text-[14px] font-semibold tracking-[0.04em] uppercase px-7 py-3.5 transition-colors"
                        >
                            {loadMoreLabel}
                        </motion.button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogSection;