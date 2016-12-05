import path from 'path';
import fs from 'fs';

const checks = {
  fileCheck() {
    const packageFile = path.resolve('./.meteor/packages');
    return fs.existsSync(packageFile);
  },
  globalCheck() {
    return !!global.Package;
  },
};


export default function checkMeteor(opts, exception = false) {
  const options = Object.assign({
    fileCheck: false,
    globalCheck: true,
  }, opts);

  let result = true;
  Object.keys(options).forEach((key) => {
    if (!result || !options[key]) return;
    result = checks[key]();
  });

  if (exception) throw new Error('meteor-globals has to be run inside a meteor project!');
  return result;
}
