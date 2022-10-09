import { Location } from "./common/location";

export interface RoutePlanner {
  plan(origins: Location[], destinations: Location[]): any
}