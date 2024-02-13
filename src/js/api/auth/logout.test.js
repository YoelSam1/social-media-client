import { logout } from "./logout.js";
import { remove } from "../../storage/index.js";

// Mock
jest.mock("../../storage/index.js", () => ({
  remove: jest.fn(),
}));

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};

// eslint-disable-next-line no-undef
global.localStorage = localStorageMock;

describe("logout", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("clear the token from local storage", () => {
    // Simulate logged-in state by setting a token in storage
    localStorageMock.setItem("token", "dummyToken");
    localStorageMock.setItem(
      "profile",
      JSON.stringify({ email: "yes@noroff.no" }),
    );

    // Call logout function
    logout();

    // Verify if remove function is called with "token" as argument
    expect(remove).toHaveBeenCalledWith("token");
    expect(remove).toHaveBeenCalledWith("profile");
  });
});
