export type Direction =
  "north_east" |
  "north" |
  "north_west" |
  "west" |
  "south_west" |
  "south" |
  "south_east" |
  "east" |
  "any";



export const directionsAngles: Record<Direction, number[]> = {
  "north_east": [0, 90],
  "north": [0, 180],
  "north_west": [90, 180],
  "west": [90, 270],
  "south_west": [180, 270],
  "south": [180, 360],
  "south_east": [270, 360],
  "east": [-90, 90],
  "any": [0, 360]
};
