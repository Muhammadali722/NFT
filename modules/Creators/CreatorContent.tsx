import { CreatorType } from "@/@types/CreatorType";
import { Button, CreatorCard, Heading, Text } from "@/components";
import Link from "next/link";
import { FC } from "react";

const CreatorContent: FC<{ creators: CreatorType[] }> = ({ creators }) => {
  return (
    <section className="py-12 md:py-20 lg:py-[80px] bg-transparent">
      <div className="containers">
        {/* Header with responsive layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-10 md:mb-14 lg:mb-[60px]gap-6 md:gap-8">
          {/* Text Content */}
          <div className="text-start lg:text-left max-w-2xl">
            <Heading
              classList="
                        !mb-3 md:!mb-4 lg:!mb-[10px]
                        text-3xl md:text-4xl lg:text-5xl
                    "
              tag="h2"
            >
              Top Creators
            </Heading>
            <Text
              classList="
                    !text-base md:!text-lg lg:!text-[22px]
                    text-gray-300
                "
            >
              Checkout Top Rated Creators on the NFT Marketplace
            </Text>
          </div>

          {/* Button - hidden on mobile, visible on tablet+ */}
          <div className="hidden md:block">
            <Link href={"/rankings"}>
              {" "}
              <Button classList="px-8 py-4 text-lg hover:scale-105 transition-transform">
                View Rankings
              </Button>{" "}
            </Link>
          </div>
        </div>

        {/* Creators Grid */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-4 sm:gap-6 
            lg:gap-5 
            xl:gap-6
            justify-items-center
            auto-rows-fr
        "
        >
          {creators.map((item, index) => (
            <div key={item.id} className="w-full flex justify-center">
              <CreatorCard item={item} index={index} />
            </div>
          ))}
        </div>

        {/* Mobile Only Button */}
        <div className="flex justify-center mt-10 md:mt-12 lg:hidden">
        <Link href={"/rankings"}>
              {" "}
              <Button classList="px-8 py-4 text-lg hover:scale-105 transition-transform">
                View Rankings
              </Button>{" "}
            </Link>
        </div>
      </div>
    </section>
  );
};

export default CreatorContent;
