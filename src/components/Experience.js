import React, { Component } from 'react'

class Experience extends Component {

    constructor(props) {
        super(props)
        this.state = {
            role: '',
            year: '',
            company: '',
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
        const {role, year, company} = this.state
        return (
            !this.state.disabled ?
            <div>
                <form className="form-educ">
                    <h1>Experiences</h1>
                    <div className="form-group">
                        <label htmlFor="diploma">Role</label>
                        <input type="text" className="form-control" id="role" onChange={this.changeHandle} disabled={this.state.disabled} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Year</label>
                        <input type="text" className="form-control" id="year" onChange={this.changeHandle} disabled={this.state.disabled} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="school">Company</label>
                        <input type="text" className="form-control" id="company" onChange={this.changeHandle} disabled={this.state.disabled} />
                    </div>
                    {/* <button type="submit" className="btn btn-primary" onClick={this.createHandle} >ADD</button><br></br> */}
                    <button type="submit" className="btn btn-primary" onClick={this.clickHandle} >Submit</button>
                </form>
            </div> :
                <div>
                    <form>
                        <h1>Experiences</h1>
                        <div className="form-group">
                            <label htmlFor="role">Diploma</label>
                            <p className="form-control" id="role">{role}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="year">Year</label>
                            <p className="form-control" id="year" >{year}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="company">Company</label>
                            <p className="form-control" id="company" >{company}</p>
                        </div>
                        <button type="edit" className="btn btn-primary" onClick={this.clickHandle}>Edit</button>
                    </form>
                </div>
        )
    }
}

export default Experience
