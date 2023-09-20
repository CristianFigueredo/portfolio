export const MEDIA_QUERY_BREAKPOINTS = {
  SMALL: '(min-width: 600px)',
  MEDIUM: '(min-width: 768px)',
  LARGE: '(min-width: 992px)',
  EXTRA_LARGE: '(min-width: 1200px)',
  XXL: '(min-width: 1536px)',
} as const

export type TBreakpoint = keyof typeof MEDIA_QUERY_BREAKPOINTS
