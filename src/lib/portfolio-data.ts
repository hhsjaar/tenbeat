import fs from 'fs';
import path from 'path';

export interface PortfolioAssets {
  clients: Record<string, string[]>;
  reels: string[];
}

const FOLDER_MAPPING: Record<string, string> = {
  'burjolevelup': 'burjolevelup',
  'burjoibukota': 'burjoibukota',
  'warmindo88': 'warmindo88',
  'pray-semarang': 'pray-semarang',
  'd-sagara': 'd-sagara',
  'purwakawan': 'purwakawan',
  'ceritakancoffee': 'ceritakancoffee',
  'reels-spotlight': 'reels-spotlight',
};

// CLIENT_INFO moved to portfolio-constants.ts

export async function getPortfolioAssets(): Promise<PortfolioAssets> {
  const publicDir = path.join(process.cwd(), 'public');
  const result: PortfolioAssets = {
    clients: {},
    reels: [],
  };

  try {
    const entries = await fs.promises.readdir(publicDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const folderName = entry.name;
        const slug = FOLDER_MAPPING[folderName];

        if (slug) {
          const folderPath = path.join(publicDir, folderName);
          const files = await fs.promises.readdir(folderPath);

          // Filter for likely media files
          const mediaFiles = files
            .filter(file => /\.(jpg|jpeg|png|gif|svg|webp|mp4|mov)$/i.test(file))
            .filter(file => !file.startsWith('.')) // Ignore hidden files like .DS_Store
            .map(file => {
              // URL encode the folder name to handle spaces and special chars
              const encodedFolder = encodeURIComponent(folderName);
              return `/${encodedFolder}/${file}`;
            });

          if (slug === 'reels-spotlight') {
            result.reels = mediaFiles;
          } else {
            result.clients[slug] = mediaFiles;
          }
        }
      }
    }
  } catch (error) {
    console.error('Error reading portfolio assets:', error);
  }

  return result;
}
