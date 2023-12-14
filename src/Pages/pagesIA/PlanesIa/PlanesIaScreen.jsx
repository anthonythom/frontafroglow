import './PlanesIaScreen.css'
import PlansIa from '../components/plans-ia/plans-ia'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
Link


function PlanesIaScreen(){
    return(
        <>
      <div className='align-img-plans-title-ia'>
        <img  src="./logo-glowbox.svg" alt="" />
        </div>
        <h1 className='h1-plans-ia'>Revolucione o cuidado capilar</h1>
        <Container>
      <Row>
        <Col>
        <div className='align-p-plans-ia-number'>
        <p className='p-plans-ia-number'>1°</p>
        <img className='img-plans-ia' src="./Imagem-Ia.svg" alt="" />
        <p>faça <strong>upload</strong> de uma foto do seu cabelo, e nossa <strong>IA</strong>  irá analisar seu cabelo</p>
        </div>
        </Col>
        <Col>
        <div className='align-p-plans-ia-number'>
        <p className='p-plans-ia-number'>2°</p>
        <img className='img-plans-ia' src="./icon-formulario.svg" alt="" />
        <p>Preencha o <strong>formulario</strong> com mais informações do seu cabelo</p>
        </div>
        </Col>
        <Col>
        <div className='align-p-plans-ia-number'>
        <p className='p-plans-ia-number'>3°</p>
        <img className='img-plans-ia' src="./icon-box.svg" alt="" />
        <p>Finalize e receba sua <strong>Glowbox</strong> personalizado em casa!</p>
        </div>
       </Col>
      </Row>
    </Container>
    <div className='align-input-plans-green-ia'>
    <Link to="/ia"><input type="submit" className='input-plans-green-ia' value={"Faça o teste"} /></Link>
    </div>
    <div className='div-bg-purple'></div>
        <h1 className='h1-plans-ia'>Assine seu plano</h1>
        <div className='align-row-planes-ia'>
       <PlansIa props_title_box={"Glowbox"}/> 
       <PlansIa props_title_box={"GlowKids"}/> 
        </div>
        </>
    )
} export default PlanesIaScreen