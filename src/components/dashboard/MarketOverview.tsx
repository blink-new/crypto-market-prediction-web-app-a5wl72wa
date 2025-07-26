import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react'

export default function MarketOverview() {
  const marketData = [
    {
      title: 'Total Market Cap',
      value: '$2.45T',
      change: '+2.34%',
      isPositive: true,
      icon: DollarSign
    },
    {
      title: '24h Volume',
      value: '$89.2B',
      change: '-1.23%',
      isPositive: false,
      icon: Activity
    },
    {
      title: 'BTC Dominance',
      value: '42.8%',
      change: '+0.45%',
      isPositive: true,
      icon: TrendingUp
    },
    {
      title: 'Fear & Greed',
      value: '68',
      change: 'Greed',
      isPositive: true,
      icon: TrendingUp
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {marketData.map((item, index) => {
        const Icon = item.icon
        return (
          <Card key={index} className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">
                {item.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{item.value}</div>
              <p className={`text-xs ${item.isPositive ? 'text-emerald-400' : 'text-red-400'} flex items-center mt-1`}>
                {item.isPositive ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {item.change}
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}