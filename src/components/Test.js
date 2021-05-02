import React, { Component } from 'react'
import Form from './Form'

class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            disabled: false
        }


    }



    render() {
        return (
            <div>
                <Form>
                   
                   
                </Form>
            </div>
        )
    }
}

export default Test
