'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { Instagram, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
    return (
        <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="col-span-1 md:col-span-2"
                    >
                        <h2 className="text-3xl font-bold mb-6">TENBEAT.</h2>
                        <p className="text-gray-400 max-w-sm mb-8">
                            Mengangkat brand melalui manajemen media sosial strategis dan arahan kreatif kelas atas.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="mailto:royaryaanugrah@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <Mail size={18} />
                            </a>
                            <a href="https://wa.me/6281932228708" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <Phone size={18} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-lg font-bold mb-6">Layanan</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                                <ArrowUpRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                Manajemen Sosial
                            </li>
                            <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                                <ArrowUpRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                Strategi Kreatif
                            </li>
                            <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                                <ArrowUpRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                Produksi Konten
                            </li>
                            <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                                <ArrowUpRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                Branding
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-lg font-bold mb-6">Hubungi Kami</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li>
                                <a href="mailto:royaryaanugrah@gmail.com" className="hover:text-white transition-colors">
                                    royaryaanugrah@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/6281932228708" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    +62 819 3222 8708
                                </a>
                            </li>
                            <li>Semarang, Indonesia</li>
                        </ul>
                    </motion.div>
                </div>

                <GlassCard intensity="low" className="py-8 px-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Tenbeat. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <span className="hover:text-white cursor-pointer">Kebijakan Privasi</span>
                        <span className="hover:text-white cursor-pointer">Syarat & Ketentuan</span>
                    </div>
                </GlassCard>
            </div>
        </footer>
    );
}
