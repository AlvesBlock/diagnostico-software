export interface LeadForm {
  name: string;
  email: string;
  whatsapp: string;
  company: string;
}

export interface LeadRecord extends LeadForm {
  id: string;
  created_at: string;
}
