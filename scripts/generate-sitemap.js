const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');
const fs = require('fs');
const path = require('path');

const languagesData = {
  A: ['Afrikaans', 'Albanian', 'Arabic', 'Armenian', 'Azeri'],
  B: ['Basque', 'Belarusian', 'Bulgarian', 'Bosnian'],
  C: ['Catalan', 'Chinese', 'Croatian', 'Czech'],
  D: ['Danish', 'Divehi', 'Dutch'],
  E: ['English', 'Esperanto', 'Estonian'],
  F: ['Farsi', 'Faroese', 'Finnish', 'French', 'Fyro Macedonia'],
  G: ['Georgian', 'German', 'Galician', 'Gujarati', 'Greek'],
  H: ['Hebrew', 'Hindi'],
  I: ['Icelandic', 'Indonesian', 'Italian'],
  J: ['Japanese'],
  K: ['Kazakh', 'Kannada', 'Korean', 'Konkani', 'Kyrgyz'],
  L: ['Lithuanian', 'Latvian'],
  M: ['Maori', 'Mongolian', 'Marathi', 'Malay', 'Maltese'],
  N: ['Norwegian', 'Northern Sothi'],
  P: ['Pashto', 'Polish', 'Portuguese', 'Punjabi'],
  Q: ['Quechua'],
  R: ['Romanian', 'Russian'],
  S: ['Sami', 'Sanskrit', 'Serbian', 'Spanish', 'Slovak', 'Slovenian', 'Swahili', 'Swedish', 'Syriac'],
  T: ['Tagalog', 'Tatar', 'Tamil', 'Telugu', 'Thai', 'Turkish', 'Tsonga', 'Tswana'],
  U: ['Ukrainian', 'Urdu', 'Uzbek'],
  V: ['Vietnamese'],
  W: ['Welsh'],
  X: ['Xhosa'],
  Z: ['Zulu'],
};

const pages = ['/capitalization-tool', '/morse-code-translator', '/random-state-generator', '/random-country-generator', '/password-generator', '/pokemon-name-generator','/generate-pokemon-name','/cursive-text-generator' , '/strikethrough-text-generator']
async function generateSitemap() {
  const smStream = new SitemapStream({ hostname: 'https://www.wordiebox.com' });
  const pipeline = smStream.pipe(createGzip());

  // Manually add other pages
  smStream.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  smStream.write({ url: '/word-of-the-day', changefreq: 'daily', priority: 1.0 });
  // Add more static pages as needed
pages.map(page =>   smStream.write({ url: page, changefreq: 'weekly', priority: 0.7 }))
  // Add word-counter pages for all languages
  for (const letter in languagesData) {
    languagesData[letter].forEach((language) => {
      smStream.write({ url: `/word-counter/${language}`, changefreq: 'weekly', priority: 0.8 });
    });
    languagesData[letter].forEach((language) => {
      smStream.write({ url: `/character-counter/${language}`, changefreq: 'weekly', priority: 0.8 });
    });
    languagesData[letter].forEach((language) => {
      smStream.write({ url: `/random-word-generator/${language}`, changefreq: 'weekly', priority: 0.8 });
    });
    languagesData[letter].forEach((language) => {
      smStream.write({ url: `/random-name-generator/${language}`, changefreq: 'weekly', priority: 0.8 });
    });
  }

  smStream.end();

  // Write sitemap to file
  const writeStream = fs.createWriteStream(path.join(__dirname, '../public/sitemap.xml.gz'));
  const sitemap = await streamToPromise(pipeline);
  writeStream.write(sitemap);
  writeStream.end();
}

generateSitemap().catch(console.error);
