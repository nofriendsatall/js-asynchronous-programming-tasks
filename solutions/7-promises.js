import fsp from 'fs/promises';

// BEGIN
const reverse = async (filepath) => {
  const content = await fsp.readFile(filepath, 'utf-8');
  const lines = content.split('\n');
  const reversedLines = lines.reverse();
  const newContent = reversedLines.join('\n');
  await fsp.writeFile(filepath, newContent);
};

export { reverse };
// END