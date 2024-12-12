import React from "react";
import BannerSection from "../../components/bannerSection/BannerSection";
import ArrivalSection from "../../components/arrivalSection/ArrivalSection";
import TopSellingSection from "../../components/topSellingSection/TopSellingSection";
import BrowseByDressStyle from "../../components/browsebydress/BrowseByDressStyle";
import OurHappy from "../../components/ourhappycustmoers/OurHappy";

export default function HomePage() {
  return (
    <div>
      <BannerSection />
      <ArrivalSection />
      <hr />
      <TopSellingSection />
      <BrowseByDressStyle />
      <OurHappy />
    </div>
  );
}
