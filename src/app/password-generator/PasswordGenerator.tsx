import CopyButton from '@/components/copy-content';
import ShareButton from '@/components/share/share-copy';
import { useState } from 'react';
import Popup from '../../components/share/popups/congrats';

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:",.<>?';

    let charset = '';
    if (includeUppercase) charset += uppercase;
    if (includeLowercase) charset += lowercase;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;

    if (charset === '') return;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const options = [8,9,10,11,12,13,14,15,16,17,18,19,20];
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLength(Number(event.target.value));
  };

  return (
    <div className="w-full max-w-[420px] mx-auto">
      <div className="flex w-fit gap-2 items-center mx-auto mb-6">
        <h4 className="text-24 text-grey-900">Password Length</h4>
      <div className="relative inline-block w-[72px] shadow-darkbox">
  <select    value={length}
            onChange={handleChange} 
             className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline">
          {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M5 8l5-5 5 5H5zm10 4H5l5 5 5-5z"/>
    </svg>
  </div>
</div>
      </div>
       
        <div className="grid grid-cols-2 gap-4 mb-10 w-full max-w-[384px] mx-auto">
          <label className='checkbox-container w-full flex border bg-white hover:bg-white shadow-darkbox p-3 text-16 font-medium focus:outline-none'>
            <input
              type="checkbox"
              className='checkmark'
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
            <span className="ml-2">Uppercase</span>
          </label>
          <label className='checkbox-container w-full flex border bg-white hover:bg-white shadow-darkbox p-3 text-16 font-medium focus:outline-none'>
            <input
              type="checkbox"
              className='checkmark'

              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
            />
            <span className="ml-2">Lowercase</span>
          </label>
          <label className='checkbox-container w-full flex border bg-white hover:bg-white shadow-darkbox p-3 text-16 font-medium focus:outline-none'>
            <input
              type="checkbox"
              className='checkmark'
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            <span className="ml-2">Numbers</span>
          </label>
          <label className='checkbox-container w-full flex border bg-white hover:bg-white shadow-darkbox p-3 text-16 font-medium focus:outline-none'>
            <input
              type="checkbox"
              className='checkmark'
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
            <span className="ml-2">Symbols</span>
          </label>
        </div>
        <button onClick={generatePassword} className={`w-full text-black border-[#1C1C1C] bg-[#FC0] border shadow-darkbox py-3 px-2 text-16 font-medium hover:bg-white`}>
        Generate Password
       </button>
        {password && (
          <div className="w-fit text-black mx-auto mt-6 border-[#1C1C1C] bg-[#FFD2C2] border shadow-darkbox py-3 px-2 text-16 font-medium">
            <span className="">{password}</span>
          </div>
        )}
{
  password !== "" &&
<div className="mt-10 grid grid-cols-2 gap-4 mb-10 w-full max-w-[384px] mx-auto">
  <CopyButton text='Copy Password' size='full' style="bg-[#00A33F] text-white" textToCopy={password} />
  <ShareButton text='Share Password' size='full' textToCopy={password} />
</div>
}
      </div>
  );
};

export default PasswordGenerator;
