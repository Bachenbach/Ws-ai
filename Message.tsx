import { Message as AIMessage } from 'ai';
import ReactMarkdown from 'react-markdown';

interface MessageProps {
  message: AIMessage;
}

export function Message({ message }: MessageProps) {
  return (
    <div className={`mb-4 ${message.role === 'assistant' ? 'bg-gray-100' : ''} p-4 rounded-lg`}>
      <div className="font-bold mb-2">
        {message.role === 'assistant' ? 'AI' : 'You'}
      </div>
      <ReactMarkdown className="prose">
        {message.content}
      </ReactMarkdown>
    </div>
  );
}
