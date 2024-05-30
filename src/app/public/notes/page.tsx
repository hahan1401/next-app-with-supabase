import { createClient } from '@/utils/supabase/server';
import React from 'react'

const Notes = async () => {
  const supabase = createClient();
    const notes = await supabase.from("notes").select();
    console.log('notes=========', notes);
  return (
    <div>Notes</div>
  )
}

export default Notes