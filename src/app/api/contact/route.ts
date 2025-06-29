// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import { promises as fs } from 'fs';
import path from 'path';

export interface ContactFormData {
  type: 'investor' | 'position';
  name: string;
  surname: string;
  email: string;
  phone: string;
  submittedAt: string;
}

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
      submittedAt: new Date().toISOString(),
    };

    // Save to Excel file
    await saveToExcel(contactData);

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
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

async function saveToExcel(data: ContactFormData) {
  const dataDir = path.join(process.cwd(), 'data');
  const filePath = path.join(dataDir, 'contact-submissions.xlsx');

  try {
    // Ensure data directory exists
    await fs.mkdir(dataDir, { recursive: true });

    let workbook: XLSX.WorkBook;
    let worksheet: XLSX.WorkSheet;
    let existingData: ContactFormData[] = [];

    // Check if file exists and read existing data
    try {
      await fs.access(filePath);
      const fileBuffer = await fs.readFile(filePath);
      workbook = XLSX.read(fileBuffer, { type: 'buffer' });
      
      if (workbook.SheetNames.length > 0) {
        worksheet = workbook.Sheets[workbook.SheetNames[0]];
        existingData = XLSX.utils.sheet_to_json(worksheet) as ContactFormData[];
      }
    } catch (error) {
      // File doesn't exist, will create new one
      workbook = XLSX.utils.book_new();
    }

    // Add new data to existing data
    existingData.push(data);

    // Create new worksheet with all data
    const newWorksheet = XLSX.utils.json_to_sheet(existingData, {
      header: ['type', 'name', 'surname', 'email', 'phone', 'submittedAt']
    });

    // Set column widths for better readability
    newWorksheet['!cols'] = [
      { width: 12 }, // type
      { width: 15 }, // name
      { width: 15 }, // surname
      { width: 25 }, // email
      { width: 15 }, // phone
      { width: 20 }, // submittedAt
    ];

    // Add or replace the worksheet
    if (workbook.SheetNames.includes('Contact Submissions')) {
      workbook.Sheets['Contact Submissions'] = newWorksheet;
    } else {
      XLSX.utils.book_append_sheet(workbook, newWorksheet, 'Contact Submissions');
    }

    // Write the file
    const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
    await fs.writeFile(filePath, buffer);
    
    console.log(`Contact form data saved to ${filePath}`);
  } catch (error) {
    console.error('Error saving to Excel:', error);
    throw new Error('Failed to save contact form data');
  }
}