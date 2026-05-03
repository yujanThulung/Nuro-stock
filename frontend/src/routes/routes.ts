/**
 * ROUTE PATHS
 * Single source of truth for all route strings.
 * Import ROUTES wherever you need to navigate or guard — no more hardcoded "/login" strings.
 */
export const ROUTES = {
  // Public
  HOME: "/",
  UNAUTHORIZED: "/unauthorized",
  SERVER_ERROR: "/server-error",

  // Auth (guest only)
  LOGIN: "/login",
  REGISTER: "/register",

  // Protected
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  PREDICTIONS: "/predictions",
  SETTINGS: "/settings",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];

/**
 * SIDEBAR / NAV ROUTE DEFINITIONS
 * Used by sidebars, navigation menus, breadcrumbs, etc.
 * Keep UI metadata (icon, label) here; keep page components in AppRoutes.tsx.
 */
export interface RouteDefinition {
  name: string;
  key: string;
  path: AppRoute;
  icon?: string; // icon class name (e.g. Font Awesome)
  label: string;
  roles?: string[]; // which roles can see this nav item
}

export const NAV_ROUTES: RouteDefinition[] = [
  {
    name: "Dashboard",
    key: "dashboard",
    path: ROUTES.DASHBOARD,
    icon: "fas fa-tachometer-alt",
    label: "Dashboard",
    roles: ["user", "admin"],
  },
  {
    name: "Predictions",
    key: "predictions",
    path: ROUTES.PREDICTIONS,
    icon: "fas fa-chart-line",
    label: "Predictions",
    roles: ["user", "admin"],
  },
  {
    name: "Profile",
    key: "profile",
    path: ROUTES.PROFILE,
    icon: "fas fa-user",
    label: "Profile",
    roles: ["user", "admin"],
  },
  {
    name: "Settings",
    key: "settings",
    path: ROUTES.SETTINGS,
    icon: "fas fa-cog",
    label: "Settings",
    roles: ["user", "admin"],
  },
];