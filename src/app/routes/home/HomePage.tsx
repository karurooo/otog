import { AboutSection } from '@/features/about/components/organisms/AboutSection'
import { AthletesSection } from '@/features/athletes/components/organisms/AthletesSection'
import { ContactSection } from '@/features/contact/components/organisms/ContactSection'
import { EventsSection } from '@/features/events/components/organisms/EventsSection'
import { FacilitiesSection } from '@/features/facilities/components/organisms/FacilitiesSection'
import { GallerySection } from '@/features/gallery/components/organisms/GallerySection'
import { HeroSection } from '@/features/hero/components/organisms/HeroSection'
import { NewsSection } from '@/features/news/components/organisms/NewsSection'
import { ProgramsSection } from '@/features/programs/components/organisms/ProgramsSection'
import { ResourcesSection } from '@/features/resources/components/organisms/ResourcesSection'

// Section order matches the wireframe. Each section's `id` is the anchor NAV_ITEMS must point to.
export function HomePage() {
  return (
    <>
      <HeroSection /> {/* #home */}
      <AboutSection /> {/* #about */}
      <ProgramsSection /> {/* #programs */}
      <EventsSection /> {/* #events */}
      <FacilitiesSection /> {/* #facilities */}
      <AthletesSection /> {/* #athletes */}
      <NewsSection /> {/* #news */}
      <GallerySection /> {/* #gallery */}
      <ResourcesSection /> {/* #resources */}
      <ContactSection /> {/* #contact */}
    </>
  )
}
