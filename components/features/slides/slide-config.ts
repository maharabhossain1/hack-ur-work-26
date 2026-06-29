export type Slide = {
  path: string;
  title: string;
  label: string;
};

export const SLIDES: Slide[] = [
  { path: '/', title: 'Introduction', label: 'Hack Your Work · 2026' },
  {
    path: '/slides/morning-routine',
    title: 'The Morning Tax',
    label: 'Plot Schedule Task · 1/2',
  },
  {
    path: '/slides/morning-solution',
    title: 'Automated with /schedule',
    label: 'Plot Schedule Task · 2/2',
  },
  { path: '/slides/work-problem', title: 'The Coordination Tax', label: 'Work Demo · 1/2' },
  { path: '/slides/work-demo', title: 'Work Demo', label: 'Work Demo · 2/3' },
  { path: '/slides/work-execution', title: 'The Execution', label: 'Work Demo · 3/3' },
  {
    path: '/slides/thinking-partner',
    title: 'Thinking with AI',
    label: 'AI as Collaborator',
  },
  { path: '/slides/conclusion', title: 'The Blueprint', label: 'Conclusion' },
];
