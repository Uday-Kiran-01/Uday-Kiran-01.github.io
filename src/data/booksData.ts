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
    title: "Building a Second Brain: A Proven Method to Organize Your Digital Life and Unlock Your Creative Potential",
    author: "Tiago Forte",
    imgSrc: '/books/second brain.jpg',
    description: "A proven method to organize your digital life and unlock your creative potential.",
    status: 'completed',
  },
  {
    title: "Goodbye Phone, Hello World: 65 Ways to Disconnect from Tech and Reconnect to Joy",
    author: "Paul Greenberg",
    imgSrc: '/books/goodbye phone.jpg',
    description: "65 ways to disconnect from tech and reconnect to joy.",
    status: 'completed',
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    imgSrc: '/books/Atomic Habits.jpg',
    description: "A practical guide to building good habits and breaking bad ones.",
    status: 'ongoing',
  },
  {
    title: "The Power of your subconscious mind",
    author: "Joseph Murphy",
    imgSrc: '/books/power of sub mind.jpg',
    description: "Unlock the power of your subconscious mind to achieve your goals.",
    status: 'ongoing',
  },
  {
    title: "The Complete Book of Yoga: Karma Yoga, Bhakti Yoga, Raja Yoga, Jnana Yoga",
    author: "Swami Vivekananda",
    imgSrc: '/books/yoga.jpg',
    description: "Complete guide to different paths of yoga by Swami Vivekananda.",
    status: 'ongoing',
  },
  {
    title: "Build, Don't Talk: Things You Wish You Were Taught in School",
    author: "Raj Shamani",
    imgSrc: '/books/build.png',
    description: "Practical lessons you wish you were taught in school.",
    status: 'ongoing',
  },
  {
    title: "What Got You Here Won't Get You There",
    author: "Marshall Goldsmith",
    imgSrc: '/books/what got you.jpg',
    description: "How successful people become even more successful.",
    status: 'ongoing',
  },
  {
    title: "Master Your Emotions: A Practical Guide to Overcome Negativity and Better Manage Your Feelings",
    author: "Thibaut Meurisse",
    imgSrc: '/books/master your emotions.jpg',
    description: "A practical guide to overcome negativity and better manage your feelings.",
    status: 'ongoing',
  },
];
