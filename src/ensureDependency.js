import path from 'path';
import fs from 'fs';
import getGlobal from './getGlobal';
import checkMeteor from './checkMeteor';

export default function ensureDependency(packageName, fileCheck = true) {
  if (process.env.NODE_ENV === 'production') return false;
  const meteor = getGlobal('meteor', 'Meteor');
  if (!meteor || meteor.isClient) return false;

  if (getGlobal(packageName)) return false;

  const packageFile = path.resolve('./.meteor/packages');
  if (fileCheck && !checkMeteor({ fileCheck: true }, false)) throw new Error('cannot find .meteor/packages file. Are you in a meteor project?');
  const installedPackages = fs.readFileSync(packageFile).toString().split('\n').map(p => p.trim());
  if (installedPackages.indexOf(packageName) >= 0) return false;
  fs.appendFileSync(packageFile, `\n${packageName}`);
  return true;
}
