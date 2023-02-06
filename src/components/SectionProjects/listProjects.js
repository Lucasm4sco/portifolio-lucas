import imgCloneNetflix from '../../assets/clone-netflix.png';
import imgReactGram from '../../assets/react-gram.png';
import imgGithubFinder from '../../assets/github-finder.png';
import imgFormMultiStep from '../../assets/form-multistep.png';
import imgGelateria from '../../assets/gelateria.png';
import imgCalculadora from '../../assets/calculadora.png';

const listProjects = [
    {
        img: imgCloneNetflix,
        legend: 'Netflix Clone',
        alt: 'Imagem do projeto Netflix Clone',
        description: 'Um clone com a interface inicial da netflix utilizando o framework React.',
        link: 'https://github.com/Lucasm4sco/clone-netflix'
    },
    {
        img: imgGithubFinder,
        legend: 'Github Finder',
        alt: 'Imagem do projeto Github Finder',
        description: 'Consumindo a API do github para retornar dados utilizando TypeScript.',
        link: 'https://github.com/Lucasm4sco/github-find'
    },
    {
        img: imgReactGram,
        legend: 'ReactGram',
        alt: 'Imagem do projeto ReactGram',
        description: 'Projeto Full-Stack de uma rede social para fotos semelhante ao Instagram.',
        link: 'https://github.com/Lucasm4sco/REACTGRAM'
    },
    {
        img: imgFormMultiStep,
        legend: 'Formulário Multistep',
        alt: 'Imagem do projeto Formulário Multistep',
        description: 'Formulário mobile com multi-etapas utilizando React Native e Expo.',
        isMobile: true,
        link: 'https://github.com/Lucasm4sco/form-multistep-react-native'
    },
    {
        img: imgGelateria,
        legend: 'Gelateria',
        alt: 'Imagem do projeto Gelateria',
        description: 'SPA criada através do React apresentando uma sorveteria.',
        link: 'https://github.com/Lucasm4sco/Cursos/tree/main/DevMedia/Carreira%20programador%20Frontend/React/React%20Introdu%C3%A7%C3%A3o/projeto-final'
    },
    {
        img: imgCalculadora,
        legend: 'Calculadora',
        alt: 'Imagem do projeto Calculadora',
        description: 'Calculadora mobile desenvolvida com React Native.',
        isMobile: true,
        link: 'https://github.com/Lucasm4sco/Calculadora-React-Native'
    }
]

export default listProjects;