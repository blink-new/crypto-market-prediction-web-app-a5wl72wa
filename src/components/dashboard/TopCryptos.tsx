import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { TrendingUp, TrendingDown } from 'lucide-react'

export default function TopCryptos() {
  const cryptos = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$43,250.00',
      change: '+2.34%',
      isPositive: true,
      prediction: 'Bullish',
      confidence: 85
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$2,680.50',
      change: '+1.87%',
      isPositive: true,
      prediction: 'Bullish',
      confidence: 78
    },
    {
      name: 'Binance Coin',
      symbol: 'BNB',
      price: '$315.20',
      change: '-0.45%',
      isPositive: false,
      prediction: 'Neutral',
      confidence: 62
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      price: '$98.75',
      change: '+5.23%',
      isPositive: true,
      prediction: 'Bullish',
      confidence: 91
    },
    {
      name: 'Cardano',
      symbol: 'ADA',
      price: '$0.485',
      change: '+3.12%',
      isPositive: true,
      prediction: 'Bullish',
      confidence: 73
    }
  ]

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Top Cryptocurrencies</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {cryptos.map((crypto, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{crypto.symbol.slice(0, 2)}</span>
                </div>
                <div>
                  <h3 className="text-white font-medium">{crypto.name}</h3>
                  <p className="text-slate-400 text-sm">{crypto.symbol}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-white font-bold">{crypto.price}</p>
                <div className="flex items-center space-x-2">
                  <span className={`text-sm flex items-center ${crypto.isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                    {crypto.isPositive ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    {crypto.change}
                  </span>
                </div>
              </div>
              
              <div className="text-right">
                <Badge 
                  variant={crypto.prediction === 'Bullish' ? 'default' : 'secondary'}
                  className={crypto.prediction === 'Bullish' ? 'bg-emerald-600' : 'bg-slate-600'}
                >
                  {crypto.prediction}
                </Badge>
                <p className="text-slate-400 text-xs mt-1">{crypto.confidence}% confidence</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}