'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white selection:bg-white/20">

            {/* Liquid Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: "linear"
                    }}
                    className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-gray-800 to-gray-600 rounded-full blur-[100px] opacity-30"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: "linear"
                    }}
                    className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-bl from-gray-700 to-gray-900 rounded-full blur-[120px] opacity-30"
                />
            </div>

            <div className="container relative z-10 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="mb-4 md:mb-6 text-sm md:text-2xl font-light tracking-widest text-gray-400 uppercase">
                        Spesialis Media Sosial & Kreatif
                    </h2>
                    <h1 className="mb-6 md:mb-8 text-4xl md:text-8xl font-bold tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
                        Mengangkat Brand Anda <br /> Melampaui Logika.
                    </h1>
                    <p className="max-w-2xl mx-auto mb-8 md:mb-12 text-base md:text-xl text-gray-400 font-light leading-relaxed">
                        Menciptakan pengalaman digital yang memadukan estetika dengan strategi.
                        Kami mengubah feeds menjadi portofolio dan reels menjadi sorotan.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => scrollToSection('portfolio')}
                            className="group relative px-8 py-4 text-black bg-white rounded-full overflow-hidden transition-transform hover:scale-105"
                        >
                            <span className="relative z-10 font-bold flex items-center gap-2">
                                Lihat Portofolio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <button
                            onClick={() => scrollToSection('services')}
                            className="px-8 py-4 text-white border border-white/20 rounded-full hover:bg-white/5 transition-colors"
                        >
                            Layanan Kami
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
