import { CostMatrixRoutePlanner } from "../../route-planner/cost-matrix/cost-matrix-route-planner"
import { MatrixComputeContext } from "../../route-planner/cost-matrix/matrix-compute-context"
import { MatrixRouteContext } from "../../route-planner/cost-matrix/matrix-route-context"

jest.mock('../../route-planner/cost-matrix/cost-matrix-route-planner')

describe("cost matrix route planner", () => {
  const mockedRoutePlanner = jest.mocked(CostMatrixRoutePlanner)

  let routePlanner: CostMatrixRoutePlanner

  beforeAll(() => {
    const matrixComputeContext = new MatrixComputeContext()
    const matrixRouteContext = new MatrixRouteContext()

    routePlanner = new CostMatrixRoutePlanner(matrixRouteContext, matrixComputeContext)
  })
  
  beforeEach(() => {
    mockedRoutePlanner.mockClear()
  })

  describe("plan is invoked", () => {

    it("plan is called once", () => {
      routePlanner.plan()
      expect(mockedRoutePlanner.prototype.plan).toHaveBeenCalledTimes(1)
    })
  })
})