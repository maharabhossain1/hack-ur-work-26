export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      {/* TODO: add sidebar / topbar */}
      <main className="p-6">{children}</main>
    </div>
  );
}
