import React, { useState, useEffect } from 'react';
import ProjectCard from './components/ProjectCard';
import './index.css'; 
import fotoPerfil from './assets/perfil.jpeg';

const meusProjetos = [
  { id: 1, titulo: "Portfólio", descricao: "Meu portfólio de apresentação feito com HTML, CSS e JavaScript.", link: "https://github.com/ericaribeirx" },
];

function App() {

  const [formData, setFormData] = useState({ nome: '', email: '', msg: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.email) {
      alert("Preencha os campos obrigatórios!");
    } else {
      alert(`Obrigado, ${formData.nome}! Mensagem enviada.`);
      setFormData({ nome: '', email: '', msg: '' }); 
    }
  };

  
  const texto = "Meu Portfólio";
  const [conteudo, setConteudo] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < texto.length) {
      const timeout = setTimeout(() => {
        setConteudo((prev) => prev + texto.charAt(index));
        setIndex(index + 1);
      }, 80);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div style={{minHeight: '100vh'}}>

      <header>
        <h1>{conteudo}</h1>

        <nav>
          <ul>
            <li><a href="#sobre">Sobre Mim</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>

        <section id="sobre">
          <img src={fotoPerfil} alt="Foto Erica" />

          <div className="sobre-texto">
            <h2>Sobre Mim</h2>
            <p>
              Sou discente do curso Tecnologia em Sistemas para Internet e apaixonada por tecnologia e inovação.
            </p>
          </div>
        </section>

        <section id="projetos">
          <h2>Meus Projetos</h2>
          <div className="projetos-container">            
            {meusProjetos.map((projeto) => (
              <ProjectCard 
                key={projeto.id}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                link={projeto.link}
              />
            ))}
          </div>
        </section>
        
        <section id="contato">
          <h2>Contato</h2>

          <form onSubmit={handleSubmit}>
            <div className="campo">
              <label htmlFor="nome">Nome:</label>
              <input 
                id="nome" 
                type="text" 
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
            </div>

            <div className="campo">
              <label htmlFor="email">E-mail:</label>
              <input 
                id="email" 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="campo">
              <label htmlFor="msg">Mensagem:</label>
              <textarea 
                id="msg" 
                value={formData.msg}
                onChange={(e) => setFormData({...formData, msg: e.target.value})}
              />
            </div>

            <button type="submit">Enviar Mensagem</button>
          </form>
        </section>

      </main>

      <footer>
        <p>&copy; 2026 - Desenvolvido por Érica Ribeiro</p>
      </footer>
    </div>
  );
}

export default App;