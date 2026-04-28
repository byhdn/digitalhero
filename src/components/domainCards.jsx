import React from 'react';
import { Badge, Card, ProgressBar } from './ui';

export const CourseCard = ({ course }) => (
  <Card title={course.title} footer={<ProgressBar value={course.progress} />}>
    <Badge tone="info">{course.category}</Badge>
    <p>{course.level} · {course.lessons} leçons · {course.duration}</p>
    <p>Mentor: {course.mentor}</p>
  </Card>
);

export const LessonCard = ({ lesson }) => (
  <Card title={lesson.title}>
    <Badge tone={lesson.status === 'done' ? 'success' : 'neutral'}>{lesson.status}</Badge>
    <p>{lesson.type} · {lesson.duration}</p>
  </Card>
);

export const CohortCard = ({ cohort }) => (
  <Card title={cohort.name}>
    <p>Parcours: {cohort.track}</p>
    <p>{cohort.members} membres</p>
    <p>Prochaine session: {cohort.nextSession}</p>
  </Card>
);

export const MentorCard = ({ mentor }) => (
  <Card title={mentor.name}>
    <p>{mentor.specialty}</p>
    <p>⭐ {mentor.rating}</p>
    <p>Disponibilité: {mentor.availability}</p>
  </Card>
);

export const ChatIA = ({ messages }) => (
  <Card title="Assistant IA">
    {messages.map((msg) => <p key={msg.id}><strong>{msg.sender}:</strong> {msg.text}</p>)}
  </Card>
);

export const ForumThreads = ({ threads }) => (
  <Card title="Forum">
    {threads.map((thread) => <p key={thread.id}>{thread.title} — {thread.replies} réponses</p>)}
  </Card>
);

export const Leaderboard = ({ users }) => (
  <Card title="Leaderboard">
    <ol>{users.map((u) => <li key={u.id}>{u.name} ({u.xp} XP)</li>)}</ol>
  </Card>
);

export const CertificatePreview = ({ certificate }) => (
  <Card title="Aperçu certificat">
    <p>{certificate.student}</p>
    <p>{certificate.course}</p>
    <p>{certificate.date}</p>
    <p>{certificate.id}</p>
  </Card>
);

export const QuizMockup = ({ quiz }) => (
  <Card title={quiz.title}>
    <p>{quiz.question}</p>
    <ul>{quiz.choices.map((choice) => <li key={choice}>{choice}</li>)}</ul>
  </Card>
);

export const VideoMockup = ({ video }) => (
  <Card title="Lecteur vidéo">
    <p>{video.title}</p>
    <p>Durée: {video.duration}</p>
    <p>Formateur: {video.instructor}</p>
  </Card>
);
