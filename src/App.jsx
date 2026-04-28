import React, { useState } from 'react';
import { Navbar, ProgressBar, Sidebar } from './components/ui';
import { useMockData } from './hooks/useMockData';
import {
  AssessmentsPage,
  CertificationPage,
  CohortsPage,
  CommunityPage,
  CoursesPage,
  DashboardPage,
  LessonsPage,
  MentorsPage,
  SettingsPage
} from './pages';

const VIEWS = ['Dashboard', 'Cours', 'Leçons', 'Cohortes', 'Mentors', 'Communauté', 'Évaluations', 'Certificat', 'Paramètres'];

export default function App() {
  const [view, setView] = useState('Dashboard');
  const { data, loading } = useMockData();

  if (loading || !data) return <p>Chargement des données mockées...</p>;

  const pageProps = { data };
  const map = {
    Dashboard: <DashboardPage {...pageProps} />,
    Cours: <CoursesPage {...pageProps} />,
    Leçons: <LessonsPage {...pageProps} />,
    Cohortes: <CohortsPage {...pageProps} />,
    Mentors: <MentorsPage {...pageProps} />,
    Communauté: <CommunityPage {...pageProps} />,
    Évaluations: <AssessmentsPage {...pageProps} />,
    Certificat: <CertificationPage {...pageProps} />,
    Paramètres: <SettingsPage {...pageProps} />
  };

  return (
    <div className="layout">
      <Navbar user={data.user} />
      <Sidebar items={VIEWS} active={view} onSelect={setView} />
      <main>
        <h2>{view}</h2>
        <ProgressBar value={data.user.progress} />
        {map[view]}
      </main>
    </div>
  );
}
