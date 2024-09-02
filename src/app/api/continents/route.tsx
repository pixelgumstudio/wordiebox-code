import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';

interface ContinentsCountries {
  continent: string;
  countries: string[];
}

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'countries.csv');
  
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    
    const parseCSV = () => new Promise<ContinentsCountries[]>((resolve, reject) => {
      parse(data, { columns: true }, (err, records: any[]) => {
        if (err) {
          return reject(err);
        }

        const continents: { [key: string]: string[] } = {};
        
        records.forEach(row => {
          const continent = row['continent'];
          const country = row['country'];
          
          if (continent in continents) {
            continents[continent].push(country);
          } else {
            continents[continent] = [country];
          }
        });

        const result: ContinentsCountries[] = Object.entries(continents).map(([continent, countries]) => ({
          continent,
          countries
        }));

        resolve(result);
      });
    });
console.log('test')
    const result = await parseCSV();
    return NextResponse.json(result);
  } catch (err) {
    console.error('Error:', err); // Log errors
    return NextResponse.json({ error: 'Failed to process CSV file' }, { status: 500 });
  }
}
