// components/MorseList.tsx
import Image from 'next/image';
import React from 'react';

interface MorseData {
  [key: string]: string[];
}

interface MorseListProps {
  pageType: string;
}

const morseData: MorseData = {
  'a': ['.-'], 'b': ['-...'], 'c': ['-.-.'], 'd': ['-..'], 'e': ['.'], 'f': ['..-.'], 
  'g': ['--.'], 'h': ['....'], 'i': ['..'], 'j': ['.---'], 'k': ['-.-'], 'l': ['.-..'], 
  'm': ['--'], 'n': ['-.'], 'o': ['---'], 'p': ['.--.'], 'q': ['--.-'], 'r': ['.-.'], 
  's': ['...'], 't': ['-'], 'u': ['..-'], 'v': ['...-'], 'w': ['.--'], 'x': ['-..-'], 
  'y': ['-.--'], 'z': ['--..'], '1': ['.----'], '2': ['..---'], '3': ['...--'], 
  '4': ['....-'], '5': ['.....'], '6': ['-....'], '7': ['--...'], '8': ['---..'], 
  '9': ['----.'], '0': ['-----'], ' ': ['/']
}

const MorseList: React.FC<MorseListProps> = ({ pageType }) => {
    const renderMorseCharacter = (char: string) => {
        return char.split('').map((symbol, index) => {
          let className = '';
          if (symbol === '.') className= "h-[5px] w-[5px] rounded-full bg-[#edba00]";
          else if (symbol === '-') className= "h-[5px] w-[20px] rounded-[20px] bg-[#e03c00]";
          else if (symbol === '/') className = 'text-[#3498DB]';
    
        //   return <Image key={index} src={`${source}`} className={`${className}`} width={100} height={100} alt={''}/>;
          return <span key={index} className={`${className}`}></span>;
        });
      };
  return (
    <div className="my-10 tablet:my-[50px] py-10 tablet:py-[50px]">
      <div className='w-full max-w-[791px] mx-auto'>
        <h2 className="text-24 tablet:text-32 text-[#1c1c1c] font-bold text-left mb-8 capitalize">Learn Morse Code</h2>
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-4 gap-y-10 bg-white p-4 tablet:p-8 ">
        {Object.entries(morseData).map(([letter, morseArray]) => (
            <div key={letter} className="relative flex items-center gap-1">
              <h3 className="text-24 font-semibold text-[#1c1c1c] capitalize mr-2">{letter}</h3>
              {morseArray.map((morse, index) => (
                  <p key={index} className="flex items-center gap-1 text-[#484848] text-16">
                    {renderMorseCharacter(morse)}
                  </p>
                ))}
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MorseList;
