export default function PhotoCard() {
  return (
    <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-xl
                    bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20
                    border border-white/20 backdrop-blur">
      <img
        src="/profile1.jpg"
        alt="Hiba"
        className="w-full h-full object-cover rounded-3xl"
      />

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none
                      bg-gradient-to-br from-pink-400/10 via-purple-400/10 to-blue-400/10
                      animate-pulse"></div>
    </div>
  );
}
