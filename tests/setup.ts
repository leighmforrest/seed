import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

beforeEach(() => {
  localStorage.clear(); // start clean for every test
});

afterEach(()=> {
    cleanup();
})
