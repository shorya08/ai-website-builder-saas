export default function Create() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Create New Website</h1>

        <form className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2">Website Name</label>
            <input 
              type="text" 
              className="w-full p-3 border rounded-lg"
              placeholder="My Awesome Website"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Website Type</label>
            <select className="w-full p-3 border rounded-lg">
              <option>Portfolio</option>
              <option>Blog</option>
              <option>E-commerce</option>
              <option>Landing Page</option>
              <option>Custom</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Describe Your Website</label>
            <textarea 
              className="w-full p-3 border rounded-lg h-40"
              placeholder="I want a modern portfolio website showcasing my design work with a gallery, about me section, and contact form..."
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-purple-700"
          >
            🤖 Generate Website with AI
          </button>
        </form>
      </div>
    </div>
  )
}