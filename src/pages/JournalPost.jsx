import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { JOURNAL_POSTS } from '../data';
import { Icons } from '../components/Icons';

const JournalPost = () => {
    const { theme } = useTheme();
    const { id } = useParams();
    const post = JOURNAL_POSTS.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div className="min-h-screen pt-40 px-6 text-center">
                <h2 className="text-2xl font-display uppercase">Post not found</h2>
                <Link to="/" className="text-[#FF4D00] mt-4 inline-block">Return Home</Link>
            </div>
        );
    }

    return (
        <article className="pt-32 pb-24 px-6 md:px-12 container mx-auto fade-in">
            <style>{`
                .fade-in { animation: fadeIn 0.8s ease-out; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>

            <Link to="/#journal" className="inline-flex items-center gap-2 mb-12 text-[#FF4D00] font-bold uppercase tracking-widest text-xs md:text-sm hover:underline">
                <Icons.ArrowRight className="rotate-180" size={16} /> Back to Journal
            </Link>

            <header className="max-w-4xl mx-auto mb-16 text-center">
                <span className="text-[#FF4D00] font-bold uppercase tracking-widest block mb-6">{post.date}</span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase leading-none mb-8">{post.title}</h1>
                <div className="w-full aspect-video overflow-hidden rounded-sm relative">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>
            </header>

            <div className={`max-w-3xl mx-auto text-lg leading-loose space-y-6 ${theme.textMuted}`}>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className="max-w-3xl mx-auto mt-16 pt-16 border-t border-gray-800 flex justify-between items-center">
                <span className="font-display uppercase text-xl">Share this story</span>
                <div className="flex gap-4">
                    <Icons.Twitter className="cursor-pointer hover:text-[#FF4D00] transition-colors" />
                    <Icons.Instagram className="cursor-pointer hover:text-[#FF4D00] transition-colors" />
                </div>
            </div>
        </article>
    );
};
export default JournalPost;
