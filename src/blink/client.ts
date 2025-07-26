import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: 'crypto-market-prediction-web-app-a5wl72wa',
  authRequired: true
})

export default blink