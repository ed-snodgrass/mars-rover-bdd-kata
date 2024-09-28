### Rule: The command M moves the rover forward one space in the direction it is facing
#### Example: The one where the rover moves facing East
* context:
  ```
  ..
  >.
  ```
* action:  
  `M`
* outcome:
  ```
  ..
  .>
  ```
#### Example: The one where the rover moves facing North
* context:
  ```
  ..
  ^.
  ```
* action:  
  `M`
* outcome:
  ```
  ^.
  ..
  ```
#### Example: The one where the rover moves facing West
* context:
  ```
  ..
  .<
  ```
* action:  
  `M`
* outcome:
  ```
  ..
  <.
  ```
#### Example: The one where the rover moves facing South
* context:
  ```
  v.
  ..
  ```
* action:  
  `M`
* outcome:
  ```
  ..
  v.
  ```

### Rule: The rover cannot move through an obstacle
#### Example: The one where there is an obstacle
* context:
  ```
  ..
  >#
  ```
* action:  
  `M`
* outcome:
  ```
  ..
  >#
  ```

### Rule: R rotates the rover 90 degrees to the right
#### Example: The one where the rover rotates right from the East
* context:
  ```
  ..
  >.
  ```
* action:  
  `R`
* outcome:
  ```
  ..
  v.
  ```
#### Example: The one where the rover rotates right from the North
* context:
  ```
  ..
  ^.
  ```
* action:  
  `R`
* outcome:
  ```
  ..
  >.
  ```
#### Example: The one where the rover rotates right from the West
* context:
  ```
  ..
  <.
  ```
* action:  
  `R`
* outcome:
  ```
  ..
  ^.
  ```
#### Example: The one where the rover rotates right from the South
* context:
  ```
  ..
  v.
  ```
* action:  
  `R`
* outcome:
  ```
  ..
  <.
  ```

### Rule: L rotates the rover 90 degrees to the left
#### Example: The one where the rover rotates left from the East
* context:
  ```
  ..
  >.
  ```
* action:  
  `L`
* outcome:
  ```
  ..
  ^.
  ```
#### Example: The one where the rover rotates left from the North
* context:
  ```
  ..
  ^.
  ```
* action:  
  `L`
* outcome:
  ```
  ..
  <.
  ```
#### Example: The one where the rover rotates left from the West
* context:
  ```
  ..
  <.
  ```
* action:  
  `L`
* outcome:
  ```
  ..
  v.
  ```
#### Example: The one where the rover rotates left from the South
* context:
  ```
  ..
  v.
  ```
* action:  
  `L`
* outcome:
  ```
  ..
  >.
  ```
              
### Rule: The rover cannot move over an edge
#### Example: The one where the rover is at the East edge
* context:
  ```
  ..
  .>
  ```
* action:  
  `M`
* outcome:
  ```
  ..
  .>
  ```
#### Example: The one where the rover is at the North edge
* context:
  ```
  ^.
  ..
  ```
* action:  
  `M`
* outcome:
  ```
  ^.
  ..
  ```
#### Example: The one where the rover is at the West edge
* context:
  ```
  ..
  <.
  ```
* action:  
  `M`
* outcome:
  ```
  ..
  <.
  ```
#### Example: The one where the rover is at the South edge
* context:
  ```
  ..
  v.
  ```
* action:  
  `M`
* outcome:
  ```
  ..
  v.
  ```

