'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { PenTool, Image, Type, Video } from 'lucide-react';

const services = [
    {
        icon: <PenTool size={32} />,
        title: "Copywriting",
        description: "Narasi memikat yang mengonversi. Dari caption Instagram hingga penceritaan brand.",
        tags: ["Storytelling", "SEO", "Engagement"]
    },
    {
        icon: <Image size={32} />,
        title: "Desain Grafis",
        description: "Identitas visual yang berbicara lebih lantang dari kata-kata. Pamflet, poster, dan feeds.",
        tags: ["Pamphlets", "Posters", "Feeds"]
    },
    {
        icon: <Type size={32} />,
        title: "Tipografi & Logo",
        description: "Jenis huruf yang khas dan tanda logo yang mendefinisikan esensi brand Anda.",
        tags: ["Logomark", "Wordmark", "Typeface"]
    },
    {
        icon: <Video size={32} />,
        title: "Reels & Video",
        description: "Konten video dinamis yang dirancang untuk menghentikan scroll dan menarik perhatian.",
        tags: ["Editing", "Motion", "Reels"]
    }
];

import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        }
    }
};

export function Services() {
    return (
        <section id="services" className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="mb-10 md:mb-16 text-center"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">Keahlian Kami</h2>
                    <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
                        Solusi kreatif komprehensif untuk lanskap digital modern.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={itemVariants} className="h-full">
                            <GlassCard className="p-5 md:p-8 hover:bg-white/10 transition-colors group cursor-default h-full flex flex-col justify-start border border-white/5 hover:border-white/20">
                                <div className="mb-3 md:mb-6 text-gray-400 group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{service.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed mb-4 md:mb-6 flex-grow">
                                    {service.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {service.tags.map((tag) => (
                                        <span key={tag} className="text-[10px] md:text-xs px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
