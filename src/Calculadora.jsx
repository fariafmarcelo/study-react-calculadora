// importação das bibliotecas
import React, {Component} from 'react'

// cria uma classe do tipo componente que pode ser utilizada externamente
export default class Calculadora extends Component {

    constructor(){
        super()
        // inicialização das variaveis
        // como as variáveis podem ser alteradas, elas precisam estar dentro do state
        this.state = {
            operando1: 1,
            operando2: 1,
            operador: '+',
            resultado: 1,
            sexo: 'm'
        }
    }

    // função que altera o valor de operando1
    setOperando1(e) {
        this.setState({
            operando1: Number(e.target.value) // valor do elemento HTML relacionado ao operando1 que sofreu a ação
        })
    }
    // função que altera o valor de operando2
    setOperando2(e) {
        this.setState({
            operando2: Number(e.target.value) // valor do elemento HTML relacionado ao operando2 que sofreu a ação
        })
    }
    // função que altera o valor do operador
    setOperador(e) {
        this.setState({
            operador: e.target.value // valor do elemento HTML relacionado ao operador que sofreu a ação
        })
    }

    //função que faz a operação
    opera() {
        var aux = (this.state.sexo === "m") ? aux = "Prezado senhor, o resultado é: " : "Prezada senhora, o resultado é: "
        switch(this.state.operador){
            case '+' : this.setState({ resultado: `${aux} ${this.state.operando1 + this.state.operando2}` })
                break
            case '-' : this.setState({ resultado: `${aux} ${this.state.operando1 - this.state.operando2}` })
                break
            case '*' : this.setState({ resultado: `${aux} ${this.state.operando1 * this.state.operando2}` })
                break
            case '/' : if (this.state.operando2 !== 0) {
                            this.setState({ resultado: `${aux} ${this.state.operando1 / this.state.operando2}` })
                        } else {
                            this.setState({ resultado: "Impossível realizar a divisão" })
                        }
                        break
            default: break // caso contrário
        }
    }

    // função que altera o valor do sexo
    setSexo(valor) {
        this.setState({
            sexo: valor
        })
    }

    // função que mostra ao usuário - render
    render () {
        return (
            <div>
                <h1> Projeto de Calculadora </h1>
                <h2> Operando 1: <input type="number" value={this.state.operando1} onChange={e => this.setOperando1(e)}/> </h2>
                <h2> Operando 2: <input type="number" value={this.state.operando2} onChange={e => this.setOperando2(e)}/> </h2>
                <h2>
                    Operandor:
                    <select value={this.state.operandor} onChange={e => this.setOperador(e)}>
                        <option value="+"> + </option>
                        <option value="-"> - </option>
                        <option value="*"> * </option>
                        <option value="/"> / </option>
                    </select>
                </h2>
                <h2>
                    Masculino<input type="radio" name="sexo" onClick={e => this.setSexo("m")}/>
                    Feminino<input type="radio" name="sexo" onClick={e => this.setSexo("f")}/>
                </h2>
                <h2> <button type="button" onClick={ e => this.opera() }>Calcular</button> </h2>
                <h2> Resultado: {this.state.resultado} </h2>
            </div>
        )
    }
}