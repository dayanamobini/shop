import { BenefitsBar } from '../components/home/BenefitsBar'
import { BestSellers } from '../components/home/BestSellers'
import { BrandStory } from '../components/home/BrandStory'
import { CategoryStrip } from '../components/home/CategoryStrip'
import { CollectionsSection } from '../components/home/CollectionsSection'
import { EditorialSection } from '../components/home/EditorialSection'
import { FeaturedProducts } from '../components/home/FeaturedProducts'
import { Hero } from '../components/home/Hero'
import { Lookbook } from '../components/home/Lookbook'
import { MoodSection } from '../components/home/MoodSection'
import { NewArrivals } from '../components/home/NewArrivals'
import { Newsletter } from '../components/home/Newsletter'
import { SocialGallery } from '../components/home/SocialGallery'

export function HomePage() {
  return (
    <>
      <Hero />
      <CategoryStrip />
      <EditorialSection />
      <FeaturedProducts />
      <MoodSection />
      <CollectionsSection />
      <NewArrivals />
      <BestSellers />
      <Lookbook />
      <BrandStory />
      <SocialGallery />
      <Newsletter />
      <BenefitsBar />
    </>
  )
}
