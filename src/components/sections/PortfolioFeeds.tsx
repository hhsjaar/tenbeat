'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { Instagram, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CLIENT_INFO } from '@/lib/portfolio-constants';
import { motion } from 'framer-motion';

interface PortfolioFeedsProps {
    assets?: Record<string, string[]>;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 20,
            duration: 0.8
        }
    }
};

export function PortfolioFeeds({ assets = {} }: PortfolioFeedsProps) {
    const scrollToPortfolio = () => {
        const element = document.getElementById('portfolio');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="portfolio" className="py-24 bg-black relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Sorotan Portofolio</h2>
                        <p className="text-gray-400 max-w-xl">
                            Estetika media sosial pilihan. Kami tidak hanya memposting konten; kami membangun aset digital.
                        </p>
                    </motion.div>
                    <motion.button
                        initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-white border-b border-white hover:opacity-70 transition-opacity pb-1"
                        onClick={scrollToPortfolio}
                    >
                        Lihat Semua Proyek
                    </motion.button>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8"
                >
                    {CLIENT_INFO.map((client, index) => {
                        const clientAssets = assets[client.slug] || [];

                        return (
                            <motion.div key={index} variants={itemVariants}>
                                <GlassCard className="group flex flex-col justify-end p-0 cursor-pointer border border-white/10 hover:border-white/40 transition-all duration-700 overflow-hidden relative shadow-[0_0_0_1px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                                    {/* Aspect Ratio Container ensuring square or taller feel */}
                                    <div className="relative aspect-[3/4] w-full">
                                        {/* Image Carousel */}
                                        <div className="absolute inset-0 z-0 bg-gray-900">
                                            {clientAssets.length > 0 ? (
                                                <div className="flex overflow-x-auto w-full h-full snap-x snap-mandatory scrollbar-hide">
                                                    {clientAssets.map((asset, i) => (
                                                        <div key={i} className="flex-shrink-0 w-full h-full relative snap-center">
                                                            <Link href={`/portfolio/${client.slug}`} className="block w-full h-full relative">
                                                                <Image
                                                                    src={asset}
                                                                    alt={`${client.name} - ${i + 1}`}
                                                                    fill
                                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                                />
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-gray-700 text-sm">Tidak Ada Gambar</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 pointer-events-none z-10" />

                                        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-wider rounded-full">
                                                    {client.category}
                                                </span>
                                                {clientAssets.length > 1 && (
                                                    <span className="px-3 py-1 bg-black/80 text-gray-300 text-[10px] rounded-full backdrop-blur-md border border-white/20">
                                                        {clientAssets.length} slides
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                                                <Link href={`/portfolio/${client.slug}`}>
                                                    {client.name}
                                                </Link>
                                            </h3>

                                            <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                                <Link href={`/portfolio/${client.slug}`} className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors mt-4 mb-2">
                                                    Lihat Selengkapnya <ArrowUpRight size={14} />
                                                </Link>
                                            </div>

                                            <div className="flex items-center gap-2 mt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                                                <Instagram size={16} className="text-white" />
                                                <a
                                                    href={client.instagram}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-gray-300 hover:text-white transition-colors hover:underline"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    {client.handle || client.name}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
