import { supabase } from '@/supabase/client';
import type { LeadForm } from '@/types/lead.types';

export async function insertLead(lead: LeadForm): Promise<{ id: string }> {
  const { data, error } = await supabase.from('leads').insert(lead).select('id').single();

  if (error) {
    throw error;
  }

  return data;
}
