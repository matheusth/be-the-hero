import React,{useState} from 'react';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api'

import './style.css';

import {Link, useHistory} from 'react-router-dom'
import heroesImage from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

function Logon(){
    const [id,setId] = useState('');
    const history = useHistory();
    async function handleLogin(e){
        
        e.preventDefault();

        try{
            const response = await api.post('session',{id});
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);
            history.push('/profile');
        }catch(err){
            alert('falha no login');
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logo"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça Logon</h1>

                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={e=>setId(e.target.value)}
                     />
                    <button className="button" type="submit">
                        Entrar
                    </button>
                    <Link className="backLink" to="/">
                        <FiLogIn size="16" color="#E02041"/> 
                        Não Tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImage} alt="heroes"/>
        </div>
    )
}
export default Logon;