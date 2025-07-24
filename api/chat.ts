import { NextApiRequest, NextApiResponse } from 'next'
import { askChatbot } from '@/lib/chatbot'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const { message } = req.body
  const reply = await askChatbot(message)
  res.status(200).json({ reply })
}
