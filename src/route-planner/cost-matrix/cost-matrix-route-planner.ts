import { Location } from "../common/location";
import { RoutePlanner } from "../route-planner";
import { MatrixComputeContext } from "./matrix-compute-context";
import { MatrixRouteContext } from "./matrix-route-context";

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
  
  plan(origins: Location[], destinations: Location[]) {
    throw new Error("Method not implemented.");
  }
}