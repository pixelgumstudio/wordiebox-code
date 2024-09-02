import axios from "./axios";

// export default async function getEnglishWords(number: number) {
//     const res = await fetch(`https://pitchdeck-backend-v2.onrender.com/api/v2/pitchdeck/pitches/search/${pitchName}`)

//     if (!res.ok) throw new Error('failed to fetch pitch deck')

//     return res.json()
// }

export default async function getEnglishWords(number: number) {
    try {
      const res = await fetch(`https://api.wordiebox.com/words/random-word`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ numWords: number })
      });
  
      if (!res.ok) {
        throw new Error('Failed to fetch random words');
      }
  
      return await res.json();
    } catch (error) {
      console.error('Error fetching words:', error);
      throw error;
    }
  };
  