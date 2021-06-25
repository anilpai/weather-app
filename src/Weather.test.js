import { render, screen } from "@testing-library/react";
import Weather from "./Weather";

test("renders learn react link", async () => {
  render(<Weather />);
  const linkElement = screen.getByText(/Enter City Name or Zip/i);
  expect(linkElement).toBeInTheDocument();
  const getWeatherBtn = screen.getByText(/Get Weather/i);
  expect(getWeatherBtn).toBeInTheDocument();
  expect(getWeatherBtn).toBeEnabled();
});
