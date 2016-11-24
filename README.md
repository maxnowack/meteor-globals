# meteor-globals ![Build status](https://travis-ci.org/maxnowack/meteor-globals.svg?branch=master) [![Coverage Status](https://coveralls.io/repos/github/maxnowack/meteor-globals/badge.svg?branch=master)](https://coveralls.io/github/maxnowack/meteor-globals?branch=master)
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
Licensed under MIT license. Copyright (c) 2016 Max Nowack

## Contributions
Contributions are welcome. Please open issues and/or file Pull Requests.

## Maintainers
- Max Nowack ([maxnowack](https://github.com/maxnowack))