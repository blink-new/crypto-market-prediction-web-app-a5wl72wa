import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Brain, TrendingUp, Target, Clock } from 'lucide-react'

export default function AIPredictions() {
  const predictions = [
    {
      crypto: 'Bitcoin',
      symbol: 'BTC',
      prediction: 'Bullish',
      targetPrice: '$48,500',
      timeframe: '7 days',
      confidence: 85,
      reasoning: 'Strong institutional buying, positive technical indicators, and breaking key resistance levels.'
    },
    {
      crypto: 'Ethereum',
      symbol: 'ETH',
      prediction: 'Bullish',
      targetPrice: '$2,950',
      timeframe: '5 days',
      confidence: 78,
      reasoning: 'Upcoming network upgrades and increased DeFi activity driving demand.'
    },
    {
      crypto: 'Solana',
      symbol: 'SOL',
      prediction: 'Strong Bullish',
      targetPrice: '$125',
      timeframe: '10 days',
      confidence: 91,
      reasoning: 'Ecosystem growth, new partnerships, and technical breakout pattern confirmed.'
    }
  ]

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Brain className="h-5 w-5 mr-2 text-indigo-400" />
          AI Predictions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {predictions.map((pred, index) => (
            <div key={index} className="p-4 bg-slate-700 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">{pred.symbol.slice(0, 2)}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{pred.crypto}</h3>
                    <p className="text-slate-400 text-sm">{pred.symbol}</p>
                  </div>
                </div>
                <Badge 
                  variant="default"
                  className={pred.prediction.includes('Strong') ? 'bg-emerald-600' : 'bg-emerald-500'}
                >
                  {pred.prediction}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-slate-400" />
                  <div>
                    <p className="text-slate-400 text-xs">Target</p>
                    <p className="text-white font-medium">{pred.targetPrice}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-slate-400" />
                  <div>
                    <p className="text-slate-400 text-xs">Timeframe</p>
                    <p className="text-white font-medium">{pred.timeframe}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Confidence</span>
                  <span className="text-white font-medium">{pred.confidence}%</span>
                </div>
                <div className="w-full bg-slate-600 rounded-full h-2">
                  <div 
                    className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${pred.confidence}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="pt-2 border-t border-slate-600">
                <p className="text-slate-300 text-sm">{pred.reasoning}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}