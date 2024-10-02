@forward @navigation
Feature: Mars Rover Navigation Forward Movement

  Rule: For any direction the command M moves the rover in that direction 1 space
    Example: The rover moves North
      Given the rover is facing North
      And it is at 0,0
      When it receives "M"
      Then the rover should be facing North
      And it should be at 0,1

    Example: The rover moves West
      Given the rover is facing West
      And it is at 1,0
      When it receives "M"
      Then the rover should be facing West
      And it should be at 0,0

    Example: The rover moves East
      Given the rover is facing East
      And it is at 0,0
      When it receives "M"
      Then the rover should be facing East
      And it should be at 1,0

    Example: The rover moves South
      Given the rover is facing South
      And it is at 0,1
      When it receives "M"
      Then the rover should be facing South
      And it should be at 0,0

  Rule: The rover cannot move through an obstacle
    Example: The rover is facing South with an obstacle
      Given the rover is facing South
      And there is an obstacle at 0,0
      And it is at 0,1
      When it receives "M"
      Then the rover should be facing South
      And it should be at 0,1

  Rule: The rover cannot move over an edge
    Example: The rover is facing the South edge
      Given the rover is facing South
      And it is at the South edge
      When it receives "M"
      Then the rover should be facing South
      And it should be at 0,0

    Example: The rover is facing the North edge
      Given the rover is facing North
      And it is at the North edge
      When it receives "M"
      Then the rover should be facing North
      And it should be at 0,1

    Example: The rover is facing the East edge
      Given the rover is facing East
      And it is at the East edge
      When it receives "M"
      Then the rover should be facing East
      And it should be at 1,0

    Example: The rover is facing the West edge
      Given the rover is facing West
      And it is at the West edge
      When it receives "M"
      Then the rover should be facing West
      And it should be at 0,0
