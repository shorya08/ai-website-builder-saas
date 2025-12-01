export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-600">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-6">
            Transform Ideas into Websites with AI
          </h1>
          <p className="text-2xl mb-8">
            Describe your website idea and let AI build it for you
          </p>
          <div className="space-x-4">
            <a href="/create" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
              Get Started Free
            </a>
            <a href="/dashboard" className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600">
              View Dashboard
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">🤖 AI Powered</h3>
            <p>Advanced AI generates custom websites based on your description</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">⚡ Fast</h3>
            <p>Get your website in minutes, not weeks</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">💎 Premium</h3>
            <p>Hosting and custom domains with premium plans</p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold">Free</h3>
              <p className="text-4xl font-bold my-4">$0</p>
              <ul className="text-left space-y-2">
                <li>✓ 1 Website</li>
                <li>✓ Basic AI</li>
                <li>✓ Community Support</li>
              </ul>
            </div>
            <div className="bg-purple-600 text-white p-8 rounded-xl transform scale-105">
              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="text-4xl font-bold my-4">$29</p>
              <ul className="text-left space-y-2">
                <li>✓ 10 Websites</li>
                <li>✓ Advanced AI</li>
                <li>✓ Custom Domains</li>
                <li>✓ Priority Support</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <p className="text-4xl font-bold my-4">$99</p>
              <ul className="text-left space-y-2">
                <li>✓ Unlimited Websites</li>
                <li>✓ White Label</li>
                <li>✓ API Access</li>
                <li>✓ Dedicated Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}