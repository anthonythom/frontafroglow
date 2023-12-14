import './TelaFinal.css'
import InputTelaFinal from '../components/inputTelaFinal/inputTelaFinal'
import InputFormSmall from '../components/inputTelaFinal/input-form-small'
import { Outlet, Link } from "react-router-dom";



function TelaFinal() {
  return (
    <>
    
      <Link to="/Form3"><img className='imgBackTelaFinal' src="./botaoEsquerda.svg" alt="" /></Link>
      

      <div className='align-title--column-telaFinal'>
        <div className='align-center-title-telafinal'>
      <div>
      <h4 className='inputsGroupH4TelaFinal'>Peça já sua glowBox!</h4>
      </div>
      <p className='inputsGroupPTelaFinal'>Preencha os campos para cálculo do frete e prazo de entrega</p>
      </div>
      </div>
      <div className='inputsGroup'>

        <img src="./imgTelaFinalMenino.svg" alt="" />
        <div className='align-flex'>
          <div className='flex-row-small'>
            <InputFormSmall props_placeholder={"Cep"} />
            <InputFormSmall props_placeholder={"Estado"} />
          </div>
          <div className='flex-row-small'>
            <InputFormSmall props_placeholder={"Cidade"} />
            <InputFormSmall props_placeholder={"Bairro"} />
          </div>
          <div className='flex-row-big'>
            <InputTelaFinal props_placeholder={"Logradouro"} />
          </div>
        </div>
      </div>
      <div className='alinharBtn'>
        <button className='btnAmarelo'>Calcular frete</button>
      </div>
      
    </>
    
  )
} export default TelaFinal

