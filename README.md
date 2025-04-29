# @xurizaemon/hubot-startup

A Hubot script to emit a startup message.

## Installation

    npm install @xurizaemon/hubot-startup

or

    # REF is the tag or branch you want
    npm install 'github:xurizaemon/hubot-startup.git#REF'

## Example

      (hubot start)
      Hello, cruel world!

## Configuration

See [`src/scripts/startup.js`](src/scripts/startup.coffee).

`HUBOT_STARTUP_ROOM` can be one of 3 formats:
1. either a room name, e.g. "general"
2. or a room name preceded by "#", e.g. "#general"
3. or a username preceded by "@", e.g. "@somebody"


## Development

`npm run`

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-startup
[travis-badge]: https://travis-ci.org/bouzuya/hubot-startup.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-startup
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-startup.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-startup
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-startup.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
