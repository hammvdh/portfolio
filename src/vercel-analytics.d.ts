declare module '@vercel/analytics/react' {
  export interface AnalyticsProps {
    beforeSend?: (event: any) => any | null;
    debug?: boolean;
    mode?: 'auto' | 'development' | 'production';
    route?: string | null;
    disableAutoTrack?: boolean;
    scriptSrc?: string;
    endpoint?: string;
    dsn?: string;
  }

  export function Analytics(props?: AnalyticsProps): null;
  export function track(
    name: string,
    properties?: Record<string, string | number | boolean | null>,
    options?: { flags?: any }
  ): void;
}

