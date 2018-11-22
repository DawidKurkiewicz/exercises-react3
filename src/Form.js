import React from 'react'
import TextField from 'material-ui/TextField';


class Form extends React.Component {
    state = {
        text: 'initial value'
    }
    render() {
        return (
            <div>
                
                <h1>{this.state.text}</h1>
                <TextField
                    type="text"
                    value={this.state.text}
                    onChange={(event) => this.setState({ text: event.target.value })}
                />
                <TextField
                    value={this.state.text}
                />
            </div>
        )
    }
}
export default Form