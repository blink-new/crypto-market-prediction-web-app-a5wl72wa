import { useState, useEffect } from 'react'
import { createClient } from '@blinkdotnew/sdk'
import Header from './components/layout/Header'
import MarketOverview from './components/dashboard/MarketOverview'
import TopCryptos from './components/dashboard/TopCryptos'
import PriceChart from './components/dashboard/PriceChart'
import AIPredictions from './components/dashboard/AIPredictions'
import MarketSentiment from './components/dashboard/MarketSentiment'

const blink = createClient({
  projectId: 'crypto-market-prediction-web-app-a5wl72wa',
  authRequired: true
})

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading CryptoPulse...</div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">CryptoPulse</h1>
          <p className="text-slate-400 mb-8">AI-Powered Crypto Market Predictions</p>
          <button 
            onClick={() => blink.auth.login()}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Sign In to Continue
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header user={user} />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Market Overview */}
        <MarketOverview />
        
        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Charts and Top Cryptos */}
          <div className="lg:col-span-2 space-y-8">
            <PriceChart />
            <TopCryptos />
          </div>
          
          {/* Right Column - AI Predictions and Sentiment */}
          <div className="space-y-8">
            <AIPredictions />
            <MarketSentiment />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App