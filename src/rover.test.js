const rover = require('./rover')

describe('rover tests', () => {
  describe('handleInstruction', () => {
    describe('moving north from 0,0', () => {
      beforeEach(() => {
        rover.orientation = 'North'
        rover.position = {x: 0, y: 0}

        rover.handleInstruction('M')
      })
      it('should be facing North', () => {
        expect(rover.orientation).toBe('North')
      })
      it('should be at 0,1', () => {
        expect(rover.position).toStrictEqual({x: 0, y: 1})
      })
    })
    describe('moving north from 1,1', () => {
      beforeEach(() => {
        rover.orientation = 'North'
        rover.position = {x: 1, y: 1}

        rover.handleInstruction('M')
      })
      it('should be facing North', () => {
        expect(rover.orientation).toBe('North')
      })
      it('should be at 0,1', () => {
        expect(rover.position).toStrictEqual({x: 1, y: 2})
      })
    })
    describe('moving west from 1,0', () => {
      beforeEach(() => {
        rover.orientation = 'West'
        rover.position = {x: 1, y: 0}

        rover.handleInstruction('M')
      })
      it('should be facing West', () => {
        expect(rover.orientation).toBe('West')
      })
      it('should be at 0,0', () => {
        expect(rover.position).toStrictEqual({x: 0, y: 0})
      })
    })
    describe('moving west from 2,2', () => {
      beforeEach(() => {
        rover.orientation = 'West'
        rover.position = {x: 2, y: 2}

        rover.handleInstruction('M')
      })
      it('should be facing West', () => {
        expect(rover.orientation).toBe('West')
      })
      it('should be at 0,0', () => {
        expect(rover.position).toStrictEqual({x: 1, y: 2})
      })
    })
    describe('moving east from 0,0', () => {
      beforeEach(() => {
        rover.orientation = 'East'
        rover.position = {x: 0, y: 0}

        rover.handleInstruction('M')
      })
      it('should be facing East', () => {
        expect(rover.orientation).toBe('East')
      })
      it('should be at 0,0', () => {
        expect(rover.position).toStrictEqual({x: 1, y: 0})
      })
    })
    describe('moving south from 0,0', () => {
      beforeEach(() => {
        rover.orientation = 'South'
        rover.position = {x: 0, y: 1}

        rover.handleInstruction('M')
      })
      it('should be facing South', () => {
        expect(rover.orientation).toBe('South')
      })
      it('should be at 0,0', () => {
        expect(rover.position).toStrictEqual({x: 0, y: 0})
      })
    })
  })
})
