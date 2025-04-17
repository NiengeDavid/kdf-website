export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>; // Render only the Studio content without any layout or header
}
