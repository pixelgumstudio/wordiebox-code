import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';

interface CountryState {
  country: string;
  states: string[];
}

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'states.csv');
  
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    
    const parseCSV = () => new Promise<CountryState[]>((resolve, reject) => {
      parse(data, { columns: true }, (err, records: any[]) => {
        if (err) {
          return reject(err);
        }

        const countriesStates: { [key: string]: string[] } = {};
        
        records.forEach(row => {
          const country = row['country_name'];
          const state = row['name'];
          
          if (country in countriesStates) {
            countriesStates[country].push(state);
          } else {
            countriesStates[country] = [state];
          }
        });

        const result: CountryState[] = Object.entries(countriesStates).map(([country, states]) => ({
          country,
          states
        }));

        resolve(result);
      });
    });

    const result = await parseCSV();
    return NextResponse.json(result);
  } catch (err) {
    console.error('Error:', err); // Log errors
    return NextResponse.json({ error: 'Failed to process CSV file' }, { status: 500 });
  }
}
