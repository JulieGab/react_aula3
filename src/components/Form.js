import { useState } from 'react';
import logo from '../logo192.png'
import './Form.css'

function Form() {

    function validarUsuario(e){
        e.preventDefault()
        console.log(usuario)
        console.log(senha)
        console.log('O usuário ' +(usuario) + ' utilizou a senha: ' + (senha))
    }

    const [usuario,setUsuario] = useState();
    //usuário -> valor atual do input
    //setUsuario -> alterar o valor do usuário
    const [senha,setSenha] = useState()

    return (
        <div className="Form">
                <div className='col1'>
                    <h2 className='form__title'>Estados - React</h2>
                    <img src={logo} className='form_logo' alt='logo Infinity'></img>
                </div>

                <div className='col2'>
                    <form onSubmit={validarUsuario} action='#'>
                        <label>Usuário:</label><br></br>
                        <input type='text' id='nome' name='usuario' className='form__input'
                        onChange={(e) => setUsuario(e.target.value)}></input><br></br>
                        <label>Senha:</label><br></br>
                        <input type='password' id='nome' name='senha' className='form__input'
                        onChange={(e) => setSenha(e.target.value)}></input><br></br>
                        <br></br>
                        <button className='form__button'>Entrar</button>
                    </form>
                </div>
        </div>
    );
  }
  
  export default Form;