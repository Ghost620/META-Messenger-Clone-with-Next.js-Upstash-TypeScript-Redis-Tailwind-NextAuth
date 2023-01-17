import type { NextApiRequest, NextApiResponse } from 'next'
import redis from '../../redis'
import { Message } from '../../typings'

type Data = {
    message: Message
}

type ErrorData = {
    body: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
    if (req.method !== "POST") { 
        res.status(405).json({body: "Method not allowed"}) 
        return
    }

    const { message } = req.body
    // replace time from user time to server time
    const newMessage = {...message, createdAt: Date.now()}

    // uploading to redis
    await redis.hset('messages', message.id, JSON.stringify(newMessage))

    res.status(200).json({ message: newMessage })
}
