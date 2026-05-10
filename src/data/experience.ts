export interface ExperienceEntry {
  start: string;
  end: string | 'Present';
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
}

// Sorted newest first. Source-of-truth: cv.pdf
export const experience: ExperienceEntry[] = [
  {
    start: 'Jan 2025',
    end: 'Present',
    role: 'Founder & Software Engineer',
    company: 'Requset',
    companyUrl: 'https://www.requset.com',
    location: 'Remote',
  },
  {
    start: 'Mar 2025',
    end: 'Present',
    role: 'Software Engineer',
    company: 'HT Works',
    companyUrl: 'https://htworkslk.com',
    location: 'Colombo, Sri Lanka',
  },
  {
    start: 'Feb 2025',
    end: 'Feb 2026',
    role: 'Founding Engineer',
    company: 'Suno Analytics',
    companyUrl: 'https://sunoanalytics.com',
    location: 'San Francisco, CA (Remote)',
  },
  {
    start: 'Oct 2023',
    end: 'Mar 2025',
    role: 'Junior Software Engineer',
    company: 'HT Works',
    companyUrl: 'https://htworkslk.com',
    location: 'Colombo, Sri Lanka',
  },
  {
    start: 'Aug 2021',
    end: 'Aug 2022',
    role: 'Software Engineer Intern',
    company: 'HT Works',
    companyUrl: 'https://htworkslk.com',
    location: 'Colombo, Sri Lanka',
  },
  {
    start: 'Jan 2016',
    end: 'Present',
    role: 'Visual Designer (Freelance)',
    company: 'ElitePSD',
    companyUrl: 'https://x.com/hammvdh',
    location: 'Remote',
  },
];
