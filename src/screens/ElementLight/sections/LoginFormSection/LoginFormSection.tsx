import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const LoginFormSection = (): JSX.Element => {
  return (
    <div className="w-full h-[744px] flex items-center justify-center bg-[#121215]">
      <Card className="w-[368.52px] h-[468.58px] bg-[#272930] border-none">
        <CardContent className="p-0 relative h-full">
          <div className="absolute top-[22px] left-[calc(50.00%_-_121px)] w-[242px] h-10 flex items-center justify-center [font-family:'Helvetica_Neue-CondensedBlack',Helvetica] font-black text-[#f7f7f8] text-[32px] text-center tracking-[0] leading-[44.8px] whitespace-nowrap">
            Login to Roblox
          </div>

          <div className="absolute w-[calc(100%_-_30px)] top-[70px] left-[15px] h-[146px] flex flex-col">
            <Input
              placeholder="Username/Email/Phone"
              className="flex-1 max-h-[38px] bg-[#d0d9fb14] rounded-lg border border-solid border-[#d0d9fb1f] text-[#d5d7dd] placeholder:text-[#d5d7dd] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-base"
            />

            <Input
              type="password"
              placeholder="Password"
              className="flex-1 max-h-[38px] mt-[18px] bg-[#d0d9fb14] rounded-lg border border-solid border-[#d0d9fb1f] text-[#d5d7dd] placeholder:text-[#d5d7dd] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[15.6px]"
            />

            <Button
              variant="outline"
              className="flex-1 max-h-[34px] mt-1.5 h-auto rounded-lg border border-solid border-[#d5d7dd] bg-transparent text-[#bcbec8] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[13.8px] hover:bg-transparent hover:text-[#bcbec8]"
            >
              Log In
            </Button>
          </div>

          <Button
            variant="link"
            className="absolute top-[229px] left-[calc(50.00%_-_114px)] w-[228px] h-5 h-auto p-0 [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#f7f7f8] text-[15.5px] text-center tracking-[0] leading-[22.4px] whitespace-nowrap hover:text-[#f7f7f8]"
          >
            Forgot Password or Username?
          </Button>

          <Separator className="absolute w-[calc(100%_-_30px)] top-[274px] left-[15px] h-px bg-[#d0d9fb1f]" />

          <Button className="absolute w-[calc(100%_-_30px)] top-[293px] left-[15px] h-[34px] h-auto bg-[#d0d9fb1f] rounded-lg text-[#f7f7f8] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[13.5px] hover:bg-[#d0d9fb1f]">
            Email Me a One-Time Code
          </Button>

          <Button className="absolute w-[calc(100%_-_30px)] top-[339px] left-[15px] h-[34px] h-auto bg-[#d0d9fb1f] rounded-lg text-[#f7f7f8] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[13.9px] hover:bg-[#d0d9fb1f]">
            Use Another Device
          </Button>

          <div className="absolute top-[408px] left-[calc(50.00%_-_116px)] w-[171px] h-5 flex items-center justify-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#f7f7f8] text-base text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
            Don&#39;t have an account?
          </div>

          <Button
            variant="link"
            className="absolute top-[408px] left-[calc(50.00%_+_60px)] w-14 h-5 h-auto p-0 [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#f7f7f8] text-[15.4px] text-center tracking-[0] leading-[22.4px] whitespace-nowrap hover:text-[#f7f7f8]"
          >
            Sign Up
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
