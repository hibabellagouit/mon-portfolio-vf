import { NavLink, Outlet } from "react-router-dom";

const navLinkBase =
  "relative text-sm font-medium text-slate-700 transition hover:text-pink-600 px-2 py-1 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full";

const navLinkActive =
  "text-pink-600 after:w-full";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-slate-900">

      {/* NAVBAR */}
      <header className="sticky top-0 z-20 border-b bg-white/30 backdrop-blur-xl shadow-lg">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">

          {/* LOGO */}
          <NavLink
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            Hiba
          </NavLink>

          {/* LINKS */}
          <div className="flex items-center gap-4">
            {[
              ["projects", "Projets"],
              ["experience", "Parcours"],
              ["education", "Formations"],
              ["certifications", "Certifications"],
              ["contact", "Contact"],
            ].map(([to, label]) => (
              <NavLink
                key={to}
                to={`/${to}`}
                className={({ isActive }) =>
                  `${navLinkBase} ${isActive ? navLinkActive : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      {/* CONTENT */}
      <main className="mx-auto max-w-5xl px-4 py-10 animate-fadeIn">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="py-6 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} • Hiba Bellagouit
      </footer>
    </div>
  );
}
