const path = import('path')

export default (robot) => {
  robot.load(path.join(__dirname, '/src/'))
}
