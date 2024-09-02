import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';

interface Word {
  Word: any;
  Meaning: any;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const number = parseInt(searchParams.get('number') || '10', 10);

  const filePath = path.join(process.cwd(), 'public', 'english.csv');

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const parseCSV = () => new Promise<Word[]>((resolve, reject) => {
      parse(data, { columns: true }, (err, records: any[]) => {
        if (err) {
          return reject(err);
        }
        const words: Word[] = records.map((row) => ({
          Word: row['Word'],
          Meaning: row['Meaning'],
        }));
        console.log(words)
        resolve(words);
      });
    });

    let words = await parseCSV();

    // Randomly shuffle the words and select the required number
    words = words.sort(() => 0.5 - Math.random()).slice(0, number);

    return NextResponse.json(words);
  } catch (err) {
    console.error('Error:', err);
    return NextResponse.json({ error: 'Failed to process CSV file' }, { status: 500 });
  }
}

