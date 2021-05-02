import React from 'react'
//ChildrenCOmp
function Form(props) {


    const personalInfo =
        <div>
            <form>
                <h1>Personal Information</h1>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" onChange={() => props.popo} /*disabled={this.state.disabled}*/ />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" /*onChange={this.changeHandle} disabled={this.state.disabled}*/ />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" id="email"/*onChange={this.changeHandle} disabled={this.state.disabled}*/ />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" className="form-control" id="phone" /*onChange={this.changeHandle} disabled={this.state.disabled}*/ />
                </div>
                {/* <button type="submit" className="btn btn-primary" /*onClick={this.clickHandle}>Submit</button> */}
            </form>
        </div>


    const education =
        <div>
            <form className="form-educ">
                <h1>Education</h1>
                <div className="form-group">
                    <label htmlFor="diploma">Diploma</label>
                    <input type="text" className="form-control" id="diploma" /*onChange={this.changeHandle} disabled={this.state.disabled}*/  />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input type="text" className="form-control" id="year" /*onChange={this.changeHandle} disabled={this.state.disabled}*/  />
                </div>
                <div className="form-group">
                    <label htmlFor="school">University</label>
                    <input type="text" className="form-control" id="school" /*onChange={this.changeHandle} disabled={this.state.disabled}*/  />
                </div>
                {/* <button type="submit" className="btn btn-primary" onClick={this.createHandle} >ADD</button><br></br> */}
              
            </form>
        </div>




    return (
        <div>
            {personalInfo}
            {education}
            <button type="submit" className="btn btn-primary" /*onClick={this.clickHandle}*/ >Submit</button>
        </div>
    )
}
export default Form