import React from 'react'



class Users extends React.Component {
    state = {
        users: null,
        isLoading: false,
        isError: false

    }
componentDidMount() {
    this.setState({ isLoading: true })

    fetch(`https://randomuser.me/api?results=${this.props.numberOfResults}`)
        .then(response => response.json())
        .then(data => this.setState({
            users: data.results,
            isLoading: false
        }))
        .catch(()=> this.setState({
            isError: true,
            isLoading: false
        }))
}

render() {
    return (
        <div>
            {
                this.state.users ?
                    this.state.users.map ?
                        this.state.users.map(user => (
                            <div
                                key={user.login.uuid}
                            >
                                {user.name.first} {user.name.last}
                            </div>
                        ))
                        :
                        "error"
                    :
                    "ładowanie.."
            }
        </div>
    )
}
}

Users.defaultProps = {
    numberOfResults: 2
}
export default Users