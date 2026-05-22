export type PageType = 'home' | 'employers' | 'employees' | 'contact';

export interface Testimonial {
  text: string;
  author: string;
  rating: number;
}

export interface Sector {
  icon: string;
  title: string;
  description: string;
}

export interface ContactFormInputs {
  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
  subject: 'Work Inquiry' | 'General Enquiry' | 'Register as Candidate' | 'Other';
  message: string;
}
