# meteor-globals ![Build status](https://travis-ci.org/maxnowack/meteor-globals.svg?branch=master)
Allows getting meteor globals in npm packages

## Installation
````es6
  npm install meteor-globals
````

## Usage
````es6
  import getMeteorGlobal from 'meteor-globals'
  
  const Mongo = getMeteorGlobal('mongo', 'Mongo') // from core package
  const RedisOplog = getMeteorGlobal('cultofcoders:redis-oplog', 'RedisOplog') // from atmosphere package
  
  // getMeteorGlobal returns null if a Package isn't present
````

## License
Licensed under GPLv3 license. Copyright (c) 2015 Max Nowack

## Contributions
Contributions are welcome. Please open issues and/or file Pull Requests.

## Maintainers
- Max Nowack ([maxnowack](https://github.com/maxnowack))
