import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ApplicationWrapper from "./components/layouts/ApplicationWrapper";
import RequireAuth from "./middlewares/AuthorizeRoutes";
import PersistLogin from "./middlewares/PersistLogin";
import UnAuthorizeRoutes from "./middlewares/UnAuthorizeRoutes";
import NotFound from "./pages/NotFound";
import min_admin_pages from "./routes/min_admin_pages";
import min_authorize_pages from "./routes/min_authorize_pages";
import min_moderator_pages from "./routes/min_moderator_pages";
import public_pages from "./routes/public_pages";
import unathorize_pages from "./routes/unathorize_pages";

export default function App() {
  useEffect(() => {
    import("preline");
  }, []);

  return (
    <ApplicationWrapper>
      <Routes>
        <Route element={<PersistLogin />}>
          {/* Open for everyone/public */}
          {Object.entries(public_pages).map(([key, ReactNode]) => (
            <Route key={key} path={key} element={<ReactNode />} />
          ))}

          {/* Only Un-Athorize, authorize user cannot access */}
          <Route element={<UnAuthorizeRoutes />}>
            {Object.entries(unathorize_pages).map(([key, ReactNode]) => (
              <Route key={key} path={key} element={<ReactNode />} />
            ))}
          </Route>

          {/* Only authenticated user can access */}
          <Route element={<RequireAuth min_role="user" />}>
            {Object.entries(min_authorize_pages).map(([key, ReactNode]) => (
              <Route key={key} path={key} element={<ReactNode />} />
            ))}
          </Route>

          {/* Minimum "moderator" role require for access these pages */}
          <Route path="/admin" element={<RequireAuth min_role="moderator" />}>
            {Object.entries(min_moderator_pages).map(([key, ReactNode]) => (
              <Route key={key} path={key} element={<ReactNode />} />
            ))}

            {/* Only "admin" role can access these pages */}
            <Route element={<RequireAuth min_role="admin" />}>
              {Object.entries(min_admin_pages).map(([key, ReactNode]) => (
                <Route key={key} path={key} element={<ReactNode />} />
              ))}
            </Route>
          </Route>
        </Route>

        {/* 404/Not-Found Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ApplicationWrapper>
  );
}
