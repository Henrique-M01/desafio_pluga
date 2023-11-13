import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../components/card";

describe('Card tests', () => {
  it('style in modal', () => {
    render(<Card inModal={true} />);

    const card = screen.queryByTestId('card');

    expect(card).toHaveStyle({height: "180px"});
  })

  it('style not in modal', () => {
    render(<Card inModal={false} />);

    const card = screen.queryByTestId('card');

    expect(card).toHaveStyle({height: "350px"});
  })
});