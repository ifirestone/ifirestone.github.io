// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ifirestone', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['ifirestone/gitprofile', 'ifirestone/Faker'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ivan Firestone',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ifirestone',
    twitter: 'ijfirestone',
    mastodon: 'ifirestone@mastodon.social',
    researchGate: '',
    facebook: 'ifirestone',
    instagram: 'ifirestone',
    reddit: 'ifirestone2079',
    threads: 'ifirestone',
    youtube: 'IvanFirestone', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'ifirestone',
    stackoverflow: '7255068/ifirestone', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'ifirestone',
    website: 'https://madlab.com.do',
    phone: '',
    email: 'ivan.firestone@madlab.com.do',
  },
  resume: {
    fileUrl:
      'https://res.cloudinary.com/madlab/image/upload/v1737819683/IFIRESTONE/CA_-_English_-_Ivan_Firestone_s7qhyu.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'REST API',
    'MSSQL',
    'Microservices',
    'Docker',
    'Kubernetes',
    'Cloud Computing',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Next.js',
    'Tailwind',
  ],
  experiences: [
    {
      company:
        'Oficina Gubernamental de Tecnologías de la Información y Comunicación (OGTIC)',
      position: 'Director Arquitectura Digital Gubernamental',
      from: 'May 2024',
      to: 'Present',
      companyLink: 'https://ogtic.gob.do',
    },
    {
      company: 'Universidad Eugenio Maria de Hostos (UNIREMHOS)',
      position: 'Computer Science Professor',
      from: 'Jan 2022',
      to: 'Present',
      companyLink: 'https://uniremhos.edu.do',
    },
    {
      company:
        'Oficina Gubernamental de Tecnologías de la Información y Comunicación (OGTIC)',
      position: 'Encargado de Plataformas y Servicios',
      from: 'Oct 2022',
      to: 'May 2024',
      companyLink: 'https://ogtic.gob.do',
    },
    {
      company:
        'Oficina Gubernamental de Tecnologías de la Información y Comunicación (OGTIC)',
      position: 'Encargado División de Desarrollo',
      from: 'Feb 2022',
      to: 'Oct 2022',
      companyLink: 'https://ogtic.gob.do',
    },
    {
      company:
        'Oficina Gubernamental de Tecnologías de la Información y Comunicación (OGTIC)',
      position: 'Software Developer',
      from: 'April 2021',
      to: 'Feb 2022',
      companyLink: 'https://ogtic.gob.do',
    },
    {
      company: 'PRONET, SRL',
      position: 'Gerente de Tecnología',
      from: 'Nov 2009',
      to: 'April 2021',
      companyLink: '',
    },
    {
      company: 'BEC Telecom',
      position: 'Wireless Network Engineer',
      from: 'Sep 2005',
      to: 'April 2021',
      companyLink: '',
    },
    {
      company: 'JIC Technology',
      position: 'IT Manager',
      from: 'Jan 2003',
      to: 'Sep 2005',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Master in Applied Artificial Intelligence',
      body: 'Ministry of Commerce of China',
      year: '2023',
      link: '',
    },
    {
      name: 'Big Data and Artificial Intelligence Conference',
      body: 'Instituto de Comunicación Política',
      year: '2021',
      link: 'https://www.facebook.com/watch/?v=448689546997668',
    },
    {
      name: 'New Communications Technology and System Maintenance',
      body: 'Ministry of Commerce People’s Republic of China',
      year: '2019',
      link: '',
    },
    {
      name: 'Electronic World Trade Alliance Expert Advisor',
      body: 'Winliner Information Technology Co. LT',
      year: '2019',
      link: '',
    },
    {
      name: 'Bullet Proof Manager Program',
      body: 'CRESTCOM',
      year: '2014',
      link: 'https://crestcom.com/',
    },
  ],
  educations: [
    {
      institution: 'Tecnológico de Monterrey',
      degree: 'Master in Applied Artificial Intelligence',
      from: '2025',
      to: 'On Going',
    },
    {
      institution: 'Universidad Eugenio Maria de Hostos (UNIREMHOS)',
      degree: 'Bachelor’s Degree in Computer Science',
      from: '2017',
      to: '2021',
    },
    {
      institution: 'BARNA Management School',
      degree: 'Strategic Direction',
      from: '2018',
      to: '2018',
    },
  ],
  publications: [
    {
      title: 'El impacto del portal de becas en RD',
      conferenceName: '',
      journalName: 'El Caribe',
      authors: 'Milena Herazo',
      link: 'https://www.elcaribe.com.do/gente/estilo/el-impacto-del-portal-de-becas-en-rd/',
      description:
        'Tras los clics que damos día a día en la búsqueda de informaciones en la web, se encuentran personas que trabajan para hacer “digerible” la gran cantidad de contenido que están buscando los usuarios. Es el caso de lo sucedido con “Beca Tu Futuro”, una plataforma integral diseñada para concentrar todas las oportunidades de becas disponibles en un solo lugar y funcionar como una herramienta de información, selección y administración dentro del Sistema Nacional de Becas y Crédito de Apoyo Educativo, facilitando el proceso desde la publicación hasta la adjudicación de la oportunidad.',
    },
    {
      title: 'Egresados de la UNIREMHOS se destacan en el mercado laboral',
      conferenceName: '',
      journalName: 'Portal UNIREMHOS',
      authors: 'UNIREMHOS',
      link: 'https://uniremhos.edu.do/egresados/',
      description:
        'La Asociación de Egresados de la UNIREMHOS, ASEUNIREMHOS, es la asociación no lucrativa y de duración indefinida, integrada por los profesionales de grado y posgrado egresados de la Universidad Eugenio María de Hostos (UNIREMHOS), quienes se mantienen fieles a los principios de la Institución que los formó, esta busca mantener el vínculo con la institución y los compañeros que les permita compartir experiencias académicas, profesionales, sociales y culturales.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'ifirestone', // to hide blog section, keep it empty
    limit: 10, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'garden',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
