import { cp } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

//console.log(process.cwd());
//process.exit();
const __dirname = dirname(fileURLToPath(import.meta.url))
const __root = process.cwd();

const SRC_DIR = resolve(__root, 'src/public/assets');
const DEST_DIR = resolve(__root, 'dist');

cp(SRC_DIR, DEST_DIR, { recursive: true }, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('Copied assets successfully!')
  }
  
});
