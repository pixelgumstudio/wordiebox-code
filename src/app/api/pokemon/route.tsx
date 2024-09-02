import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';

interface Pokemon {
  name: string;
  type: string;
  gender: string;
  // Add other fields as necessary
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const gender = searchParams.get('gender');
  const number = parseInt(searchParams.get('number') || '10', 10);
  const fetchTypes = searchParams.get('fetchTypes') === 'true';
  const fetchGenders = searchParams.get('fetchGenders') === 'true';

  const filePath = path.join(process.cwd(), 'public', 'pokemon.csv');

  try {
    const data = fs.readFileSync(filePath, 'utf8');

    const parseCSV = () => new Promise<Pokemon[]>((resolve, reject) => {
      parse(data, { columns: true }, (err, records: Pokemon[]) => {
        if (err) {
          return reject(err);
        }
        resolve(records);
      });
    });

    let pokemons = await parseCSV();

    if (fetchTypes) {
      const types = Array.from(new Set(pokemons.map(pokemon => pokemon.type)));
      return NextResponse.json({ types });
    }

    if (fetchGenders) {
      const genders = Array.from(new Set(pokemons.map(pokemon => pokemon.gender)));
      return NextResponse.json({ genders });
    }

    // Filter by type and gender if provided
    if (type && type !== 'any') {
      pokemons = pokemons.filter(pokemon => pokemon.type === type);
    }
    if (gender && gender !== 'any') {
      pokemons = pokemons.filter(pokemon => pokemon.gender === gender);
    }

    // Handle random selection
      pokemons = pokemons.sort(() => 0.5 - Math.random()).slice(0, number);
 

    return NextResponse.json(pokemons);
  } catch (err) {
    console.error('Error:', err); // Log errors
    return NextResponse.json({ error: 'Failed to process CSV file' }, { status: 500 });
  }
}
