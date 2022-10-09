import { CostMatrixRoutePlanner } from "../../route-planner/cost-matrix/cost-matrix-route-planner"
import { MatrixComputeContext } from "../../route-planner/cost-matrix/matrix-compute-context"
import { MatrixRouteContext } from "../../route-planner/cost-matrix/matrix-route-context"
import { Location } from "../../route-planner/common/location"

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

    const origins: Location[] = []
    const destinations: Location[] = []

    beforeAll(() => {
      routePlanner.plan(origins, destinations)
    })

    it("called once", () => {
      expect(mockedRoutePlanner.prototype.plan).toHaveBeenCalledTimes(1)
    })

    it("called with origins and destinations", () => {
      expect(mockedRoutePlanner.prototype.plan).toHaveBeenCalledWith(origins, destinations)
    })
  })
})