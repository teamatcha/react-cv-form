import React, { Component } from 'react'

class Education extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            year: '',
            school: '',
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
        const { title, year, school } = this.state
        return (
            !this.state.disabled ?
                <div>
                    <form className="form-educ">
                        <h1>Education</h1>
                        <div className="form-group">
                            <label htmlFor="title">Diploma</label>
                            <input type="text" className="form-control" id="title" onChange={this.changeHandle} disabled={this.state.disabled} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="year">Year</label>
                            <input type="text" className="form-control" id="year" onChange={this.changeHandle} disabled={this.state.disabled} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="school">University</label>
                            <input type="text" className="form-control" id="school" onChange={this.changeHandle} disabled={this.state.disabled} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.clickHandle} >Submit</button>
                    </form>
                </div> :
                <div>
                    <form>
                        <h1>Education</h1>
                        <div className="form-group">
                            <label htmlFor="title">Diploma</label>
                            <p className="form-control" id="title">{title}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="year">Year of Completion</label>
                            <p className="form-control" id="year" >{year}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="school">University</label>
                            <p className="form-control" id="school" >{school}</p>
                        </div>
                        <button type="edit" className="btn btn-primary" onClick={this.clickHandle}>Edit</button>
                    </form>
                </div>
        )
    }
}

export default Education