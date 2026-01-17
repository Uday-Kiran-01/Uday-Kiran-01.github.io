export type Book = {
  title: string;
  author: string;
  imgSrc: string;
  description: string;
  status?: 'completed' | 'ongoing';
};

// Source list (copied from other branch). Set `status` to split into sections; edit as needed.
export const books: Book[] = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    imgSrc: '/static/media/atomic_habits.jpg',
    description: "A practical guide to building good habits and breaking bad ones.",
    status: 'completed',
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    imgSrc: '/static/media/rich_dad_poor_dad.jpg',
    description: "An eye-opener on wealth, assets, and financial literacy.",
    status: 'completed',
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    imgSrc: '/static/media/alchemist.jpg',
    description: "A magical journey of following one's dreams.",
    status: 'completed',
  },
  {
    title: "Eat That Frog",
    author: "Brian Tracy",
    imgSrc: '/static/media/eat_that_frog.jpg',
    description: "A motivational book on overcoming procrastination.",
    status: 'completed',
  },
  {
    title: "Vijayaniki Aidhu Metlu",
    author: "Yandamoori Veerendranath",
    imgSrc: '/static/media/vijayaniki_aidu_metlu.jpg',
    description: "An inspirational Telugu book for personal growth.",
    status: 'ongoing',
  },
  {
    title: "Vennelo Adapilla",
    author: "Yandamoori Veerendranath",
    imgSrc: '/static/media/vennelo_adapilla.jpg',
    description: "A classic Telugu romantic novel that touches the heart.",
    status: 'ongoing',
  },
];
