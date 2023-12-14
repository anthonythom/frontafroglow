import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Input from "../../Components/Input/input";
import LogoA from '/public/Logo.svg';
import ImgDir from '/public/imagem direita.png';
import UniversalButton from "../../Components/Button/Button";
import "./ParentRegistration.css";
import axios from "axios";

function CadastroR() {

  const navigate = useNavigate();
 

  const [usuario, setUsuario] = useState({
    nomeCompleto: "",
    nomeSocial: "",
    dataDeNascimento: "",
    genero: "",
    email: "",
    senha: "",
    telefone: "",
    cpf: "",
  });
  const formatCPF = (inputCPF) => {
    // Remove qualquer caractere não numérico
    const cleanedCPF = inputCPF.replace(/\D/g, '');

    // Adiciona pontos e traço conforme necessário
    const formattedCPF = cleanedCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    return formattedCPF;
  };

  const isCPFValid = (cpf) => {
    const cleanedCPF = cpf.replace(/\D/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cleanedCPF.length !== 11) {
      return false;
    }

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cleanedCPF)) {
      return false;
    }

    // Calcula o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cleanedCPF.charAt(i)) * (10 - i);
    }
    let remainder = 11 - (sum % 11);
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
    if (remainder !== parseInt(cleanedCPF.charAt(9))) {
      return false;
    }

    // Calcula o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cleanedCPF.charAt(i)) * (11 - i);
    }
    remainder = 11 - (sum % 11);
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
    if (remainder !== parseInt(cleanedCPF.charAt(10))) {
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === 'cpf' ? formatCPF(value) : value;

    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isCPFValid(usuario.cpf)) {
      alert("CPF inválido. Por favor, insira um CPF válido.");
      console.error("CPF inválido. Por favor, insira um CPF válido.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/usuario', usuario);
      console.log(response.data);
      setTimeout(() => {
        navigate('/cadastrocrianca');
    }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="containerSection">
      <div className="forms-left">
        <div className="info-register">
          <img src={LogoA} alt="Logo" className="logo" />
          <h2 className="subtitle">Olá, seja bem-vindo(a)!</h2>
          <p className="paragraf">Crie uma conta para iniciar sua jornada de experiência conosco.</p>
        </div>

        <div className="forms-register">
          <form onSubmit={handleSubmit}>

          <div className="inputGroup">
            <label>
                Nome Completo:
            </label>
              <input
                placeholder='Nome'
                label="Nome"
                type="text"
                name="nomeCompleto"
                value={usuario.nomeCompleto}
                onChange={handleChange}
                required
              />
          </div>
          <div className="inputGroup">
            <label>
              Nome Social:
              </label>
              <input
                placeholder='Nome Social'
                label="Nome Social"
                type="text"
                name="nomeSocial"
                value={usuario.nomeSocial}
                onChange={handleChange}
                required
              />
          </div>
          <div className="inputGroup">
            <label>
              Data de Nascimento:
              </label>
              <input
                type="date"
                name="dataDeNascimento"
                value={usuario.dataDeNascimento}
                onChange={handleChange}
                required
              />
            
            </div>
           
            <div className="inputGroup">
            <label>
              Email:
              </label>
              <input
                placeholder='E-Mail'
                type="text"
                name="email"
                value={usuario.email}
                onChange={handleChange}
                required
              />
            </div>

          <div className="inputM">
            <div className="inputGroup">
              <label>
                Telefone:
              </label>
              <input
                placeholder='Telefone'
                label="Telefone"
                type="text"
                name="telefone"
                value={usuario.telefone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputGroup">
              <label>
                CPF:
              </label>
              <input
                placeholder='CPF'
                label="CPF"
                type="text"
                name="cpf"
                value={usuario.cpf}
                onChange={handleChange}
                maxLength="14"
                required
              />
            </div>
          </div>

          <div className="inputGroup">
            <label>
              Senha:
              </label>
              <input
                label="Senha"
                type="password"
                name="senha"
                value={usuario.senha}
                onChange={handleChange}
                required
              />
            </div>

            
          <div className="buttonRegister">
              <UniversalButton Link propsBtn={'Cadastre-se'} type="submit" />
          </div>
          </form>
        </div>
      </div>
      <div className="img-rigth">
          <img src={ImgDir} className="image-rigth" />
      </div>
    </section>
  );
}

export default CadastroR;
