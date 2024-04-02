/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("test in <GifItem />", () => {
  const title = "Saitama";
  const url = "https://one-punch.com/saitama.jpg";
  test("match with snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test("mostrar la imagen con la url y el alt indicado", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    //console.log(screen.getByRole("img").src);
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  test("mostrar el titulo", () => {
    render(<GifItem title={title} url={url} />);
    //screen.debug();
    expect(screen.getByText(title)).toBeTruthy();
  });
});
