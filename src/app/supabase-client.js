"use client";

// Mock Supabase client to avoid build issues
export const supabase = {
  auth: {
    signUp: async ({ email, password }) => {
      console.log('Mock signup:', { email, password });
      return { data: { user: { email } }, error: null };
    },
    signIn: async ({ email, password }) => {
      console.log('Mock signin:', { email, password });
      return { data: { user: { email } }, error: null };
    }
  }
};
