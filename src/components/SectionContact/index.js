import { useState } from 'react';
import { SlSocialTwitter } from 'react-icons/sl';
import { FaDev, FaLinkedin } from 'react-icons/fa';
import './style.css';

const SectionContact = ({ darkMode }) => {
    const [subjectMessage, setSubjectMessage] = useState('');
    const [contentMessage, setContentMessage] = useState('');

    return (
        <section className={'section-contact ' + (darkMode ? 'dark-mode' : '')} id='contact'>
            <h2>Contato</h2>
            <div className='container'>
                <form>
                    <label>
                        <span>
                            Assunto
                        </span>
                        <input
                            type="text"
                            placeholder='Assunto do e-mail'
                            value={subjectMessage || ''}
                            onChange={(e) => setSubjectMessage(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>
                            Mensagem
                        </span>
                        <textarea
                            name=""
                            placeholder='Conteúdo da mensagem' cols="30" rows="8"
                            value={contentMessage || ''}
                            onChange={(e) => setContentMessage(e.target.value)}
                        ></textarea>
                    </label>
                    <a href={`mailto:lmbp202@gmail.com?subject=${subjectMessage}&body=${contentMessage}`}>Enviar</a>
                </form>
                <p>Outras redes sociais: </p>
                <div className='social-medias'>
                    <a href='https://dev.to/lucasm4sco' title='dev.to' target='_blank' rel='noreferrer'>
                        <FaDev />
                    </a>
                    <a href="https://twitter.com/Lucasmasco_" title='twitter' target='_blank' rel='noreferrer'>
                        <SlSocialTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/lucas-mateus-batista-polles-a161a1231" title='linkedin' target='_blank' rel='noreferrer'>
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </section>
    )
}


export default SectionContact