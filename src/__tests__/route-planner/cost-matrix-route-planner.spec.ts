import { CostMatrixRoutePlanner } from "../../route-planner/cost-matrix/cost-matrix-route-planner"
import { MatrixComputeContext } from "../../route-planner/cost-matrix/matrix-compute-context"
import { MatrixRouteContext } from "../../route-planner/cost-matrix/matrix-route-context"
import { Location } from "../../route-planner/common/location"
import { Route } from "../../route-planner/common/route"

describe("cost matrix route planner", () => {
  let routePlanner: CostMatrixRoutePlanner

  beforeAll(() => {
    const matrixComputeContext = new MatrixComputeContext()
    const matrixRouteContext = new MatrixRouteContext()

    routePlanner = new CostMatrixRoutePlanner(matrixRouteContext, matrixComputeContext)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe("plan is invoked", () => {

    const origins: Location[] = []
    const destinations: Location[] = []

    let planSpy: jest.SpyInstance;

    beforeAll(() => {
      planSpy = jest.spyOn(routePlanner, "plan")
      routePlanner.plan(origins, destinations)
    })

    it("called once", () => {
      expect(planSpy).toHaveBeenCalledTimes(1)
    })

    it("called with origins and destinations", () => {
      expect(planSpy).toHaveBeenCalledWith(origins, destinations)
    })

    it("returns route array", () => {
      const routes: Route[] = []
      expect(planSpy).toReturnWith(routes)
    })
  })
})