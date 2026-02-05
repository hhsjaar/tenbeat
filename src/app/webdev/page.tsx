import { getPortfolioAssets } from '@/lib/portfolio-data';
import { CLIENT_INFO } from '@/lib/portfolio-constants';
import { GlassCard } from '@/components/ui/GlassCard';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';

export const metadata = {
    title: 'Web Development | Tenbeat',
    description: 'Our curated selection of high-performance web applications and digital platforms.',
};

// Tech Logo Icons Component (Monochrome SVGs)
const TechIcon = ({ name }: { name: string }) => {
    const icons: Record<string, React.ReactNode> = {
        "Next.js": (
            <svg viewBox="0 0 128 128" fill="currentColor" className="w-6 h-6">
                <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.4v33.2h-8.1V40.1h8.1l43.2 56.4c5.1-8.9 8.1-19.3 8.1-32.5 0-35.3-28.7-64-64-64zm32.8 40.1v23.2L55.7 12.1C58.4 12 61.2 12 64 12c28.7 0 52 23.3 52 52 0 8.3-2 15.9-5.3 22.8L96.8 40.1z" />
            </svg>
        ),
        "Tailwind CSS": (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C15.114 13.382 13.753 12 10.778 12h-.777z" />
            </svg>
        ),
        "Supabase": (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 24c-.183 0-.365-.035-.537-.105l-8.62-3.522c-.62-.253-1.01-.84-.972-1.49l.394-6.626c.01-.168.083-.326.205-.44l9.244-8.618c.24-.225.603-.264.887-.096l8.892 5.26c.553.327.843.96.72 1.574l-1.35 6.784c-.035.176-.135.334-.282.443L12.55 23.868c-.164.123-.362.188-.55.188zm-7.663-5.597l7.663 3.13 8.356-6.264.673-3.375-7.664-4.536-7.394 6.896-.3 5.045c-.01.168.03.336.115.48.087.143.218.253.373.315l-.223-1.691z" />
            </svg>
        ),
        "MongoDB": (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.193 9.555c-.215-3.951-2.924-7.468-4.148-9.001a.363.363 0 0 0-.645.039c-1.127 2.053-2.618 5.485-2.204 9.387.601 5.673 4.288 8.441 4.288 8.441a.3.3 0 0 0 .194.045c.421-.061 2.373-1.254 2.515-8.911zm-4.329 11.233c.09.431.116.634.116.634.027.112.502 2.578.483 2.578-.01.173-.131.196-.282.029l-3.217-3.56c-.012-.012-.116-.296-.039-.427 1.341-2.282 2.939-.413 2.939.746z" />
            </svg>
        ),
        "PostgreSQL": (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M4.321 0c-.234-.143-.45.021-.555.282-.105.26-.06.721.21 1.05.27.33.645.6 1.05.781.405.181 1.035.42 1.501.555.465.135 1.05-.27 1.05-.9a1.763 1.763 0 0 0-.45-1.2c-.315-.375-.72-.51-.9-.57zm12.33 3.39c-1.23-.93-3.03-1.29-4.83-1.29s-3.6.36-4.83 1.29c-.84.63-1.08 1.47-1.11 2.4-.42 2.76 2.01 4.74 3.75 5.58 3.51 1.71 7.35.48 8.64-2.19.45-.96.39-2.31-.06-3.33z" />
            </svg>
        ),
        "Prisma ORM": (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 0L2.8 5.3v10.7L12 24l9.2-8V5.3L12 0zm7.1 14.7L12 21.1l-7.1-6.4V6.4L12 1.4l7.1 5v8.3z" />
            </svg>
        ),
        "Clerk": (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0 16c-3.314 0-6-1.79-6-4 0-1.105.895-2 2-2h8c1.105 0 2 .895 2 2 0 2.21-2.686 4-6 4z" />
            </svg>
        ),
        "Midtrans": (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M1 4h22v16H1V4zm2 2v2h18V6H3zm0 4v8h18v-8H3zm3 2h4v4H6v-4z" />
            </svg>
        ),
        "Vercel": (
            <svg viewBox="0 0 128 128" fill="currentColor" className="w-6 h-6">
                <path d="M64 0L128 111H0L64 0Z" />
            </svg>
        ),
    };

    return icons[name] || <span className="text-[10px]">{name}</span>;
};

// Simple Browser Frame Component
const BrowserFrame = ({ children }: { children: React.ReactNode }) => (
    <div className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl transition-all duration-700 group-hover:shadow-white/5">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-white/[0.01]">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
        </div>
        <div className="relative aspect-[16/10] overflow-hidden">
            {children}
        </div>
    </div>
);

const TECH_ICONS = [
    "Next.js", "Tailwind CSS", "Supabase", "MongoDB", "PostgreSQL",
    "Prisma ORM", "Clerk", "Midtrans", "Vercel"
];

export default async function WebDevPage() {
    const assetsData = await getPortfolioAssets();

    // Filter only web development related projects
    const webProjects = CLIENT_INFO.filter(c => ['Government', 'Event', 'Agency', 'App'].includes(c.category));

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-white/30">
            {/* Minimalist Header */}
            <div className="pt-32 pb-16 px-6 container mx-auto text-center">
                <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter mb-10">
                    Web Development
                </h1>



                <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                    Crafting digital experiences with precision, performance, and purpose.
                </p>
            </div>
            {/* Tech Stack Icons below title */}
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 mb-16 max-w-5xl mx-auto opacity-50 hover:opacity-100 transition-opacity duration-500">
                {TECH_ICONS.map(tech => (
                    <div key={tech} className="flex flex-col items-center gap-2">
                        <TechIcon name={tech} />
                        <span className="text-[9px] uppercase tracking-widest text-gray-500">{tech}</span>
                    </div>
                ))}
            </div>

            {/* Preview Gallery - Grid of all screenshots */}
            <div className="container mx-auto px-6 mb-32">

            </div>

            <div className="container mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 gap-32">
                    {webProjects.map((client, index) => {
                        const thumbnail = client.image || assetsData.clients[client.slug]?.[0];
                        const isEven = index % 2 === 0;

                        return (
                            <section key={client.slug} className="group">
                                <div className={`flex flex-col lg:flex-row gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                                    {/* Image Section with Frame */}
                                    <div className="w-full lg:w-3/5">
                                        <BrowserFrame>
                                            {thumbnail ? (
                                                <Image
                                                    src={thumbnail}
                                                    alt={client.name}
                                                    fill
                                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                                    sizes="(max-width: 768px) 100vw, 60vw"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-mono">
                                                    NO PREVIEW
                                                </div>
                                            )}
                                            {/* Subtle overlay */}
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                        </BrowserFrame>
                                    </div>

                                    {/* Content Section */}
                                    <div className="w-full lg:w-2/5 space-y-8">
                                        <div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-medium border border-white/20 rounded-full text-gray-300">
                                                    {client.category}
                                                </span>
                                            </div>
                                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                                                {client.name}
                                            </h2>
                                            <p className="text-gray-400 leading-relaxed text-lg font-light">
                                                {client.description}
                                            </p>
                                        </div>

                                        {/* CTA Button */}
                                        {client.url && (
                                            <div className="pt-4">
                                                <a
                                                    href={client.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 group/btn"
                                                >
                                                    <span className="text-white font-medium text-lg border-b border-white/30 pb-0.5 group-hover/btn:border-white transition-all">
                                                        View Details
                                                    </span>
                                                    <ArrowRight size={18} className="translate-x-0 group-hover/btn:translate-x-2 transition-transform duration-300" />
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
