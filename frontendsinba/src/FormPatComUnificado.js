import React from 'react';

class FormPatComUnificado extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nomSolicitante: '',
            nueva: '',
            traspaso: '',
            traslado: '',
            retiro: '',
            renovacion: '',
            cambio: ''
        }
    }



    render() {
        const { nomSolicitante } = this.state

        return (
            <div>
                <form>

                    <h1>Formulario Patente Comercial Unificado</h1>
                    <h2>Numero de tramite:</h2>
                    <h2>Fecha del tramite:</h2>
                    <h2>Funcionario que recibe:</h2>

                    <div>
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

                    <label for>Nombre del solicitante o patentado:</label>
                    <input type="text" value={nomSolicitante} onChange={(e) => this.setState({ nomSolicitante: e.target.value })}
                    />



                </form>


                <div>
                    <h2>Values of the form</h2>
                    <p>nomSolicitante: {this.state.nomSolicitante}</p>
                </div>
            </div>
        );
    }
}


export default FormPatComUnificado;