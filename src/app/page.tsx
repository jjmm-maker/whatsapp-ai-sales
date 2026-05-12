export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-700 flex flex-col items-center justify-center p-8 text-white">
      <div className="text-center max-w-4xl mx-auto">
        {/* Hero */}
        <div className="emoji mb-8 animate-bounce">🚀</div>
        <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
          WhatsApp AI Sales
        </h1>
        <p className="text-2xl md:text-3xl mb-12 opacity-90 font-semibold">
          Your 24/7 AI Sales Assistant
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 p-8 bg-black/20 rounded-3xl">
          <div className="text-center">
            <div className="emoji mb-2">💬</div>
            <div className="text-4xl font-black text-yellow-400">24/7</div>
            <div>Replies</div>
          </div>
          <div className="text-center">
            <div className="emoji mb-2">💰</div>
            <div className="text-4xl font-black text-yellow-400">UGX 30K</div>
            <div>/month</div>
          </div>
          <div className="text-center">
            <div className="emoji mb-2">⚡</div>
            <div className="text-4xl font-black text-yellow-400">Instant</div>
            <div>Setup</div>
          </div>
        </div>

        {/* API */}
        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <span className="emoji mr-4">🔌</span>
            Live API Endpoint
          </h2>
          <div className="bg-black/50 p-6 rounded-2xl">
            <code className="text-xl break-all font-mono">
              https://whatsapp-ai-sales.onrender.com/api/whatsapp
            </code>
          </div>
          <p className="mt-4 text-lg opacity-90">✅ Status: LIVE</p>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <a 
            href="https://wa.me/256771234567?text=AI%20WhatsApp%20setup" 
            className="block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-xl font-bold py-6 px-12 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 text-center"
          >
            💬 Setup WhatsApp Now (UGX 30K)
          </a>
          <p className="opacity-75 text-lg">Kampala shoe shops, salons, clinics</p>
        </div>

        {/* Footer */}
        <div className="mt-24 opacity-75">
          <p>Live on Render.com • Ready for 1000s customers</p>
        </div>
      </div>
    </main>
  );
}