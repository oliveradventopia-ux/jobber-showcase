export function MeshGradient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-solution-blue/15 blur-3xl animate-mesh-drift" />
      <div
        className="absolute top-20 -right-24 h-[480px] w-[480px] rounded-full bg-solution-violet/12 blur-3xl animate-mesh-drift"
        style={{ animationDelay: '-7s' }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-solution-emerald/10 blur-3xl animate-mesh-drift"
        style={{ animationDelay: '-14s' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,transparent_0%,#f8fafc_75%)]" />
    </div>
  );
}
