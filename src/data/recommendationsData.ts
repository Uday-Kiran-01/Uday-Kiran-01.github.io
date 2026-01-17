import chrisProfilePic from '../images/chris.jpg';

export type Recommendation = {
  id: string;
  name: string;
  title: string;
  date: string;
  text: string;
  avatarUrl?: string;
  linkedinUrl?: string;
};

const recommendations: Recommendation[] = [
  {
    id: 'chris-1',
    name: 'Snigdha Shree',
    title: 'Senior Salesforce Developer',
    date: '2023-08-15',
    text:
      "It is with great pleasure that I write this reference for Uday Kiran, who worked for us as a software developer at Kajima from June 2023. During their time with us, Uday demonstrated strong technical expertise, a passion for problem-solving, a willingness to learn, and a collaborative spirit that greatly contributed to our team's success.",
    avatarUrl: chrisProfilePic,
    linkedinUrl: 'https://www.linkedin.com/in/chris-smith-example/'
  },
  {
    id: 'snigdha-1',
    name: 'Snigdha Shree',
    title: 'Senior Salesforce Developer',
    date: '2022-12-06',
    text:
      'Uday is knowledgeable, motivated, and eager. Along with his exceptional skills, Uday exhibited a level of understanding for all work that we did as an Intern. For whatever task or activity, he always offered his utmost effort.',
    avatarUrl: 'https://i.pravatar.cc/120?img=32',
    linkedinUrl: 'https://www.linkedin.com/in/snigdha-shree/'
  },
  {
    id: 'placeholder-1',
    name: 'Alex Johnson',
    title: 'Product Manager',
    date: '2023-06-01',
    text:
      'Uday consistently delivered high-quality code while meeting project deadlines. Their proactive approach to finding innovative solutions set them apart.',
    avatarUrl: 'https://i.pravatar.cc/120?img=12',
    linkedinUrl: 'https://www.linkedin.com/in/alex-johnson-example/'
  }
];

export default recommendations;
