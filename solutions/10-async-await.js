import fsp from 'fs/promises';

// BEGIN
export async function exchange(file1, file2) {
  const [content1, content2] = await Promise.all([
    fsp.readFile(file1, 'utf8'),
    fsp.readFile(file2, 'utf8'),
  ]);

  await Promise.all([
    fsp.writeFile(file1, content2),
    fsp.writeFile(file2, content1),
  ]);
}
// END