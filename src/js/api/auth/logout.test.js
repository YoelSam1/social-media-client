/* eslint-disable no-undef */
import { logout } from "./logout.js";

// Mock
const localStorageMock = {
  removeItem: jest.fn(),
};

global.localStorage = localStorageMock;

describe("logout function", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should clear the token from the browser", () => {
    logout();

    expect(localStorageMock.removeItem).toHaveBeenCalledWith("token");
    expect(localStorageMock.removeItem).toHaveBeenCalledWith("profile");
  });
});
