import { useDocumentMeta } from '../lib/hooks';
import { Hero } from '../components/home/Hero';
import { Stats } from '../components/home/Stats';
import { Services } from '../components/home/Services';
import { WhyWebeko } from '../components/home/WhyWebeko';
import { Process } from '../components/home/Process';
import { PortfolioSection } from '../components/home/PortfolioSection';
import { FeaturedProject } from '../components/home/FeaturedProject';
import { Solutions } from '../components/home/Solutions';
import { TechStack } from '../components/home/TechStack';
import { Testimonials } from '../components/home/Testimonials';
import { Faq } from '../components/home/Faq';
import { FinalCta } from '../components/home/FinalCta';
import { ContactSection } from '../components/home/ContactSection';

export function HomePage() {
  useDocumentMeta(
    'Webeko — طراحی وب‌سایت و تجربه‌های دیجیتال',
    'Webeko استودیوی طراحی وب‌سایت، فروشگاه اینترنتی و تجربه کاربری برای برندهایی که می‌خواهند متفاوت دیده شوند.',
  );

  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <WhyWebeko />
      <Process />
      <PortfolioSection />
      <FeaturedProject />
      <Solutions />
      <TechStack />
      <Testimonials />
      <Faq />
      <FinalCta />
      <ContactSection />
    </>
  );
}
