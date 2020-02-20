import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class customerList extends Component {
    render() {
        return(
            <div>
                <main>
                    <section id="btn">
                        <div>
                            <Link to="/newCustomer">
                                <button type="button">
                                    new customer
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

export default customerList;