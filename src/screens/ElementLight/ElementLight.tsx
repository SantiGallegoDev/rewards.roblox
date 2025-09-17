import React from "react";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { LoginFormSection } from "./sections/LoginFormSection/LoginFormSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";

export const ElementLight = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col bg-[#121212]">
      <NavigationBarSection />
      <LoginFormSection />
      <FooterSection />
    </div>
  );
};
