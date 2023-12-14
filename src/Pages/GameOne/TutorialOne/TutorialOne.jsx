import Tutorials from '../../Games/TutorialsGames/Tutorials'
import './TutorialOne.css'
import { Link } from 'react-router-dom'

const TutorialOne = () => {
    return(
        <section className='container-tutorial-one'>
             <Link to="/jogo1tela1">
                 <Tutorials  Images={"icon-doll-tutorials.png"} Images2={"icon-ink-tutorials.png"} Instructions={"Ajude a completar todos os cachinhos"} Instructions2={"Pinte do jeito que quiser e aproveite"} BackgroundButton={"#C9A5FF"} Button={"INICIAR"}/>
             </Link>
        </section>
    )
}

export default TutorialOne