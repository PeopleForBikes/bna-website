import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const aliasMapping = {
  '@Styles': (filename) => path.resolve(__dirname, `src/assets/styles/${filename}`),
  '@Images': (filename) => path.resolve(__dirname, `src/assets/images/${filename}`)
};

export default {
  plugins: {
    'postcss-import': {
      root: path.resolve(__dirname, 'src'),
      path: ['assets'],
      skipDuplicates: true,
      resolve: (id, basedir, importOptions) => {
        const [aliasName, filename] = id.split('/');
        return aliasMapping[aliasName](filename);
      }
    },
    'postcss-nesting': {},
    'postcss-media-minmax': {},
    'postcss-custom-media': {},
    'autoprefixer': {}
  }
};
