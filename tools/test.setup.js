require('babel-register')({
  ignore: (filename) => {
    if (filename.includes('spinner.component.spec.jsx') || filename.includes('spin.js')) {
      return false;
    }
    return true;
  },
});
