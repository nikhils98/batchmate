import { Point } from '../../common/point';
import { CostMatrix } from '../../common/cost-matrix';

export class MatrixComputeContext {
  compute(points: Point[]): CostMatrix {
    throw new Error('Method not implemented');
  }
}
