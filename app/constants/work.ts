import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '01',
    title: 'Discovery',
    subtitle: 'Analisi brand e mercato',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '02',
    title: 'Strategia',
    subtitle: 'Comunicazione e marketing',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '03',
    title: 'Design',
    subtitle: 'UI/UX e identità visiva',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '04',
    title: 'Sviluppo',
    subtitle: 'Web e digital presence',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: '05',
    title: 'Launch & Grow',
    subtitle: 'SEO, ADV e crescita',
    position: 'right',
  }
]
