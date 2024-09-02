import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';

interface Name {
  Language: string;
  // Add other fields as necessary
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country');
  const number = parseInt(searchParams.get('number') || '10', 10);

  const filePath = path.join(process.cwd(), 'public', 'names.csv');

  try {
    const data = fs.readFileSync(filePath, 'utf8');

    const parseCSV = () => new Promise<Name[]>((resolve, reject) => {
      parse(data, { columns: true }, (err, records: Name[]) => {
        if (err) {
          return reject(err);
        }
        resolve(records);
      });
    });

    let words = await parseCSV();

    // Filter by type and gender if provided
    if (country && country !== 'any') {
      words = words.filter(word => word.Language.toLowerCase() === country);
    }
    

    // Handle random selection
      words = words.sort(() => 0.5 - Math.random()).slice(0, number);
 

    return NextResponse.json(words);
  } catch (err) {
    console.error('Error:', err); // Log errors
    return NextResponse.json({ error: 'Failed to process CSV file' }, { status: 500 });
  }
}
