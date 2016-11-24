module.exports = function getMeteorGlobal(packageName, globalName) {
  if (!global.Package || !global.Package[packageName]) return null;
  return global.Package[packageName][globalName];
};
