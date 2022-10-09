import { CostMatrixRoutePlanner } from "../../route-planner/implementations/cost-matrix-route-planner"

jest.mock('../../route-planner/implementations/cost-matrix-route-planner')

describe("cost matrix route planner", () => {
  const mockedRoutePlanner = jest.mocked(CostMatrixRoutePlanner)
  
  beforeEach(() => {
    mockedRoutePlanner.mockClear()
  })

  describe("plan is invoked", () => {
    const batchContext = new CostMatrixRoutePlanner()

    it("plan is called once", () => {
      batchContext.plan()
      expect(mockedRoutePlanner.prototype.plan).toHaveBeenCalledTimes(1)
    })
  })
})