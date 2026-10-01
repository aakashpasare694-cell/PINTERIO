import React from 'react';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import BrandStatement from '../components/BrandStatement';
import FeaturedProjects from '../components/FeaturedProjects';
import ProjectGrid from '../components/ProjectGrid';
import ServiceList from '../components/ServiceList';
import AboutSection from '../components/AboutSection';
import PhilosophySection from '../components/PhilosophySection';
import StatsSection from '../components/StatsSection';
import MaterialsSection from '../components/MaterialsSection';
import TestimonialSection from '../components/TestimonialSection';
import JournalSection from '../components/JournalSection';
import InstagramSection from '../components/InstagramSection';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <PageTransition>
      <main className="w-full overflow-x-hidden">
        {/* 1. Cinematic Hero */}
        <Hero />

        {/* 2. Brand Statement */}
        <BrandStatement />

        {/* 3. Featured Projects */}
        <FeaturedProjects />

        {/* 4. Explore Our Work Portfolio Grid */}
        <ProjectGrid showHeading={true} />

        {/* 5. Services Section */}
        <ServiceList />

        {/* 6. About Pinterio */}
        <AboutSection />

        {/* 7. Design Philosophy */}
        <PhilosophySection />

        {/* 8. Numbers / Statistics */}
        <StatsSection />

        {/* 9. Material / Details */}
        <MaterialsSection />

        {/* 10. Testimonials */}
        <TestimonialSection />

        {/* 11. Journal / Insights */}
        <JournalSection limit={3} />

        {/* 12. Instagram / Social */}
        <InstagramSection />

        {/* 13. Final CTA */}
        <FinalCTA />
      </main>
    </PageTransition>
  );
}
