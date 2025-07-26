import { Button } from '../ui/button'
import { createClient } from '@blinkdotnew/sdk'

const blink = createClient({
  projectId: 'crypto-market-prediction-web-app-a5wl72wa',
  authRequired: true
})

interface HeaderProps {
  user: any
}

export default function Header({ user }: HeaderProps) {
  return (
    <header className="bg-slate-800 border-b border-slate-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-white">CryptoPulse</h1>
          <span className="text-sm text-slate-400">AI Market Predictor</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-slate-300 hover:text-white transition-colors">Dashboard</a>
          <a href="#" className="text-slate-300 hover:text-white transition-colors">Analysis</a>
          <a href="#" className="text-slate-300 hover:text-white transition-colors">Predictions</a>
          <a href="#" className="text-slate-300 hover:text-white transition-colors">Portfolio</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <span className="text-sm text-slate-400">Welcome, {user?.email}</span>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => blink.auth.logout()}
            className="border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            Sign Out
          </Button>
        </div>
      </div>
    </header>
  )
}