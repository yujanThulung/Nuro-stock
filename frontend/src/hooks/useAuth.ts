import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constant/constant";

// ─────────────────────────────────────────────
//  Types (exported for use in AuthProvider, auth.api.ts, etc.)
// ─────────────────────────────────────────────
export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface AuthData {
  token: string;
  user: AuthUser;
}

// ─────────────────────────────────────────────
//  useAuth — reads auth state from TanStack Query cache
//
//  NOTE: enabled: false means this hook NEVER makes a network request.
//  It only reads what AuthProvider seeded from localStorage on boot,
//  or what useLoginMutation wrote after a successful login.
//
//  Usage:
//    const { isAuthenticated, user } = useAuth();
// ─────────────────────────────────────────────
export const useAuth = () => {
  const { data, isLoading } = useQuery<AuthData>({
    queryKey: [QUERY_KEYS.AUTH],
    enabled: false,
    staleTime: Infinity,
  });

  return {
    data,
    isAuthenticated: !!data?.token,
    user: data?.user,
    isLoading,
  };
};
