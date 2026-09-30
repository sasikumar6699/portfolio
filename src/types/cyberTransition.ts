export type DoorMode = 'industrial' | 'cyan' | 'amber' | 'violet' | 'crimson' | 'rose';

export interface DoorTheme {
  id: DoorMode;
  name: string;
  label: string;
  code: string;
  primary: string;       // e.g. '#22c55e'
  secondary: string;     // e.g. '#4ade80'
  rgb: string;           // e.g. '34, 197, 94'
  borderClass: string;
  textClass: string;
  glowClass: string;
  dotColor: string;
  badgeBg: string;
}

export const DOOR_THEMES: Record<DoorMode, DoorTheme> = {
  industrial: {
    id: 'industrial',
    name: 'Industrial Green',
    label: 'GREEN',
    code: 'IND-GRN',
    primary: '#22c55e',
    secondary: '#4ade80',
    rgb: '34, 197, 94',
    borderClass: 'border-emerald-500/40',
    textClass: 'text-emerald-400',
    glowClass: 'shadow-[0_0_15px_#22c55e,0_0_35px_#22c55e]',
    dotColor: '#22c55e',
    badgeBg: 'bg-emerald-500/10',
  },
  cyan: {
    id: 'cyan',
    name: 'Cyber Cyan',
    label: 'CYAN',
    code: 'CYB-CYN',
    primary: '#06b6d4',
    secondary: '#22d3ee',
    rgb: '6, 182, 212',
    borderClass: 'border-cyan-500/40',
    textClass: 'text-cyan-400',
    glowClass: 'shadow-[0_0_15px_#06b6d4,0_0_35px_#06b6d4]',
    dotColor: '#06b6d4',
    badgeBg: 'bg-cyan-500/10',
  },
  amber: {
    id: 'amber',
    name: 'Circuit Amber',
    label: 'AMBER',
    code: 'CKT-AMB',
    primary: '#f59e0b',
    secondary: '#fbbf24',
    rgb: '245, 158, 11',
    borderClass: 'border-amber-500/40',
    textClass: 'text-amber-400',
    glowClass: 'shadow-[0_0_15px_#f59e0b,0_0_35px_#f59e0b]',
    dotColor: '#f59e0b',
    badgeBg: 'bg-amber-500/10',
  },
  violet: {
    id: 'violet',
    name: 'Synth Violet',
    label: 'VIOLET',
    code: 'SYN-VIO',
    primary: '#a855f7',
    secondary: '#c084fc',
    rgb: '168, 85, 247',
    borderClass: 'border-purple-500/40',
    textClass: 'text-purple-400',
    glowClass: 'shadow-[0_0_15px_#a855f7,0_0_35px_#a855f7]',
    dotColor: '#a855f7',
    badgeBg: 'bg-purple-500/10',
  },
  crimson: {
    id: 'crimson',
    name: 'Crimson Hazard',
    label: 'CRIMSON',
    code: 'HAZ-RED',
    primary: '#ef4444',
    secondary: '#f87171',
    rgb: '239, 68, 68',
    borderClass: 'border-red-500/40',
    textClass: 'text-red-400',
    glowClass: 'shadow-[0_0_15px_#ef4444,0_0_35px_#ef4444]',
    dotColor: '#ef4444',
    badgeBg: 'bg-red-500/10',
  },
  rose: {
    id: 'rose',
    name: 'Neon Rose',
    label: 'ROSE',
    code: 'NEO-ROS',
    primary: '#ec4899',
    secondary: '#f472b6',
    rgb: '236, 72, 153',
    borderClass: 'border-pink-500/40',
    textClass: 'text-pink-400',
    glowClass: 'shadow-[0_0_15px_#ec4899,0_0_35px_#ec4899]',
    dotColor: '#ec4899',
    badgeBg: 'bg-pink-500/10',
  },
};
