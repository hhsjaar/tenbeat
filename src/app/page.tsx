import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { PortfolioFeeds } from '@/components/sections/PortfolioFeeds';
import { ReelsSpotlight } from '@/components/sections/ReelsSpotlight';
import { getPortfolioAssets } from '@/lib/portfolio-data';

export default async function Home() {
  const assets = await getPortfolioAssets();

  return (
    <main>
      <Hero />
      <Services />
      <PortfolioFeeds assets={assets.clients} />
      <ReelsSpotlight videos={assets.reels} />
    </main>
  );
}
