import { Coordinates } from "../../common/coordinates";
import { CostMatrix } from "../../common/cost-matrix";

export class MatrixComputeContext {
  compute(coordinates: Coordinates[]): CostMatrix {
    throw new Error ("Method not implemented")
  }
}