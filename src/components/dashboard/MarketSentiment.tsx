import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Progress } from '../ui/progress'
import { MessageCircle, Newspaper, Users, Zap } from 'lucide-react'

export default function MarketSentiment() {
  const sentimentData = [
    {
      source: 'Twitter',
      icon: MessageCircle,
      sentiment: 'Bullish',
      score: 78,
      color: 'bg-emerald-500'
    },
    {
      source: 'Reddit',
      icon: Users,
      sentiment: 'Bullish',
      score: 82,
      color: 'bg-emerald-500'
    },
    {
      source: 'News',
      icon: Newspaper,
      sentiment: 'Neutral',
      score: 65,
      color: 'bg-yellow-500'
    },
    {
      source: 'Whale Activity',
      icon: Zap,
      sentiment: 'Bullish',
      score: 89,
      color: 'bg-emerald-500'
    }
  ]

  const overallSentiment = {
    score: 78,
    label: 'Bullish',
    description: 'Market sentiment is positive with strong social media buzz and whale accumulation.'
  }

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Market Sentiment</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Overall Sentiment */}
          <div className="p-4 bg-slate-700 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-medium">Overall Sentiment</h3>
              <span className="text-emerald-400 font-bold">{overallSentiment.label}</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">Sentiment Score</span>
                <span className="text-white font-medium">{overallSentiment.score}/100</span>
              </div>
              <Progress value={overallSentiment.score} className="h-2" />
            </div>
            <p className="text-slate-300 text-sm mt-3">{overallSentiment.description}</p>
          </div>

          {/* Individual Sources */}
          <div className="space-y-4">
            <h4 className="text-white font-medium">Sentiment Sources</h4>
            {sentimentData.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon className="h-5 w-5 text-slate-400" />
                    <span className="text-white">{item.source}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <p className="text-white font-medium">{item.sentiment}</p>
                      <p className="text-slate-400 text-sm">{item.score}%</p>
                    </div>
                    <div className="w-16">
                      <Progress value={item.score} className="h-2" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Recent Highlights */}
          <div className="space-y-3">
            <h4 className="text-white font-medium">Recent Highlights</h4>
            <div className="space-y-2">
              <div className="p-3 bg-slate-700 rounded-lg">
                <p className="text-slate-300 text-sm">
                  🐋 Large whale moved 2,500 BTC to cold storage
                </p>
                <p className="text-slate-400 text-xs mt-1">2 hours ago</p>
              </div>
              <div className="p-3 bg-slate-700 rounded-lg">
                <p className="text-slate-300 text-sm">
                  📈 #Bitcoin trending on Twitter with 85% positive mentions
                </p>
                <p className="text-slate-400 text-xs mt-1">4 hours ago</p>
              </div>
              <div className="p-3 bg-slate-700 rounded-lg">
                <p className="text-slate-300 text-sm">
                  📰 Major financial institution announces crypto adoption
                </p>
                <p className="text-slate-400 text-xs mt-1">6 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}