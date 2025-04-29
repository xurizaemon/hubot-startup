import { describe, it, beforeEach, afterEach } from 'node:test'
import assert from 'node:assert/strict'
import { Robot } from 'hubot'
import startupScript from '../src/startup.js'

class MockAdapter {
  constructor (robot) {
    this.robot = robot
    this.messages = []
    this.robot.adapter = this
  }

  // Simulates starting the adapter (required by Robot.run)
  run () {
    // No actual functionality needed for this test
  }

  // Simulates closing the adapter (required by Robot.close)
  close () {
    // No actual functionality needed for this test
  }

  // Captures messages sent to this adapter
  send (envelope, ...strings) {
    strings.forEach((string) => this.messages.push([envelope, string]))
  }

  messageRoom (room, message) {
    this.messages.push([room, message])
  }

  reset () {
    this.messages = []
  }
}

describe('Startup Script', () => {
  let robot
  let adapter

  beforeEach(async () => {
    // Disable HTTP server for test.
    process.env.EXPRESS_PORT = 'disabled'
    process.env.PORT = 'disabled'

    robot = new Robot('mock-adapter', false, 'hubot')
    adapter = new MockAdapter(robot)

    startupScript(robot)
    await robot.run()
  })

  afterEach(async () => {
    if (robot?.server?.close) {
      await new Promise(resolve => robot.server.close(resolve))
    }
    if (robot) {
      await robot.shutdown()
    }
    delete process.env.HUBOT_STARTUP_ROOM
    delete process.env.HUBOT_STARTUP_MESSAGE
    delete process.env.EXPRESS_PORT
    delete process.env.PORT
  })

  it('should send the default message to the default room', () => {
    const messages = adapter.messages
    assert.deepEqual(messages, [[{ room: 'Shell' }, 'Hello, cruel world!']])
  })

  it('should send a custom message to a custom room', async () => {
    process.env.HUBOT_STARTUP_ROOM = '#custom-room'
    process.env.HUBOT_STARTUP_MESSAGE = 'Custom message!'

    adapter.reset()
    startupScript(robot)
    await robot.run()

    const messages = adapter.messages
    assert.deepEqual(messages, [[{ room: 'custom-room' }, 'Custom message!']])
  })

  it('should send a custom message to a specific user when using @username', async () => {
    process.env.HUBOT_STARTUP_ROOM = '@john'
    process.env.HUBOT_STARTUP_MESSAGE = 'Hello, John!'

    adapter.reset()
    startupScript(robot)
    await robot.run()

    const messages = adapter.messages
    assert.deepEqual(messages, [[{ room: 'john' }, 'Hello, John!']])
  })
})
