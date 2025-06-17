import Nav from "./components/Nav";
import Card from "./components/Card"
import batallaNavalImg from "./assets/img/Batalla naval.png"
import conectEducatioImg from "./assets/img/Connect Education.png"
import maljutPizzasImg from "./assets/img/Maljut Pizzas.png"

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white relative">
      <Nav />
      <main className="w-full">
        {/* Hero Section */}
        <section id="home" className="w-full h-dvh bg-black flex flex-col items-center justify-center py-24 px-4">
          <div className="w-full max-w-6xl flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Hello, World!</h1>
            <p className="text-2xl md:text-3xl text-center">Bienvenido a mi portafolio!</p>
          </div>
        </section>
        {/* Sección Projects */}
        <section id="projects" className="w-full h-dvh bg-[#1a2233] py-16 px-2 flex flex-col justify-center items-center align-middle">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Projects</h2>
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 md:px-8">
            <Card 
              title="Batalla naval" 
              description="Simulacion de el juego batalla naval utilizando React, POO y multihilos" 
              image={batallaNavalImg}
              url="https://batalla-naval-navy.vercel.app/"
            />
            <Card 
              title="Landing Pizzería" 
              description="Langing page con redireccionamiento a bot desarrollada con html, css y js puro" 
              image={maljutPizzasImg}
              url="https://chat-bot-page-six.vercel.app/"
            />
            <Card 
              title="Website connect education" 
              description="Red social para comunicacion entre estudiantes de informatica de la Uneg enfocada en proyectos desarrollados, hecho en React, typeScripth y Nextjs" 
              image={conectEducatioImg}
              url="https://red-networking-frontend-n1ml.vercel.app/"
            />
          </div>
        </section>
        {/* Sección About Me */}
        <section id="about" className="w-full h-dvh bg-black py-20 flex flex-col items-center justify-center px-4 align-middle">
          <div className="w-full max-w-3xl flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Me</h2>
            <p className="max-w-2xl text-center text-gray-300 text-lg md:text-xl">
              Soy un desarrollador Fullstack apasionado y siempre en formación. Me apasiona la tecnología y me esfuerzo en crear o aprender soluciones prácticas y creativas. Estoy en constante búsqueda de nuevos aprendizajes y experiencias para crecer profesionalmente.
            </p>
          </div>

          <div className="flex space-x-4 text-white mt-10">
            <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Git" className="w-20 h-20 bg-gray-700 rounded-md p-1 hover:scale-110 hover:bg-gray-600" />
              <a href="https://github.com/Jennorg" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub</a>
            </div>
            <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="Git" className="w-20 h-20 bg-gray-700 rounded-md p-1 hover:scale-110 hover:bg-gray-600" />
              <a href="https://www.linkedin.com/in/jenfer-martinez" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>
      {/* Seccion Tecnologias */}
      <section id="stack" className="w-full h-dvh bg-[#1a2233] py-4 flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl md:text-4xl flex font-bold mb-6 text-center">Stack de tecnologías</h2>
        <div className="w-full flex justify-center gap-8">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-25 h-25 bg-gray-700 rounded-md p-1 hover:scale-110 hover:bg-gray-600" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-25 h-25 bg-gray-700 rounded-md p-1 hover:scale-110 hover:bg-gray-600" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-25 h-25 bg-gray-700 rounded-md p-1 hover:scale-110 hover:bg-gray-600" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-25 h-25 bg-gray-700 rounded-md p-1 hover:scale-110 hover:bg-gray-600" />
        </div>
      </section>
    </div>
  )
}

export default App
