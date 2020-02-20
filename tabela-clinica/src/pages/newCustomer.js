import React, { Component } from 'react';
import '../assets/css/newCustomer.css';
import { Link } from 'react-router-dom';

class newCustomer extends Component {
    render() {
        return (
            <div>
                <header id="menu">
                    <div>
                        <h3>Visualizador de Clinicas</h3>
                    </div>
                </header>
                <main>    
                    <section id="btn">
                        <div>
                            <Link to="/">
                                <button type="button">
                                    lista de clínicas
                                </button>
                            </Link>
                        </div>
                    </section>
                    <section id="iptCadastro">
                        Nome: <input type="text" name="nome" />
                        Endereço: <input type="text" name="endereco" />
                        Telefone: <input type="text" name="telefone" />
                        Especialidade: <input type="text" name="especialidade" />
                        <button>Enviar</button>
                    </section>
                </main>
            </div>
        );
    }
}

export default newCustomer;