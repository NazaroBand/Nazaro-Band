import { GalleryItem, VideoItem, RepertoireCategory, ReviewItem, StatItem } from './types';

// @ts-ignore
import g1 from './assets/images/regenerated_image_1784138118677.jpg';
// @ts-ignore
import g2 from './assets/images/regenerated_image_1784138119705.jpg';
// @ts-ignore
import g3 from './assets/images/regenerated_image_1784138121044.jpg';
// @ts-ignore
import g4 from './assets/images/regenerated_image_1784138122341.jpg';
// @ts-ignore
import g5 from './assets/images/regenerated_image_1784138122842.jpg';
// @ts-ignore
import g6 from './assets/images/regenerated_image_1784138123363.jpg';
// @ts-ignore
import g7 from './assets/images/regenerated_image_1784138123964.jpg';
// @ts-ignore
import g8 from './assets/images/regenerated_image_1784138124727.jpg';

export const STATS_DATA: StatItem[] = [
  { id: '1', value: 890, suffix: '+', label: 'odrađenih nastupa' },
  { id: '2', value: 100, suffix: '%', label: 'zadovoljnih mladenaca' },
  { id: '3', value: 10, suffix: '+', label: 'godina iskustva' }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    url: g1,
    title: 'Nazaro Band Uživo',
    category: 'svadbe',
    description: 'Vrhunska atmosfera na plesnom podiju s našom rasvjetom.'
  },
  {
    id: 'g2',
    url: g2,
    title: 'Prvi Ples',
    category: 'svadbe',
    description: 'Čarobni trenuci mladog bračnog para uz romantičnu baladu.'
  },
  {
    id: 'g3',
    url: g3,
    title: 'Svadbena Svečanost',
    category: 'svadbe',
    description: 'Elegancija i luksuz na proslavi sretnih mladenaca.'
  },
  {
    id: 'g4',
    url: g4,
    title: 'Gitaristička Solaža',
    category: 'proslave',
    description: 'Energični nastupi naših instrumentalista.'
  },
  {
    id: 'g5',
    url: g5,
    title: 'Klavijature i Sinteza',
    category: 'koncerti',
    description: 'Moderna oprema i studijski zvuk na svakom nastupu.'
  },
  {
    id: 'g6',
    url: g6,
    title: 'Korporativni Event',
    category: 'proslave',
    description: 'Party atmosfera za poslovne partnere i zaposlenike.'
  },
  {
    id: 'g7',
    url: g7,
    title: 'Stage & Light Show',
    category: 'koncerti',
    description: 'Kompletna profesionalna koncertna rasvjeta i ozvučenje.'
  },
  {
    id: 'g8',
    url: g8,
    title: 'Zlatni Detalji',
    category: 'detalji',
    description: 'Svaki detalj planiran je kako bi postigao premium ugođaj.'
  }
];

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: 'v1',
    youtubeId: '6sBoemTvEb0',
    title: 'Zabava Staro Petrovo Selo',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    category: 'Svadba'
  },
  {
    id: 'v2',
    youtubeId: 'ZlCNRttb5iU',
    title: 'PRVI PLES NAŠIH MLADENACA',
    thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
    category: 'Uživo'
  },
  {
    id: 'v3',
    youtubeId: 'EVLjZrq_MvE',
    title: 'ATMOSFERA IZ SVATOVA',
    thumbnail: 'https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=800&auto=format&fit=crop',
    category: 'Prvi Ples'
  }
];

export const REPERTOIRE_DATA: RepertoireCategory[] = [
  {
    id: 'rep1',
    name: 'Zabavna & Domaća',
    iconName: 'Music',
    description: 'Najdraži domaći klasici i svadbene himne koje pjevaju svi gosti u glas.',
    songs: [
      { title: 'Nije u šoldima sve', artist: 'Mladen Grdović' },
      { title: 'Večeras je naša fešta', artist: 'Tomislav Ivčić' },
      { title: 'Samo je ljubav tajna dvaju svjetova', artist: 'Thompson' },
      { title: 'Zora je', artist: 'Neda Ukraden' },
      { title: 'Ivanova korita', artist: 'Merima Njegomir' },
      { title: 'Moja štikla', artist: 'Severina' },
      { title: 'Rane', artist: 'Anastasija' },
      { title: 'Tek je 12 sati', artist: 'E.T.' }
    ]
  },
  {
    id: 'rep2',
    name: 'Pop Glazba',
    iconName: 'Sparkles',
    description: 'Moderni i bezvremenski pop hitovi, savršeni za elegantan ugođaj i ples.',
    songs: [
      { title: 'Cesarica', artist: 'Oliver Dragojević' },
      { title: 'Lutka', artist: 'S.A.R.S.' },
      { title: 'Moje zlato', artist: 'Petar Grašo' },
      { title: 'Ako te pitaju', artist: 'Petar Grašo' },
      { title: 'Meni trebaš ti', artist: 'Oliver Dragojević' },
      { title: 'Dani i godine', artist: 'Nina Badrić' },
      { title: 'Nek ti bude ljubav sva', artist: 'Tony Cetinski' },
      { title: 'Tempera', artist: 'Gibonni' }
    ]
  },
  {
    id: 'rep3',
    name: 'Rock Klasici',
    iconName: 'Flame',
    description: 'Žestoki ritmovi i gitarski riffovi koji podižu energiju i pokreću cijelu dvoranu.',
    songs: [
      { title: 'Lutka za bal', artist: 'Parni Valjak' },
      { title: 'Motori', artist: 'Divlje Jagode' },
      { title: 'Ugasi me', artist: 'Parni Valjak' },
      { title: 'Krivo je more', artist: 'Divlje Jagode' },
      { title: 'Tišina', artist: 'Bajaga' },
      { title: 'Mi plesmo', artist: 'Prljavo Kazalište' },
      { title: 'Lupi petama', artist: 'Prljavo Kazalište' },
      { title: 'Zenica blues', artist: 'Zabranjeno Pušenje' }
    ]
  },
  {
    id: 'rep4',
    name: 'Ex-Yu Retro',
    iconName: 'Disc',
    description: 'Zlatni hitovi bivših prostora koji uvijek donose val nostalgije i vrhunske emocije.',
    songs: [
      { title: 'Za Ljiljanu', artist: 'Toma Zdravković' },
      { title: 'Nesanica', artist: 'Toše Proeski' },
      { title: 'Dizandor', artist: 'Ex-Yu Retro' },
      { title: 'Donesi divlje mirise', artist: 'Hari Mata Hari' },
      { title: 'Kolačići', artist: 'Marina Perazić' },
      { title: 'Frida', artist: 'Psihomodo Pop' },
      { title: 'Jovano Jovanke', artist: 'Tradicionalna' },
      { title: 'Bježi kišo s prozora', artist: 'Crvena Jabuka' }
    ]
  },
  {
    id: 'rep5',
    name: 'Tamburaške Pjesme',
    iconName: 'Heart',
    description: 'Tradicionalne note, tamburaški duh i slavonska duša za najsvečanije trenutke.',
    songs: [
      { title: 'Ne dirajte mi ravnicu', artist: 'Miroslav Škoro' },
      { title: 'Sve je ona meni', artist: 'Slavonske Lole' },
      { title: 'Moja Juliska', artist: 'Miroslav Škoro' },
      { title: 'Otac', artist: 'Zlatni Dukati' },
      { title: 'Tena', artist: 'Zlatni Dukati' },
      { title: 'Džentlmeni', artist: 'Tamburaški Sastav' },
      { title: 'Prijatelju moj', artist: 'Mejaši' },
      { title: 'Đurđevdan', artist: 'Bijelo Dugme' }
    ]
  },
  {
    id: 'rep6',
    name: 'Strani Hitovi',
    iconName: 'Globe',
    description: 'Svjetski hitovi, evergreen plesni standardi i najtraženije strane klupske pjesme.',
    songs: [
      { title: 'Perfect', artist: 'Ed Sheeran' },
      { title: 'Uptown Funk', artist: 'Bruno Mars' },
      { title: 'I Wanna Dance With Somebody', artist: 'Whitney Houston' },
      { title: 'Blinding Lights', artist: 'The Weeknd' },
      { title: 'Can\'t Help Falling In Love', artist: 'Elvis Presley' },
      { title: 'Dancing Queen', artist: 'ABBA' },
      { title: 'Simply The Best', artist: 'Tina Turner' },
      { title: 'Billie Jean', artist: 'Michael Jackson' }
    ]
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'r1',
    author: 'Ana & Deni',
    role: 'Mladenci',
    event: 'Svadbena svečanost',
    text: 'Definitivno najbolji svirači!!! Hvala vam na ludoj i nezaboravnoj noći.',
    stars: 5,
    date: '2025.'
  },
  {
    id: 'r2',
    author: 'Ana & Denis',
    role: 'Mladenci',
    event: 'Svadbena svečanost',
    text: 'Dečki, još jednom da se zahvalimo, bili ste SAVREŠENI!!! Dečki i cura ;) Ispitivali su kako se zovete, jer ste razvalili!!!',
    stars: 5,
    date: '2025.'
  },
  {
    id: 'r3',
    author: 'Helena & Tomislav',
    role: 'Mladenci',
    event: 'Svadbena svečanost',
    text: 'Evo nakon svega odrađenoga možemo samo reći da bolji svatovski bend nismo vidjeli nigdje!!!',
    stars: 5,
    date: '2026.'
  }
];
