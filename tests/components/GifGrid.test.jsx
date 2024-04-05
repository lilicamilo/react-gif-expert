import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("tests in <GifGrid/>", () => {
  const category = "One Punch";
  test('debe mostrar el "Cargando..." inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    //screen.debug();
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("debe mostrar items cuando se cargan las imagenes en useFetchGifs", () => {
    const gifs = [
      { id: 123, title: "Goku", url: "https://gifs.goku.jpg" },
      { id: 456, title: "Saitama", url: "https://gifs.saitama.jpg" },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    //screen.debug();

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
