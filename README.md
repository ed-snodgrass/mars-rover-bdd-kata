# Mars Rover

This information is mostly taken from [Coding Dojo's Mars Rover](https://codingdojo.org/kata/mars-rover/) with some slight tweaks  

### Program Input
* a rover‘s starting point (x, y) and the direction (N, E, S, W) it is facing
* a map describing the location of obstacles
* a list of commands to move and turn the rover (`M` : move forward, `R` : turn right 90°, `L`️ : turn left 90°)

### Description
* When the rover encounters an obstacle, it does nothing.
* Coordinates are (X,Y)

### Map Legend:  
`.` is open space, `#` is an obstacle
North: `^`, East: `>`, South: `v`, West: `<`

### Example Input
```
...#.
.....  
#..#.  
..#..  
....#

0,0 N

M,R,M,L,M,R,M,M
```

### Assumptions
