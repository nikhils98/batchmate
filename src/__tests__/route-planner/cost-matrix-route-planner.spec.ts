import { CostMatrixRoutePlanner } from "../../route-planner/cost-matrix/cost-matrix-route-planner"
import { MatrixComputeContext } from "../../route-planner/cost-matrix/matrix-compute/matrix-compute-context"
import { MatrixRouteContext } from "../../route-planner/cost-matrix/matrix-route/matrix-route-context"
import { Location } from "../../route-planner/common/location"
import { Route } from "../../route-planner/common/route"

describe("cost matrix route planner", () => {
  let routePlanner: CostMatrixRoutePlanner
  let planSpy: jest.SpyInstance

  let matrixComputeContext: MatrixComputeContext
  let matrixRouteContext: MatrixRouteContext

  beforeAll(() => {
    matrixComputeContext = new MatrixComputeContext()
    matrixRouteContext = new MatrixRouteContext()

    routePlanner = new CostMatrixRoutePlanner(matrixRouteContext, matrixComputeContext)

    planSpy = jest.spyOn(routePlanner, "plan")
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  describe("plan is invoked with empty locations", () => {

    const origins: Location[] = []
    const destinations: Location[] = []

    beforeAll(() => {
      routePlanner.plan(origins, destinations)
    })

    it("called with origins and destinations", () => {
      expect(planSpy).toHaveBeenCalledWith(origins, destinations)
    })

    it("returns empty route array", () => {
      const routes: Route[] = []
      expect(planSpy).toReturnWith(routes)
    })
  })

  describe("plan is invoked with dummy locations", () => {
    let matrixComputeSpy: jest.SpyInstance
    let matrixRouteSpy: jest.SpyInstance

    beforeAll(() => {
      matrixComputeSpy = jest.spyOn(matrixComputeContext, "compute").mockReturnValue([[1,2,3,4],[1,2,3,4]])
      matrixRouteSpy = jest.spyOn(matrixRouteContext, "plan").mockReturnValue([[1,2,3]])
    })

    const origins: Location[] = [
      { id: "depot", coordinates: { lat: 24.55, lng: 67.23 } }
    ]
    const destinations: Location[] = [
      { id: "1", coordinates: { lat: 24.6, lng: 67 } },
      { id: "2", coordinates: { lat: 25, lng: 67.5 } },
      { id: "3", coordinates: { lat: 23.8, lng: 68 } }
    ]

    beforeAll(() => {
      routePlanner.plan(origins, destinations)
    })

    it("called with origins and destinations", () => {
      expect(planSpy).toHaveBeenCalledWith(origins, destinations)
    })

    it("returns specified route array", () => {
      const routes: Route[] = [
        {
          start: origins[0],
          stops: destinations
        }
      ]
      expect(planSpy).toReturnWith(routes)
    })
  })
})