import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import { USER_ROLE } from "@/constant/constant";
import GlobalLoader from "@/pages/GlobalLoader";
import { ProtectedRoute, PublicRoute } from ".";

// Lazy load heavy page-level components for code splitting
const Landing = lazy(() => import("@/features/landing").then((m) => ({ default: m.Landing })));
const LoginPage = lazy(() => import("@/features/auth").then((m) => ({ default: m.LoginPage })));
const RegisterPage = lazy(() => import("@/features/auth").then((m) => ({ default: m.RegisterPage })));
const DashboardLayout = lazy(() => import("@/features/dashboard").then((m) => ({ default: m.DashboardLayout })));
const DashboardHome = lazy(() => import("@/features/dashboard").then((m) => ({ default: m.DashboardHome })));
const UnauthorizedPage = lazy(() => import("@/pages/UnauthorizedPage"));
const PageNotFound = lazy(() => import("@/pages/PageNotFound"));
const ServerError = lazy(() => import("@/pages/ServerError"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<GlobalLoader />}>
      <Routes>
        {/* ── Public (no auth required) ── */}
        <Route path={ROUTES.HOME} element={<Landing />} />
        <Route path={ROUTES.UNAUTHORIZED} element={<UnauthorizedPage />} />
        <Route path={ROUTES.SERVER_ERROR} element={<ServerError />} />

        {/* ── Guest Only (redirects to dashboard if already logged in) ── */}
        <Route element={<PublicRoute />}>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        </Route>

        {/* ── Protected: user + admin ── */}
        <Route element={<ProtectedRoute allowedRoles={[USER_ROLE.USER, USER_ROLE.ADMIN]} />}>
          <Route path={ROUTES.DASHBOARD} element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            {/* Add nested routes here as the app grows */}
            {/* <Route path="analytics" element={<Analytics />} /> */}
          </Route>
        </Route>

        {/* ── Protected: admin only ── */}
        <Route element={<ProtectedRoute allowedRoles={[USER_ROLE.ADMIN]} />}>
          {/* Add admin-only routes here */}
        </Route>

        {/* ── 404 catch-all ── */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;