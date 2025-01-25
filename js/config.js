/**
 * Chaves de conexão ccom o Firebase.
 * ATENÇÃO! Sempre troque essas chaves pelas chaves do seu projeto.
 **/
const firebaseConfig = {
  apiKey: "AIzaSyDdHbHUxuAzSwMJkLZYqrsgAbuN5SeoAj0",
  authDomain: "meu-blog-estatico-c96ef.firebaseapp.com",
  projectId: "meu-blog-estatico-c96ef",
  storageBucket: "meu-blog-estatico-c96ef.firebasestorage.app",
  messagingSenderId: "176305610540",
  appId: "1:176305610540:web:e9c5a14c2f6fe284625689"
};

/**
 * Configuração do site;
 **/
const site = {

  /**
    * Nome do site usado na tag <title>...</title> e nas interações dinâmicas
    **/
  nome: "Meu Blog Estático",

  /**
   * Logotipo do site, usado na tag <header>...</title>
   */
  logo: "img/logo-removebg-preview (3).png",

  /**
   * Controla a ação ao clicar no link do usuário logado no menu principal
   * Se `true`, exibe o perfil do usuário → perfil.html
   * Se `false`, faz logout direto
   **/
  verPerfil: true,

  /**
   * Ano de lançamento do site
   **/
  ano: 2025,

  /**
   * Licensa do site usada no rodapé
   **/
  licensa: `
  <i class="fa-regular fa-copyright fa-rotate-180 fa-fw"></i>
  <span>Copyleft <span id="footerAno"></span> Joca da Silva</span>
  `,

}