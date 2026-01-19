
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
}

export interface PillarDetail {
  label: string;
  text: string;
  statValue?: string;
  statUnit?: string;
  statColor?: string;
}

export interface PillarData {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  details: PillarDetail[];
  visualUrl: string;
  visualType: 'image' | 'video';
}

export interface TimelineEvent {
  phase: string;
  title: string;
  desc: string;
  items: string[];
}
