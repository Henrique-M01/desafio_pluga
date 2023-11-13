import React from "react";
import { render, screen } from "@testing-library/react";
import Modal from "../components/modal";
import ProviderHook from "../context/provider.js";

describe('Modal tests', () => {
  it('there is no a close button without context', () => {
    render(<Modal />);
    
    const button = screen.queryByTestId('close-modal');
    expect(button).not.toBeInTheDocument();
  });

  it('there is a close button with context', () => {
    render(
    <ProviderHook value={true} >
      <Modal />
    </ProviderHook>);
    
    const button = screen.queryByTestId('close-modal');
    expect(button).not.toBeInTheDocument();
  });
});