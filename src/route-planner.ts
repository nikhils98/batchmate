import { Location } from "./common/location";
import { Route } from "./common/route";

export interface RoutePlanner {
  plan(origins: Location[], destinations: Location[]): Route[]
}