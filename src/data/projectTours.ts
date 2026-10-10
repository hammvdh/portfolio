// Scripted "tours" over each project's screenshot: the camera pans/zooms to a point, an
// optional cursor moves there and clicks, and a caption explains what's on screen.
// All coordinates are fractions of the image (0–1), so they survive re-exported screenshots
// as long as the layout doesn't move. Tune by eye on the home page. Prayr's camera stays above
// y≈0.75, where the screenshot's placeholder FAQ copy starts.

export interface TourStep {
  /** camera focus point */
  x: number;
  y: number;
  /** 1 = image covers the frame; 2 = twice that */
  zoom: number;
  caption: string;
  /** where the cursor moves and clicks; omit for a camera-only step */
  click?: { x: number; y: number };
  /** how long to hold this step, ms (default 3200) */
  hold?: number;
}

export interface Tour {
  src: string;
  width: number;
  height: number;
  alt: string;
  steps: TourStep[];
}

export const projectTours: Record<string, Tour> = {
  requester: {
    src: '/images/projects/requester.png',
    width: 1024,
    height: 576,
    alt: 'Requester workflow builder: a trigger, a team-approval review step and a completion step, with the step properties panel open.',
    steps: [
      { x: 0.53, y: 0.5, zoom: 1, caption: 'The workflow builder', hold: 2600 },
      { x: 0.54, y: 0.5, zoom: 2.3, caption: 'Approvals are steps on a canvas', click: { x: 0.539, y: 0.5 } },
      { x: 0.83, y: 0.44, zoom: 2.1, caption: 'Route a step to the team that owns it', click: { x: 0.83, y: 0.466 } },
      { x: 0.28, y: 0.44, zoom: 2.2, caption: 'Drop in actions and notifications', click: { x: 0.27, y: 0.453 } },
      { x: 0.86, y: 0.16, zoom: 2.6, caption: 'Save, and every request follows it', click: { x: 0.877, y: 0.137 } },
    ],
  },
  prayr: {
    src: '/images/projects/prayr.png',
    width: 1319,
    height: 989,
    alt: 'Prayr landing page: the headline, feature tags, and a dashboard preview showing prayer times in Kandy.',
    steps: [
      { x: 0.5, y: 0.42, zoom: 1, caption: 'Your day, organised around prayer', hold: 2600 },
      { x: 0.5, y: 0.34, zoom: 1.9, caption: 'Prayer times, tracking, Qur’an, du’as', click: { x: 0.512, y: 0.387 } },
      { x: 0.4, y: 0.57, zoom: 2.6, caption: 'Times for wherever you are', click: { x: 0.279, y: 0.684 } },
      { x: 0.74, y: 0.55, zoom: 2.6, caption: 'Change city or calculation method', click: { x: 0.784, y: 0.556 } },
    ],
  },
  vital: {
    src: '/images/projects/vital.png',
    width: 1440,
    height: 1200,
    alt: 'Vital mobile app screens: onboarding, blood pressure history, health assessment, measurements dashboard and assessment history.',
    steps: [
      { x: 0.5, y: 0.5, zoom: 1, caption: 'Remote monitoring, from the patient’s phone', hold: 2600 },
      { x: 0.46, y: 0.24, zoom: 2.1, caption: 'Every reading, classified', click: { x: 0.552, y: 0.17 } },
      { x: 0.7, y: 0.18, zoom: 2.1, caption: 'Health status at a glance', click: { x: 0.78, y: 0.088 } },
      { x: 0.44, y: 0.74, zoom: 2, caption: 'Vitals trends from home devices', click: { x: 0.41, y: 0.81 } },
      { x: 0.73, y: 0.7, zoom: 2.1, caption: 'Risk flagged before it’s critical', click: { x: 0.811, y: 0.7 } },
    ],
  },
};
