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

The environment variables for configuration are:

| Variable name | Example value                  | Description                                            |
|--|--------------------------------|--------------------------------------------------------|
| HUBOT_STARTUP_ROOM | general, #general or @somebody | Room name (with # prefix) or user name (with @ prefix) |
| HUBOT_STARTUP_MESSAGE | Hello, cruel world! | The message to emit |
| HUBOT_STARTUP_DELAY | 5000 | Milliseconds to wait before messaging |

## Development

`npm test`

## Support

![maintenance not intended](https://unmaintained.tech)

There is no commitment to maintaining this software. That said, PRs and issues are welcome!

## License

[MIT](LICENSE)

## Author

- [hubot-startup](https://github.com/bouzuya/hubot-startup), the coffeescript original, works with early versions of Hubot - [bouzuya](https://github.com/bouzuya) &lt;[m@bouzuya.net](mailto:m@bouzuya.net)&gt; ([http://bouzuya.net](http://bouzuya.net)).
- [@xurizaemon/hubot-startup](https://github.com/xurizaemon/hubot-startup) for Hubot v10+ - [xurizaemon](https://chris.bur.gs)
