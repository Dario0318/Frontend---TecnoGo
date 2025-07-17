"use client"
import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const phone = "933615633" 

  const toggleChat = () => setIsOpen(!isOpen)

  const handleSend = () => {
    if (!message.trim()) return
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
    setIsOpen(false)
    setMessage("")
  }

  return (
    <>
      {/* Botón flotante */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChat}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition"
        >
          {isOpen ? <X className="text-white w-6 h-6" /> : <MessageCircle className="text-white w-6 h-6" />}
        </button>
      </div>

      {/* Ventana emergente */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg z-50">
          <div className="p-3 border-b border-gray-200 dark:border-gray-700 bg-green-500 text-white font-semibold">
            Escríbenos por WhatsApp
          </div>
          <div className="p-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded resize-none text-sm bg-white dark:bg-gray-800 text-black dark:text-white"
              placeholder="Escribe tu duda aquí..."
            />
            <button
              onClick={handleSend}
              className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-sm transition"
            >
              Enviar a WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default WhatsAppChat
