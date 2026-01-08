'use client';

import { useRef, useEffect } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Play } from 'lucide-react';

interface ReelsSpotlightProps {
    videos?: string[];
}

export function ReelsSpotlight({ videos = [] }: ReelsSpotlightProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    // Use the first video if available
    const videoSrc = videos.length > 0 ? videos[0] : null;

    useEffect(() => {
        // Simple intersection observer to play video only when visible
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoRef.current?.play().catch(() => { });
                    } else {
                        videoRef.current?.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="reels" className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Side */}
                <div className="relative z-10 order-2 lg:order-1">
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                        Motion <br /> That Moves.
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-md">
                        Short-form video content is the new currency of attention. We craft reels that entertain, educate, and convert.
                    </p>

                    <div className="flex flex-col gap-4">
                        {['Scripting & Concept', 'Professional Shooting', 'Dynamic Editing', 'Sound Design'].map((item, i) => (
                            <GlassCard key={i} intensity="low" className="px-6 py-4 flex items-center justify-between group cursor-pointer hover:bg-white/10">
                                <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                <Play size={16} className="text-gray-500 group-hover:text-white fill-current transition-colors opacity-0 group-hover:opacity-100" />
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* Video Side */}
                <div className="relative order-1 lg:order-2 flex justify-center w-full">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />

                    {/* Video Slider Container */}
                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 w-full max-w-2xl px-4 scrollbar-hide">
                        {videos.length > 0 ? (
                            videos.map((video, idx) => (
                                <div key={idx} className="relative flex-shrink-0 w-[300px] md:w-[350px] aspect-[9/16] rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl snap-center transition-transform duration-500 hover:scale-[1.02]">
                                    <video
                                        className="w-full h-full object-cover bg-gray-900"
                                        loop
                                        muted
                                        playsInline
                                        controls
                                    >
                                        <source src={video} type="video/mp4" />
                                        <div className="flex items-center justify-center h-full text-white text-center p-4">
                                            Video not supported
                                        </div>
                                    </video>

                                    {/* Overlay Info */}
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs text-white">
                                            {idx + 1}/{videos.length}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />
                                    <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-gray-700" />
                                            <span className="text-white text-sm font-semibold">Tenbeat Reel</span>
                                        </div>
                                        <p className="text-gray-300 text-xs">Capturing moments, creating legacy.</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="relative w-[300px] md:w-[350px] aspect-[9/16] rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl bg-gray-900 flex items-center justify-center text-white text-center p-4">
                                No videos found
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
}
