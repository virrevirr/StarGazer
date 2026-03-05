import { describe, it, expect, beforeEach, vi } from "vitest";

// starSource.js imports apiConfig.js which is not committed (contains API keys).
// We mock it so tests can run without real API keys.
vi.mock("../src/starSource.js", () => ({
  searchPlaces: vi.fn(),
  getWeatherDetails: vi.fn(),
  getMoonDetails: vi.fn(),
  getNewsDetails: vi.fn(),
  getConstellationDetails: vi.fn(),
}));

import model from "../src/starModel.js";

// Reset relevant model state before each test so tests don't affect each other
beforeEach(() => {
  model.wantToGo = [];
  model.haveVisited = [];
  model.currentLocation = null;
});

describe("addToWantToGo", () => {
  it("adds a location to the wantToGo list", () => {
    const location = { city: "Stockholm", state: "", country: "Sweden" };

    model.addToWantToGo(location);

    expect(model.wantToGo).toContain(location);
  });

  it("does not add the same location twice", () => {
    const location = { city: "Stockholm", state: "", country: "Sweden" };

    model.addToWantToGo(location);
    model.addToWantToGo(location);

    expect(model.wantToGo).toHaveLength(1);
  });
});

describe("removeFromWantToGo", () => {
  it("removes a location from the wantToGo list", () => {
    const location = { city: "Stockholm", state: "", country: "Sweden" };
    model.addToWantToGo(location);

    // removeFromWantToGo uses reference equality, so we pass the exact
    // object that was stored (which is the same reference as 'location')
    model.removeFromWantToGo(model.wantToGo[0]);

    expect(model.wantToGo).toHaveLength(0);
  });
});
