import React, { Component } from 'react'

class Personal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            disabled: false
        }

        this.changeHandle = this.changeHandle.bind(this)
        this.clickHandle = this.clickHandle.bind(this)
    }


    clickHandle = (e) => {
        e.preventDefault()
        this.setState(
            this.disabledFunction()
        )
    }

    disabledFunction = () => {
        if (this.state.disabled === true) {
            this.setState({ disabled: false })
        } else {
            this.setState({ disabled: true })
        }
    }

    changeHandle = (e) => {
        const id = e.target.id
        let value = e.target.value
        this.setState({
            [id]: value
        })
    }

    render() {
        const { firstName, lastName, email, phone } = this.state
        return (
            !this.state.disabled ?
                <div>
                    <form>
                        <h1>Personal Information</h1>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName"  onChange={this.changeHandle} disabled={this.state.disabled} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" id="lastName" onChange={this.changeHandle} disabled={this.state.disabled} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" id="email" onChange={this.changeHandle} disabled={this.state.disabled} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" className="form-control" id="phone" onChange={this.changeHandle} disabled={this.state.disabled} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.clickHandle}>Submit</button>
                    </form>

                </div> :
                <div>
                        <form>
                        <h1>Personal Information</h1>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <p className="form-control" id="firstName" >{firstName}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <p className="form-control"  id="lastName" >{lastName}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <p className="form-control" id="email" >{email}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <p className="form-control" id="phone">{phone}</p>
                        </div>
                        <button type="edit" className="btn btn-primary" onClick={this.clickHandle}>Edit</button>
                    </form>


                </div>
        )
    }
}

export default Personal

