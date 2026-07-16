export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'svadbe' | 'proslave' | 'koncerti' | 'detalji';
  description: string;
}

export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  thumbnail: string;
  category: string;
  description?: string;
}

export interface Song {
  title: string;
  artist: string;
}

export interface RepertoireCategory {
  id: string;
  name: string;
  iconName: string; // Will map to a Lucide icon
  description: string;
  songs: Song[];
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string; // e.g. "Mladenci", "Slavljenik"
  event: string; // e.g. "Svadba, Zagreb"
  text: string;
  stars: number;
  date: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}
