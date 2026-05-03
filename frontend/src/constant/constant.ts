// ================= STORAGE KEYS (from .env, with fallback) =================
// These are the ONLY place token/user keys are defined.
// All other files import from here — no hardcoded strings.
export const TOKEN_KEY: string =
  import.meta.env.VITE_ACCESS_TOKEN_KEY || "sp_access_token";

export const USER_KEY: string =
  import.meta.env.VITE_USER_KEY || "sp_user";

// ================= API ENDPOINTS =================
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    ME: "/auth/me",
  },
  STOCK: {
    PREDICT: "/stock/predict",
    HISTORY: "/stock/history",
    SEARCH: "/stock/search",
  },
  PERMISSION: "/permission",
} as const;

// ================= QUERY KEYS =================
// Use these in useQuery / queryClient.invalidateQueries to avoid typos
export const QUERY_KEYS = {
  AUTH: "auth",
  PERMISSIONS: "permissions",
  STOCK_HISTORY: "stock-history",
  STOCK_PREDICT: "stock-predict",
} as const;

// ================= USER ROLES =================
export const USER_ROLE = {
  ADMIN: "admin",
  USER: "user",
} as const;

export type UserRole = (typeof USER_ROLE)[keyof typeof USER_ROLE];

// ================= STATUS =================
export const STATUS_ENUM = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  SUSPENDED: "suspended",
} as const;

// ================= TOKEN / JOB STATUS =================
export const TokenStatus = {
  QUEUE: "IN_QUEUE",
  RUNNING: "RUNNING",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
} as const;
