import '@testing-library/jest-dom';
import { describe, expect, test } from "vitest";
import { render } from "@testing-library/svelte";
import Input from "$lib/components/common/Input.svelte";

describe("Input component", () => {
  test("Render Input", async () => {
    const { getByRole } = render(Input, {
      value: "test"
    })
    const input = getByRole("textbox")
    expect(input).toBeInTheDocument();
  });
});