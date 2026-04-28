import React, { useMemo, useState } from 'react';
import { Accordion, Badge, Button, Card, FilterBar, Input, Modal, Notification, Tabs } from '../components/ui';
import {
  CertificatePreview,
  ChatIA,
  CohortCard,
  CourseCard,
  ForumThreads,
  Leaderboard,
  LessonCard,
  MentorCard,
  QuizMockup,
  VideoMockup
} from '../components/domainCards';

export function DashboardPage({ data }) {
  return (
    <div className="grid">
      {data.dashboard.stats.map((s) => <Card key={s.label} title={s.label}>{s.value}</Card>)}
      {data.dashboard.notifications.map((n) => <Notification key={n.id} {...n} />)}
      <ChatIA messages={data.chat.messages} />
      <Leaderboard users={data.leaderboard} />
    </div>
  );
}

export function CoursesPage({ data }) {
  const [filter, setFilter] = useState('Tous');
  const options = ['Tous', ...new Set(data.courses.map((c) => c.category))];
  const filtered = useMemo(() => filter === 'Tous' ? data.courses : data.courses.filter((c) => c.category === filter), [data.courses, filter]);

  return (
    <div>
      <FilterBar options={options} value={filter} onChange={setFilter} />
      <div className="grid">{filtered.map((course) => <CourseCard key={course.id} course={course} />)}</div>
    </div>
  );
}

export function LessonsPage({ data }) {
  return <div className="grid">{data.lessons.map((lesson) => <LessonCard key={lesson.id} lesson={lesson} />)}</div>;
}

export function CohortsPage({ data }) {
  return <div className="grid">{data.cohorts.map((cohort) => <CohortCard key={cohort.id} cohort={cohort} />)}</div>;
}

export function MentorsPage({ data }) {
  return <div className="grid">{data.mentors.map((mentor) => <MentorCard key={mentor.id} mentor={mentor} />)}</div>;
}

export function CommunityPage({ data }) {
  return (
    <div className="grid">
      <ForumThreads threads={data.forumThreads} />
      <Accordion items={data.forumThreads.map((t) => ({ title: t.title, content: `Tags: ${t.tags.join(', ')}` }))} />
      <Input label="Nouveau sujet" placeholder="Titre du thread" />
      <Button>Publier</Button>
    </div>
  );
}

export function CertificationPage({ data }) {
  return <CertificatePreview certificate={data.certificate} />;
}

export function AssessmentsPage({ data }) {
  const [tab, setTab] = useState('Quiz');
  return (
    <div>
      <Tabs tabs={['Quiz', 'Vidéo']} active={tab} onChange={setTab} />
      {tab === 'Quiz' ? <QuizMockup quiz={data.quiz} /> : <VideoMockup video={data.video} />}
      <Badge tone="info">Mode mockup</Badge>
    </div>
  );
}

export function SettingsPage() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Card title="Paramètres profil">
        <Input label="Nom" defaultValue="Amina Dia" />
        <Button onClick={() => setOpen(true)}>Sauvegarder</Button>
      </Card>
      <Modal open={open} title="Sauvegarde" onClose={() => setOpen(false)}>
        <p>Les paramètres mock ont été enregistrés localement.</p>
      </Modal>
    </div>
  );
}
