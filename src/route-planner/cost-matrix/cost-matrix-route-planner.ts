import { CostMatrix } from "../common/cost-matrix";
import { Location } from "../common/location";
import { Route } from "../common/route";
import { RoutePlanner } from "../route-planner";
import { MatrixComputeContext } from "./matrix-compute/matrix-compute-context";
import { MatrixRouteContext } from "./matrix-route/matrix-route-context";

export class CostMatrixRoutePlanner implements RoutePlanner {

  private matrixRouteContext: MatrixRouteContext
  private matrixComputeContext: MatrixComputeContext

  constructor(
    matrixRouteContext: MatrixRouteContext,
    matrixComputeContext: MatrixComputeContext
  ) {
    this.matrixRouteContext = matrixRouteContext
    this.matrixComputeContext = matrixComputeContext
  }

  plan(origins: Location[], destinations: Location[]): Route[] {
    if(origins.length == 0 || destinations.length == 0) {
      return []
    }

    const origin = origins[0]
    const locations = [origin, ...destinations]

    const matrix = this.computeMatrix(locations)
    const locationIndicesPlanned = this.planRoutes(matrix)

    return this.mapIndicesToRoutes(locationIndicesPlanned, locations)
  }

  private computeMatrix(locations: Location[]): CostMatrix {
    const coordinates = locations.map(l => l.coordinates);
    return this.matrixComputeContext.compute(coordinates)
  }

  private planRoutes(matrix: CostMatrix): number[][] {
    return this.matrixRouteContext.plan(matrix)
  }

  private mapIndicesToRoutes(locationIndices: number[][], locations: Location[]): Route[] {
    const routes: Route[] = locationIndices.map(indices => {
      const start = locations[0]
      const stops = locations.filter((_, i) => indices.includes(i))

      return { start, stops }
    })

    return routes
  }
}