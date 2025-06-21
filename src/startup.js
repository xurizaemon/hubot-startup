// Description
//   A Hubot script that greets us when this script is loaded.
//
// Configuration:
//   HUBOT_STARTUP_ROOM
//   HUBOT_STARTUP_MESSAGE
//
// Commands:
//   None

export default (robot) => {
  const ROOM = process.env.HUBOT_STARTUP_ROOM || 'Shell'
  const MESSAGE = process.env.HUBOT_STARTUP_MESSAGE || 'Hello'
  const DELAY = process.env.HUBOT_STARTUP_DELAY || 5000

  // Add support for HUBOT_STARTUP_ROOM to be in the format #general
  // for a channel name or @somebody for a username
  const roomOrPerson = { room: /^#(.*)/, person: /^@(.*)/ }
  const isRoom = ROOM.match(roomOrPerson.room)
  const isPerson = ROOM.match(roomOrPerson.person)

  setTimeout(() => {
    try {
      if (isRoom) {
        robot.messageRoom(isRoom[1], MESSAGE)
        return
      }

      if (isPerson) {
        robot.send({ room: isPerson[1] }, MESSAGE)
        return
      }

      robot.messageRoom(ROOM, MESSAGE)
    } catch (e) {
      robot.logger.info(`Unable to send message to ${ROOM}.`)
    }
  }, DELAY)

}
