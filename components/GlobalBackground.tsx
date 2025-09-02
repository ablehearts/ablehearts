export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden global-background">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient" />

      {/* Floating circles from mission section */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute top-1/3 right-[-5rem] w-96 h-96 bg-brand-light rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-[-6rem] left-1/4 w-80 h-80 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>

      {/* Additional mission decorative elements */}
      <div className="absolute top-[-40px] left-[-40px] w-64 h-64 bg-rose-300 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 bg-rose-400 rounded-full blur-3xl opacity-30"></div>
    </div>
  );
}
