    import { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import ArticleForm from "./pages/ArticleForm";

export default function AdminLayout() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "users":
        return <Users />;

      case "articles":
        return <ArticleForm />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="flex-1 p-8 overflow-auto">
        {renderPage()}
      </main>

    </div>
  );
}