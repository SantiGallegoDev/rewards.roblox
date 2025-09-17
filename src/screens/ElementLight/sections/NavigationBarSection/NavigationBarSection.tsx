import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationBarSection = (): JSX.Element => {
  const navigationItems = [
    { label: "Charts", width: "w-[48.7px]" },
    { label: "Marketplace", width: "w-[91.64px]" },
    { label: "Create", width: "w-[48.18px]" },
    { label: "Robux", width: "w-[46.59px]" },
  ];

  return (
    <nav className="w-full h-10 bg-[#191a1f] border-b border-solid border-[#202227] relative">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-[13px]">
            <Button
              variant="outline"
              size="sm"
              className="h-auto bg-white text-[#272930] border border-solid rounded-lg px-3 py-1"
            >
              <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[11.8px] leading-3">
                Skip to Main Content
              </span>
            </Button>
            <img className="max-h-10" alt="Link" src="/link.svg" />
          </div>
        </div>

        <div className="flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-8">
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink className="flex items-center justify-center h-[34px] cursor-pointer">
                    <span
                      className={`${item.width} h-5 flex items-center justify-center [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#f7f7f8] text-[15.9px] text-center tracking-[0] leading-[22.4px] whitespace-nowrap`}
                    >
                      {item.label}
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative w-[480px] h-7">
            <div className="absolute inset-0 bg-[#121215] rounded-lg">
              <div className="flex items-center h-full bg-[#d0d9fb14] rounded-lg border border-solid border-[#d0d9fb1f] overflow-hidden">
                <div className="flex items-center pl-2">
                  <SearchIcon className="w-4 h-4 text-[#d5d7dd]" />
                </div>
                <Input
                  placeholder="Search"
                  className="flex-1 bg-transparent border-0 text-[#d5d7dd] placeholder:text-[#d5d7dd] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-base focus-visible:ring-0 focus-visible:ring-offset-0 h-full"
                />
              </div>
            </div>
          </div>

          <Button className="h-auto bg-[#335fff] hover:bg-[#335fff]/90 rounded-lg px-4 py-2">
            <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#f7f7f8] text-[15.4px] text-center tracking-[0] leading-4">
              Sign Up
            </span>
          </Button>
        </div>
      </div>
    </nav>
  );
};
