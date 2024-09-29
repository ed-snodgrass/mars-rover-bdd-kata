@rotation @navigation
Feature: Mars Rover Navigation Rotation

  Rule: L rotates the rover 90 degrees to the left
    Example: The rover rotates left from the East
      Given the rover is at 0,0
      And the rover is facing East
      When it receives "L"
      Then the rover should be at 0,0
      And the rover should be facing North

    Example: The rover rotates left from the North
      Given the rover is at 0,0
      And the rover is facing North
      When it receives "L"
      Then the rover should be at 0,0
      And the rover should be facing West

    Example: The rover rotates left from the West
      Given the rover is at 0,0
      And the rover is facing West
      When it receives "L"
      Then the rover should be at 0,0
      And the rover should be facing South

    Example: The rover rotates left from the South
      Given the rover is at 0,0
      And the rover is facing South
      When it receives "L"
      Then the rover should be at 0,0
      And the rover should be facing East

  Rule: R rotates the rover 90 degrees to the right
    Example: The rover rotates right from the North
      Given the rover is at 0,0
      And the rover is facing North
      When it receives "R"
      Then the rover should be at 0,0
      And the rover should be facing East

    Example: The rover rotates right from the East
      Given the rover is at 0,0
      And the rover is facing East
      When it receives "R"
      Then the rover should be at 0,0
      And the rover should be facing South

    Example: The rover rotates right from the South
      Given the rover is at 0,0
      And the rover is facing South
      When it receives "R"
      Then the rover should be at 0,0
      And the rover should be facing West

    Example: The rover rotates right from the West
      Given the rover is at 0,0
      And the rover is facing West
      When it receives "R"
      Then the rover should be at 0,0
      And the rover should be facing North
