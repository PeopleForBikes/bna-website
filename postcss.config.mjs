import path from 'path';


const __dirname = import.meta.dirname;
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
