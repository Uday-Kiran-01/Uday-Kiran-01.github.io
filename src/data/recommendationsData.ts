export type Recommendation = {
  id: string;
  name: string;
  title: string;
  date: string;
  text: string[];
  avatarUrl?: string;
  linkedinUrl?: string;
};

const recommendations: Recommendation[] = [
  {
    id: 'snigdha-1',
    name: 'Snigdha Shree',
    title: 'Senior Salesforce Developer @Melonleaf Consulting',
    date: 'December 6, 2022',
    text: [
      'Uday is knowledgeable, motivated, and eager. Along with his exceptional skills, Uday exhibited a level of understanding for all work that we did as an intern. For whatever task or activity, he always offered his utmost effort. He provided his all, regardless of whether he was preoccupied with tests or college work.',
      'All the team members found him incredibly helpful, courteous, and cheerful. He always has a smile on his face. We were given several tasks to complete as a team. He is a breeze to collaborate with. I would be happy to work with you again if the opportunity arises in the future.'
    ],
    avatarUrl: 'https://ui-avatars.com/api/?name=Snigdha+Shree&background=e50914&color=fff&size=120&bold=true',
    linkedinUrl: 'https://www.linkedin.com/in/snigdha-shree/'
  },
  {
    id: 'snigdha-2',
    name: 'Snigdha Shree',
    title: 'Senior Salesforce Developer @Melonleaf Consulting',
    date: 'December 6, 2022',
    text: [
      'Uday is knowledgeable, motivated, and eager. Along with his exceptional skills, Uday exhibited a level of understanding for all work that we did as an intern. For whatever task or activity, he always offered his utmost effort. He provided his all, regardless of whether he was preoccupied with tests or college work.',
      'All the team members found him incredibly helpful, courteous, and cheerful. He always has a smile on his face. We were given several tasks to complete as a team. He is a breeze to collaborate with. I would be happy to work with you again if the opportunity arises in the future.'
    ],
    avatarUrl: 'https://ui-avatars.com/api/?name=Snigdha+Shree&background=e50914&color=fff&size=120&bold=true',
    linkedinUrl: 'https://www.linkedin.com/in/snigdha-shree/'
  },
  {
    id: 'snigdha-3',
    name: 'Snigdha Shree',
    title: 'Senior Salesforce Developer @Melonleaf Consulting',
    date: 'December 6, 2022',
    text: [
      'Uday is knowledgeable, motivated, and eager. Along with his exceptional skills, Uday exhibited a level of understanding for all work that we did as an intern. For whatever task or activity, he always offered his utmost effort. He provided his all, regardless of whether he was preoccupied with tests or college work.',
      'All the team members found him incredibly helpful, courteous, and cheerful. He always has a smile on his face. We were given several tasks to complete as a team. He is a breeze to collaborate with. I would be happy to work with you again if the opportunity arises in the future.'
    ],
    avatarUrl: 'https://ui-avatars.com/api/?name=Snigdha+Shree&background=e50914&color=fff&size=120&bold=true',
    linkedinUrl: 'https://www.linkedin.com/in/snigdha-shree/'
  }
];

export default recommendations;
