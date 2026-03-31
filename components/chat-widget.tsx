'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { MessageCircle, Send, X, Bot, User, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { sendChatMessage } from '@/app/actions/chat';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  error?: boolean;
}

const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  role: 'assistant',
  content:
    "Hi! I'm Paul's AI assistant, powered by Claude on Amazon Bedrock. Ask me anything about cloud architecture, security engineering, AI integration, or how I can help with your project.",
};

const SUGGESTED_QUESTIONS = [
  'What AWS services do you specialise in?',
  'How do you approach security for new projects?',
  'Can you integrate AI into our existing app?',
  'What does a typical engagement look like?',
];

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === 'user';
  return (
    <div className={cn('flex gap-3', isUser && 'flex-row-reverse')}>
      {/* Avatar */}
      <div
        className={cn(
          'h-8 w-8 rounded-full flex items-center justify-center shrink-0',
          isUser ? 'bg-primary/20' : 'bg-emerald-500/20',
        )}
      >
        {isUser ? (
          <User className="h-4 w-4 text-primary" />
        ) : (
          <Bot className="h-4 w-4 text-emerald-400" />
        )}
      </div>

      {/* Bubble */}
      <div
        className={cn(
          'max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed',
          isUser
            ? 'bg-primary/20 text-foreground rounded-tr-sm'
            : message.error
              ? 'bg-destructive/10 border border-destructive/20 text-destructive rounded-tl-sm'
              : 'glass text-foreground rounded-tl-sm',
        )}
      >
        {message.error && (
          <AlertCircle className="h-3.5 w-3.5 inline mr-1.5 mb-0.5" />
        )}
        {message.content}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-3">
      <div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
        <Bot className="h-4 w-4 text-emerald-400" />
      </div>
      <div className="glass rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 bg-muted-foreground rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isPending]);

  // Focus input when sheet opens
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  function getHistory() {
    return messages
      .filter((m) => !m.error && m.id !== 'welcome')
      .slice(-10) // Keep last 10 to stay within token limits
      .map((m) => ({ role: m.role, content: m.content }));
  }

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || isPending) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: trimmed,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    startTransition(async () => {
      const result = await sendChatMessage({
        message: trimmed,
        conversationHistory: getHistory(),
      });

      const assistantMsg: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: result.success
          ? (result.message ?? 'Sorry, I received an empty response.')
          : (result.error ?? 'Something went wrong.'),
        error: !result.success,
      };
      setMessages((prev) => [...prev, assistantMsg]);
    });
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function handleSuggestion(q: string) {
    setInput(q);
    inputRef.current?.focus();
  }

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open AI Chat Assistant"
        className={cn(
          'fixed bottom-6 right-6 z-50',
          'h-14 w-14 rounded-full',
          'bg-gradient-to-br from-indigo-500 to-violet-600',
          'shadow-lg shadow-indigo-500/30',
          'flex items-center justify-center',
          'hover:scale-110 active:scale-95 transition-transform duration-200',
          'animate-pulse-glow',
          open && 'hidden',
        )}
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </button>

      {/* Chat Sheet */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full sm:max-w-md flex flex-col p-0 gap-0"
        >
          {/* Header */}
          <SheetHeader className="px-5 pt-5 pb-4 border-b border-border shrink-0">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shrink-0">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <SheetTitle className="text-base">AI Assistant</SheetTitle>
                <SheetDescription className="text-xs flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  Powered by Claude on Amazon Bedrock
                </SheetDescription>
              </div>
              <div className="ml-auto">
                <Badge variant="emerald" className="text-xs">Live</Badge>
              </div>
            </div>
          </SheetHeader>

          {/* Messages */}
          <ScrollArea className="flex-1 px-5">
            <div className="py-5 space-y-5">
              {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} />
              ))}
              {isPending && <TypingIndicator />}

              {/* Suggested questions — show only at start */}
              {messages.length === 1 && !isPending && (
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">Suggested questions:</p>
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSuggestion(q)}
                      className="w-full text-left text-sm px-3 py-2 rounded-lg glass hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <div ref={bottomRef} />
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="px-5 py-4 border-t border-border shrink-0">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything…"
                disabled={isPending}
                maxLength={1000}
                className="flex-1"
              />
              <Button
                size="icon"
                variant="gradient"
                onClick={handleSend}
                disabled={!input.trim() || isPending}
                aria-label="Send message"
              >
                {isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              AI responses may be inaccurate. Verify important details.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
