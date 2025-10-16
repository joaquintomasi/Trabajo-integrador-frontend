import { Link } from "react-router-dom"
import { useThemeContext } from "../context/ThemeContext"

const Help = () => {
  const { contextTheme } = useThemeContext()

  return (
    <main id={contextTheme === "Dark" ? "Dark" : "light"} className="help-main">
      <section className="help-header">
        <h1>Centro de ayuda</h1>
        <p>Encontrá toda la información que necesitás para usar la app de manera simple y rápida.</p>
      </section>

      <section className="help-grid">
        <div className="help-card">
          <i className='bx bx-user-voice'></i>
          <h2>Comenzar</h2>
          <p>Registrate o iniciá sesión para acceder a tus conversaciones. Tu información se guarda de forma segura en tu dispositivo.</p>
        </div>

        <div className="help-card">
          <i className='bx bx-conversation'></i>
          <h2>Mensajes</h2>
          <p>Podés chatear con tus contactos en tiempo real. Los mensajes enviados aparecen con un color distinto para identificarlos fácilmente.</p>
        </div>

        <div className="help-card">
          <i className='bx bx-customize'></i>
          <h2>Personalización</h2>
          <p>Cambiá tu nombre de usuario, activá el modo oscuro o modificá tus preferencias desde el panel de configuración.</p>
        </div>

        <div className="help-card">
          <i className='bx bx-log-out'></i>
          <h2>Cerrar sesión</h2>
          <p>Cuando quieras salir, podés hacerlo desde el menú lateral. Tus datos se mantendrán guardados para la próxima vez.</p>
        </div>
      </section>

      <section className="help-footer">
        <p>¿Tenés algún problema o duda? Escribinos desde el formulario de contacto.</p>
        <Link to="/chat" className="btn-volverchat">Volver al chat</Link>
      </section>
    </main>
  )
}

export { Help }
