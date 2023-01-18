"use client";

import useSWR from "swr"
import { Message } from "../typings";
import fetcher from '../utils/fetchMessages'
import MessageComponent from "./MessageComponent";

const MessageList = () => {
  const { data: messages, error, mutate } = useSWR<Message[]>("/api/getMessages", fetcher)
  return (
    <div>
      {messages?.map(msg => (
        <MessageComponent key={msg.id} message={msg} />
      ))}
    </div>
  )
}

export default MessageList