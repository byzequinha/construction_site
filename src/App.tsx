import { Linkedin, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <main className="w-full max-w-4xl mx-auto text-center">
        {/* Header Section */}
        <header className="mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 tracking-tight">
            🚧 Site em <span className="text-orange-500">Construção</span> 🚧
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Estou trabalhando duro para trazer algo incrível para vocês. 
            <br className="hidden md:block" />
            Em breve estaremos online e com muitas novidades!
          </p>
        </header>

        {/* Construction Worker GIF */}
        <div className="mb-8" aria-hidden="true">
          <div className="inline-block p-4 bg-white rounded-2xl shadow-xl">
            <img 
              src="https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif"
              alt="Trabalhador da construção civil trabalhando em obra com capacete amarelo e ferramentas"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl"
              loading="lazy"
              width="320"
              height="320"
            />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-gray-700 mb-2">
              <span>Progresso</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-orange-500 to-yellow-500 h-3 rounded-full animate-progress"
                style={{ width: '75%' }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                role="progressbar"
              ></div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="mb-8">
          <h2 className="sr-only">Informações de Contato</h2>
          <p className="text-gray-700 mb-4">Entre em contato:</p>
          <div className="flex justify-center space-x-12">
            <a
              href="https://www.linkedin.com/in/zequinha/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              aria-label="Visite meu perfil no LinkedIn (abre em nova aba)"
            >
              <Linkedin 
                className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors" 
                aria-hidden="true"
              />
            </a>
            
            <a
              href="mailto:byzequinh@gmail.com"
              className="group bg-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              aria-label="Envie um email para byzequinh@gmail.com"
            >
              <Mail 
                className="w-8 h-8 text-orange-500 group-hover:text-orange-600 transition-colors" 
                aria-hidden="true"
              />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-sm text-gray-500 mt-12">
          <p> {new Date().getFullYear()}  by Zequinha. Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;