import { createContext, useContext, useState, useEffect } from "react"

const ChatContext = createContext()

const ChatProvider = ({ children }) => {
  const [users, setUsers] = useState([])

  const [selectedUser, setSelectedUser] = useState(null)


  useEffect(() => {
    const storedUsers = localStorage.getItem("users")

    if (storedUsers !== null) {
      setUsers(JSON.parse(storedUsers))
    } else {
      const initialUsers = [
        {
          id: 1,
          name: "Lionel Andres Messi Cuccittini",
          status: "online",
          lastSeen: "En línea",
          messages: [
            { id: 1, text: "Hola Leo, como estas?", time: "10:30" },
            { id: 2, text: "¿Haces algo el finde?. Vamos a hacer un asado", time: "10:31" }

          ]
        },
        {
          id: 2,
          name: "Rodrigo  De paul",
          status: "offline",
          lastSeen: "hace 3 horas",
          messages: [
            { id: 1, text: "Que haces Rodri, todo bien?", time: "15:00" },
            { id: 2, text: "Este finde hacemos un asado en mi casa. venis?", time: "15:01" },
          ]
        },
        {
          id: 3,
          name: "Lorena Spedaliere",
          status: "online",
          lastSeen: "En línea",
          messages: [
            { id: 1, text: "Hola lore, todo bien?", time: "19:00" },
            { id: 2, text: "Como venis con los turnos?. puedo ir mañana a por la tarde?", time: "19:01" }
          ]
        },
        {
          id: 4,
          name: "Teo Sambiase",
          status: "offline",
          lastSeen: "hace 1 minuto",
          messages: [
            { id: 1, text: "Teitooo, como andas?", time: "18:59" },
            { id: 2, text: "Que turnos tenes el finde?. no me corto el pelo hace 2 semanas jajaj", time: "19:00" }
          ]
        },
        {
          id: 5,
          name: "Santiago Rodriguez",
          status: "online",
          lastSeen: "En línea",
          messages: [
            { id: 1, text: "Hola primo, como anda la familia?", time: "18:59" },
            { id: 2, text: "tenes idea como nos organizamos para las fiestas al final?", time: "18:59" }
          ]
        },
      ]
      setUsers(initialUsers)
      localStorage.setItem("users", JSON.stringify(initialUsers))
    }
  }, [])

  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("users", JSON.stringify(users))
    }
  }, [users])

  return (
    <ChatContext.Provider value={{ users, setUsers, selectedUser, setSelectedUser }}>
      {children}
    </ChatContext.Provider>
  )
}

const useChat = () => useContext(ChatContext)

export { useChat, ChatProvider }
