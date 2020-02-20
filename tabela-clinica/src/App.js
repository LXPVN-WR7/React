import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header id="menu">
                    <div>
                        <h3>Visualizador de Clinicas</h3>
                    </div>
                </header>
                <main>
                    <section id="btn">
                        <div>
                            <Link to="/newCustomer">
                                <button type="button">
                                    nova clínica
                                </button>
                            </Link>
                        </div>
                    </section>
                    <section id="list">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        NOME
                                    </th>
                                    <th>
                                        ENDEREÇO
                                    </th>
                                    <th>
                                        TEL
                                    </th>
                                    <th>
                                        ESPECIALIDADE
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        ANA HELENA SEIXAS DE CAMPOS
                                    </td>
                                    <td>
                                        AL DOS ARAPANES, 00881 -62 - MOEMA, SAO PAULO, SP
                                    </td>
                                    <td>
                                        50513895
                                    </td>
                                    <td>
                                        PSICOLOGIA
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        NOME
                                    </th>
                                    <th>
                                        ENDEREÇO
                                    </th>
                                    <th>
                                        TEL
                                    </th>
                                    <th>
                                        ESPECIALIDADE
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        ANA HELENA SEIXAS DE CAMPOS
                                    </td>
                                    <td>
                                        AL DOS ARAPANES, 00881 -62 - MOEMA, SAO PAULO, SP
                                    </td>
                                    <td>
                                        50513895
                                    </td>
                                    <td>
                                        PSICOLOGIA
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;