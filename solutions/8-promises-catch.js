import fsp from 'fs/promises';

// BEGIN
const touch = async (filepath) => {
    try {
      await fsp.access(filepath);
    } catch (error) {
      if (error.code === 'ENOENT') {
        await fsp.writeFile(filepath, '');
      } else {
        throw error;
      }
    }
  };
  
  export { touch };
// END