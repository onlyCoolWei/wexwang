'use client';

import { type FormEvent, useEffect, useMemo, useRef, useState } from 'react';

const GLYPHS = '01<>/{}[]#$%&+-=*';
const STREAM_RESPONSE = "Initializing Wegic & MoreAI pipelines... Let's connect at wangw_str@163.com.";

export function DecryptedText({
  text,
  delay = 500,
  className = '',
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const [frame, setFrame] = useState(0);
  const glyphs = useMemo(() => GLYPHS.split(''), []);

  useEffect(() => {
    setFrame(0);
    let interval = 0;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setFrame((current) => {
          if (current >= text.length + 7) {
            window.clearInterval(interval);
            return current;
          }

          return current + 1;
        });
      }, 34);
    }, delay);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, [delay, text]);

  const visibleText = text
    .split('')
    .map((char, index) => {
      if (char === ' ') {
        return ' ';
      }

      return index < frame ? char : glyphs[(index + frame) % glyphs.length];
    })
    .join('');

  return (
    <span aria-label={text} className={`relative block ${className}`}>
      <span aria-hidden="true" className="invisible">
        {text}
      </span>
      <span aria-hidden="true" className="absolute inset-0">
        {visibleText}
      </span>
    </span>
  );
}

export function SplitBlurText({ text, className = '' }: { text: string; className?: string }) {
  return (
    <span aria-label={text} className={className}>
      <span aria-hidden="true">
        {text.split('').map((char, index) => (
          <span
            key={`${char}-${index}`}
            className="inline-block animate-[blur-rise_0.9s_cubic-bezier(0.16,1,0.3,1)_both]"
            style={{ animationDelay: `${1200 + index * 14}ms` }}
          >
            {char === ' ' ? '\u00a0' : char}
          </span>
        ))}
      </span>
    </span>
  );
}

export function CommandPrompt({ placeholder }: { placeholder: string }) {
  const [value, setValue] = useState('');
  const [output, setOutput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const intervalRef = useRef(0);

  useEffect(() => {
    return () => window.clearInterval(intervalRef.current);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.clearInterval(intervalRef.current);
    setOutput('');
    setIsStreaming(true);
    setValue('');

    let index = 0;
    intervalRef.current = window.setInterval(() => {
      index += 1;
      setOutput(STREAM_RESPONSE.slice(0, index));

      if (index >= STREAM_RESPONSE.length) {
        window.clearInterval(intervalRef.current);
        setIsStreaming(false);
      }
    }, 24);
  };

  return (
    <div className="w-full max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="group flex items-center gap-3 rounded-full border border-white/10 bg-black/35 px-4 py-3 shadow-[0_0_40px_rgba(45,212,191,0.08)] backdrop-blur-xl transition hover:border-cyan-200/30"
      >
        <span className="h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent font-mono text-xs text-cyan-50 outline-none placeholder:text-cyan-100/35"
        />
        <button
          type="submit"
          className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-100/55 transition group-focus-within:text-cyan-100 group-hover:text-cyan-100"
        >
          Run
        </button>
      </form>
      {(output || isStreaming) && (
        <p className="mt-4 min-h-6 font-mono text-xs leading-6 text-cyan-100/75">
          <span className="text-cyan-300/80">&gt; </span>
          {output}
          {isStreaming && <span className="ml-1 animate-pulse">_</span>}
        </p>
      )}
    </div>
  );
}
