function handleInstruction() {
  if (this.orientation === 'North') {
    this.position.y = this.position.y + 1
  } else if (this.orientation === 'East') {
    this.position.x = this.position.x + 1
  } else if (this.orientation === 'South') {
    this.position.y = this.position.y - 1
  } else {
    this.position.x = this.position.x - 1
  }
}

module.exports = {
  handleInstruction,
}
