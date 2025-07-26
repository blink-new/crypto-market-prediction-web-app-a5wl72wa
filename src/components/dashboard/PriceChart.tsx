import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { useState } from 'react'

export default function PriceChart() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D')
  const timeframes = ['1H', '4H', '1D', '1W', '1M']

  // Mock chart data points for visualization
  const generateChartPath = () => {
    const points = []
    const width = 800
    const height = 300
    const basePrice = 43000
    
    for (let i = 0; i <= 50; i++) {
      const x = (i / 50) * width
      const randomVariation = (Math.random() - 0.5) * 4000
      const trendVariation = Math.sin(i * 0.3) * 2000
      const y = height - ((basePrice + randomVariation + trendVariation - 39000) / 8000) * height
      points.push(`${x},${Math.max(0, Math.min(height, y))}`)
    }
    
    return `M ${points.join(' L ')}`
  }

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white">Bitcoin Price Chart</CardTitle>
          <div className="flex space-x-2">
            {timeframes.map((timeframe) => (
              <Button
                key={timeframe}
                variant={selectedTimeframe === timeframe ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedTimeframe(timeframe)}
                className={selectedTimeframe === timeframe 
                  ? 'bg-indigo-600 hover:bg-indigo-700' 
                  : 'border-slate-600 text-slate-300 hover:bg-slate-700'
                }
              >
                {timeframe}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="text-3xl font-bold text-white">$43,250.00</div>
          <div className="text-emerald-400 text-sm flex items-center">
            <span>+$987.50 (+2.34%) today</span>
          </div>
        </div>
        
        <div className="relative h-80 bg-slate-900 rounded-lg p-4">
          <svg width="100%" height="100%" viewBox="0 0 800 300" className="overflow-visible">
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="80" height="60" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 60" fill="none" stroke="#334155" strokeWidth="1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Price line */}
            <path
              d={generateChartPath()}
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
              className="drop-shadow-sm"
            />
            
            {/* Gradient fill under the line */}
            <defs>
              <linearGradient id="priceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#10B981" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path
              d={`${generateChartPath()} L 800,300 L 0,300 Z`}
              fill="url(#priceGradient)"
            />
          </svg>
          
          {/* Chart indicators */}
          <div className="absolute top-4 left-4 space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-slate-400 text-sm">Price</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
              <span className="text-slate-400 text-sm">MA(20)</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}