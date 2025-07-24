// components/chatbot.tsx
'use client'

import Script from 'next/script'

const Chatbot = () => {
  return (
    <div className='fixed bottom-20 right-4 z-60 '>
      <Script
      id="chatbase-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.chatbaseConfig = {
            chatbotId: "XdgxkSv0mXkL49-78MjEN"
          };
          (function() {
            var cb = document.createElement('script'); cb.type = 'text/javascript'; cb.async = true;
            cb.src = 'https://www.chatbase.co/embed.min.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(cb, s);
          })();
        `,
      }}
    />
    </div>
  )
}

export default Chatbot;
