export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface EnrollmentFormData {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: number;
  grade: string;
  service: string;
  message?: string;
}

export interface DonationData {
  amount: number;
  tierId?: string;
  donorName: string;
  donorEmail: string;
  message?: string;
}
