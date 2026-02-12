import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            DreamClimb
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find the perfect boulder for you in Fontainebleau !
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          
          <a href="/explore" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">🧗 Explore Boulders</h2>
            <p className="text-gray-600">Filter by sector, grade, and style</p>
          </a>

          <a href="/about" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">📖 About</h2>
            <p className="text-gray-600">Learn about the project</p>
          </a>

          <a href="/contact" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">✉️ Contact</h2>
            <p className="text-gray-600">Get in touch</p>
          </a>

        </div>
      </div>
    </div>
  );
}