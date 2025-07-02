// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export interface ContactFormData {
  type: 'investor' | 'position';
  name: string;
  surname: string;
  email: string;
  phone: string;
  submitted_at?: string; // Note: using snake_case for database column
}

// Initialize Supabase client
const supabaseUrl = 'https://kbfmgbdqtyiwsrgisxdw.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!; // You'll need to add this to your .env file

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, name, surname, email, phone } = body;

    // Validate required fields
    if (!type || !name || !surname || !email || !phone) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone format (exactly 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Phone number must be exactly 10 digits' },
        { status: 400 }
      );
    }

    // Validate type
    if (!['investor', 'position'].includes(type)) {
      return NextResponse.json(
        { error: 'Invalid submission type' },
        { status: 400 }
      );
    }

    const contactData: ContactFormData = {
      type,
      name,
      surname,
      email,
      phone,
      submitted_at: new Date().toISOString(),
    };

    // Save to Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([contactData])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save contact form data' },
        { status: 500 }
      );
    }

    console.log('Contact form data saved to Supabase:', data);

    return NextResponse.json(
      { message: 'Contact form submitted successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}