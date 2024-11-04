import React from 'react'
import BannerSection from '../../components/bannerSection/BannerSection'
import ArrivalSection from '../../components/arrivalSection/ArrivalSection'
import TopSellingSection from '../../components/topSellingSection/TopSellingSection'

export default function HomePage() {
  return (
    <div>
      <BannerSection />
      <ArrivalSection />
      <hr />
      <TopSellingSection />
    </div>
  )
}
