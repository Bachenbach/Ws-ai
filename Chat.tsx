'use client';

import { useChat } from 'ai/react';
import { Message } from './Message';
import { useState } from 'react';

export default function Chat() {
  const [loading, setLoading] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await handleSubmit(e);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen max-w-5xl mx-auto p-4">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((message, i) => (
          <Message key={i} message={message} />
        ))}
      </div>
      
      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask anything..."
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Thinking...' : 'Send'}
        </button>
      </form>
    </div>
  );
}
