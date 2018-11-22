import React from 'react'
import Button from './components/Button'


class Counter extends React.Component {
    state = {
    }

    addButton = () => {
        if (this.state.value >= this.props.max) return

        this.setState({ value: this.state.value + 1 })
    }

    reduceButton = () => {
        if (this.state.value <= this.props.min) return

        this.setState({ value: this.state.value - 1 })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>
                        {this.state.value}
                    </h1>
                    <h1>
                        {this.props.min}
                    </h1>
                    <h1>
                        {this.props.max}
                    </h1>
                    <Button
                        label={'+'}
                        onClick={this.addButton}
                    />
                    <Button
                        label={'-'}
                        onClick={this.reduceButton}
                    />
                </div>
                <div>
                    Przekorczyles zakres
                </div>
            </div>
        )
    }

}






export default Counter
