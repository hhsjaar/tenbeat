import { getPortfolioAssets } from '@/lib/portfolio-data';
import { CLIENT_INFO } from '@/lib/portfolio-constants';
import { GlassCard } from '@/components/ui/GlassCard';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return CLIENT_INFO.map((client) => ({
        slug: client.slug,
    }));
}

export default async function PortfolioPage({ params }: PageProps) {
    const { slug } = await params;

    // Validate slug
    const client = CLIENT_INFO.find(c => c.slug === slug);
    if (!client) {
        notFound();
    }

    const assetsData = await getPortfolioAssets();
    const images = assetsData.clients[slug] || [];

    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24">
            {/* Ambient Glow */}
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <Link href="/#portfolio" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={20} /> Back to Portfolio
                </Link>

                <div className="mb-12">
                    <span className="px-3 py-1 bg-white/10 text-white text-xs uppercase tracking-wider rounded backdrop-blur-md">
                        {client.category}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-4">{client.name}</h1>
                    <p className="text-xl text-gray-400">Full Visual Gallery</p>
                </div>

                {images.length > 0 ? (
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {images.map((img, idx) => (
                            <GlassCard key={idx} className="break-inside-avoid overflow-hidden group">
                                <div className="relative w-full">
                                    <Image
                                        src={img}
                                        alt={`${client.name} - ${idx + 1}`}
                                        width={800}
                                        height={1000} // Aspect ratio will be handled by auto height
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-gray-500">
                        No images found for this project.
                    </div>
                )}
            </div>
        </main>
    );
}
