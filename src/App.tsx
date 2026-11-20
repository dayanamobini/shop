import { RouterProvider, useRouter } from './lib/router';
import { ToastProvider } from './components/ui/Toast';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';

function Routes() {
  const { path } = useRouter();
  const segments = path.split('/').filter(Boolean);

  if (path === '/') return <HomePage />;
  if (path === '/services') return <ServicesPage />;
  if (segments[0] === 'services' && segments[1]) return <ServiceDetailPage slug={segments[1]} />;
  if (path === '/portfolio') return <PortfolioPage />;
  if (segments[0] === 'portfolio' && segments[1]) return <ProjectDetailPage slug={segments[1]} />;
  if (path === '/about') return <AboutPage />;
  if (path === '/contact') return <ContactPage />;
  if (path === '/terms') return <LegalPage kind="terms" />;
  if (path === '/privacy') return <LegalPage kind="privacy" />;
  return <NotFoundPage />;
}

export default function App() {
  return (
    <RouterProvider>
      <ToastProvider>
        <Layout>
          <ErrorBoundary>
            <Routes />
          </ErrorBoundary>
        </Layout>
      </ToastProvider>
    </RouterProvider>
  );
}
