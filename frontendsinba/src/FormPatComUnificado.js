import React from 'react';

class FormPatComUnificado extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            /**Radio button */
            nueva: '',
            traspaso: '',
            traslado: '',
            retiro: '',
            renovacion: '',
            cambio: '',
            /*Informacion Solicitante*/
            nomSolicitante: '',
            cedula: ''
        }
    }

    render() {
        const { nomSolicitante } = this.state
        const { cedula } = this.state

        return (
            <div>
                <form>

                    <div>
                        <h1>Formulario Patente Comercial Unificado</h1>
                        <h3>Numero de tramite:</h3>
                        <h3>Fecha del tramite:</h3>
                        <h3>Funcionario que recibe:</h3>
                    </div>

                    <div>

                        <h3>Tipo de solicitud:</h3>
                        <input type="radio" value="nueva" name="tipoSol"></input>
                        <label>Nueva    </label>

                        <input type="radio" value="traspaso" name="tipoSol"></input>
                        <label>Traspaso </label>

                        <input type="radio" value="traslado" name="tipoSol"></input>
                        <label>Traslado </label>

                        <input type="radio" value="retiro" name="tipoSol"></input>
                        <label>Retiro   </label>

                        <input type="radio" value="renovacion" name="tipoSol"></input>
                        <label>Renovacion   </label>

                        <input type="radio" value="cambio" name="tipoSol"></input>
                        <label>Cambio   </label>
                    </div>

                    <div>
                        <h2>Datos del Solicitante:</h2>
                        <div>
                            <label for>Nombre del solicitante o patentado:</label>
                            <input type="text" value={nomSolicitante} onChange={(e) => this.setState({ nomSolicitante: e.target.value })} />
                        </div>

                        <div>
                            <label>Cedula:</label><br></br>
                            <input type="text" value={cedula} onChange={(e) => this.setState({ cedula: e.target.value })} /><br></br>
                        </div>

                        <div>
                            <label>En caso de sociedades: Nombre del representante legal</label><br></br>
                            <input type="text" /><br></br>
                        </div>

                        <div>
                            <label>Cedula Juridica:</label><br></br>
                            <input type="number" /><br></br>
                        </div>

                        <div>
                            <label>Lugar o medio de notificación:</label><br></br>
                        </div>

                        <div>
                            <label>Telefono:</label><br></br>
                            <input type="tel" /><br></br>
                        </div>

                        <div>
                            <label>Fax:</label><br></br>
                            <input type="tel" /> <br></br>
                        </div>

                        <div>
                            <label>Dirección:</label><br></br>
                            <input type="text" /><br></br>
                        </div>
                        <div>
                            <label>Correo electrónico:</label><br></br>
                            <input type="email" /><br></br>
                        </div>
                    </div>{/* fin de datos del solicitante*/}

                    <div>

                        <h2>Dueño de la propiedad:</h2>

                        <div>
                            <label>Nombre del propietario</label><br></br>
                            <input type="text" /><br></br>
                        </div>


                        <div>
                            <label>En caso de sociedades: Nombre del representante legal:</label><br></br>
                            <input type="text" /><br></br>
                        </div>

                        <div>
                            <label>Cédula jurídica o personal:</label><br></br>
                            <input type="text" /><br></br>
                        </div>

                        <div>
                            <label>Dirección:</label><br></br>
                            <input type="text" /><br></br>
                        </div>

                    </div>{/*fin de dueño de la propiedad */}

                    <div>

                        <h2>Datos Del Local</h2>
                        <div>
                            <label>Nombre comercial del negocio o local</label><br></br>
                            <input type="text" /><br></br>
                        </div>

                        <div>
                            <label>Actividad específica</label><br></br>
                            <input type="text" /><br></br>
                        </div>

                    </div>{/*fin de datos del local */}

                    <div>

                        <h2>Datos Del Local Retiro</h2>
                        <div>
                            <label>Dirección exacta del local, Distrito, otras señas</label><br></br>
                            <input type="text" /><br></br>
                        </div>

                        <div>
                            <label>Numero de Patente comercial</label><br></br>
                            <input type="text" /><br></br>
                        </div>


                    </div>{/*fin datos del local retiro */}

                    <div>
                        <h2>Datos Del Local Renovacion</h2>
                        <div>
                            <label>Numero de Plano catastro</label><br></br>
                            <input type="number" placeholder="Ingrese numero" /><br></br>
                            <div>
                                <label>Telefono:</label><br></br>
                                <input type="tel" /><br></br>
                            </div>

                            <div>
                                <label>Fax:</label><br></br>
                                <input type="tel" /> <br></br>
                            </div>

                            <div>
                                <label>Correo electrónico:</label><br></br>
                                <input type="email" /><br></br>
                            </div>
                        </div>

                        <div>
                            <label>Numero de Patente comercial</label><br></br>
                            <input type="text" /><br></br>
                        </div>

                    </div>{/*Fin de datos del local renovacion */}
                </form>
            </div>
        );
    }
}


export default FormPatComUnificado;