export interface EducationEntry {
  start: string;
  end: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  highlights?: string[];
}

// Source-of-truth: cv.pdf. Primary/secondary education intentionally excluded.
export const education: EducationEntry[] = [
  {
    start: '2019',
    end: '2023',
    degree: 'BSc (Hons) Computer Science',
    institution: 'University of Westminster',
    institutionUrl: 'https://www.westminster.ac.uk',
    location: 'London, UK',
    highlights: ['First Class Honours'],
  },
  {
    start: '2018',
    end: '2019',
    degree: 'Foundation Certificate',
    institution: 'IIT Campus',
    location: 'Colombo, Sri Lanka',
  },
];
