import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ' '
        }
    }
    setValue = x => {
        this.setState((state) => ({value: state.value + x}))
    }
    calculate = () => {
        try{
            const output = eval(this.state.value)
            this.setState({value : output})
        }
        catch{
            this.setState({value:'invalid input'})
        }
    }
    clearScreen = () => {
        this.setState({value: ''})
    }
    undo = () => {
       const val = this.state.value.substring(0, this.state.value.length - 1);
       this.setState({value:val})
    }


    render() {
        return (
            <table border=".5">
                <tr>
                    <td colspan="4"><h3>Simple Calculator</h3></td>
                </tr>
                <tr>
                    <td colspan="4"><input type="text" id="result" value={this.state.value} /></td>
                </tr>
                <tr>
                    <td><input type="button" value='AC' id="clear" onClick = {this.clearScreen}/></td>
                    <td><input type="button" value='Delete' id="delete" onClick = {this.undo}/></td>
                    <td><input type="button" value='=' id="equal" onClick = {this.calculate}/></td>
                    <td><input type="button" value='/' id="divide" onClick = {e => this.setValue(e.target.value)}/></td>
                </tr>
                <tr>
                    <td><input type="button" value='7' id="7" onClick = {e => this.setValue(e.target.value)}/></td>
                    <td><input type="button" value='8' id="8" onClick = {e => this.setValue(e.target.value)}/></td>
                    <td><input type="button" value='9' id="9" onClick = {e => this.setValue(e.target.value)}/></td>
                    <td><input type="button" value='*' id="multiply" onClick = {e => this.setValue(e.target.value)}/></td>
                </tr>
                <tr>
                <td><input type="button" value='4' id="4" onClick = {e => this.setValue(e.target.value)}/></td>
                <td><input type="button" value='5' id="5" onClick = {e => this.setValue(e.target.value)}/></td>
                <td><input type="button" value='6' id="6" onClick = {e => this.setValue(e.target.value)}/></td>
                <td><input type="button" value='-' id="subtract" onClick = {e => this.setValue(e.target.value)}/></td>
                </tr>
                <tr>
                <td><input type="button" value='1' id="1" onClick = {e => this.setValue(e.target.value)}/></td>
                <td><input type="button" value='2' id="2" onClick = {e => this.setValue(e.target.value)}/></td>
                <td><input type="button" value='3' id="3" onClick = {e => this.setValue(e.target.value)}/></td>
                <td><input type="button" value='+' id="add" onClick = {e => this.setValue(e.target.value)}/></td>
                </tr>
                <tr>
                <td colspan="2"><input type="button" value='0' onClick = {e => this.setValue(e.target.value)}/></td>
                <td><input type="button" value='.' onClick = {e => this.setValue(e.target.value)}/></td>
                <td><input type="button" value='%' onClick = {e => this.setValue(e.target.value)}/></td>
                </tr>
            </table>
        )
    }
}
export default Calculator