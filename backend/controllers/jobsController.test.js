const { getJobsForUser } = require("./jobsController");

// Mocking the sampleData module
jest.mock("../data/sampleData", () => {
  const originalModule = jest.requireActual("../data/sampleData");

  return {
    __esModule: true,
    ...originalModule,
    businesses: [
      { username: "testUser", classifications: [1], locations_served: [1] },
    ],
    classifications: [{ id: 1, name: "Test Classification" }],
    jobs: [{ id: 1, headline: "Test Job", classification: 1, location: 1 }],
    locations: [{ id: 1, name: "Test Location" }],
  };
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("getJobsForUser", () => {
  let req;
  let res;

  beforeEach(() => {
    req = { query: { username: "testUser" } };
    res = mockResponse();
  });

  it("should return 400 if username is not provided", () => {
    req.query = {};
    getJobsForUser(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: "Username is required" });
  });

  it("should return the correct jobs for a given user", () => {
    getJobsForUser(req, res);
    expect(res.json).toHaveBeenCalledWith([
      {
        id: 1,
        headline: "Test Job",
        classification: "Test Classification",
        location: "Test Location",
      },
    ]);
  });
});
