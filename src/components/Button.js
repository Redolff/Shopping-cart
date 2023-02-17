import { Component } from 'react'

class Button extends Component {
    render(){
        return (
            <button type="button" className="btn btn-success" {...this.props} />
        )
    }
}

export default Button