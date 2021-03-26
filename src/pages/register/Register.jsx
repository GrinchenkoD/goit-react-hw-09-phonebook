import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../../redux/auth/auth.operations'
import { getIsAuthSelector } from '../../redux/auth/auth.selectors'
import styles from "./Register.module.css"


const InitialState = {
    name:'',
    email: '',
    password:''
}
 class Register extends Component {

     state = {
        ...InitialState
    }

 handleChange = (event) => {
        const { name, value } = event.target
        this.setState({[name]:value})
    }
     
handleSubmit = (event) => {
    event.preventDefault();
    this.props.register(this.state).then(() => {
         if (this.props.isAuth) {
        this.props.history.push("/contacts")
    }})   
}

    render() {
const {name, email, password} = this.state

        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <label htmlFor="name"  className={styles.label}> Name
                    <input id="name"
                        name='name'
                        type="text"
                        className={styles.input}
                        placeholder="Name*"
                        value={name}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <label htmlFor="email"  className={styles.label}>Email
                    <input id="email"
                        name='email'
                        type="mail"
                        className={styles.input}
                        placeholder="Email*"
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <label htmlFor="password"  className={styles.label}>Password
                    <input id="password"
                        name='password'
                        type="password"
                        className={styles.input}
                        placeholder="Password*"
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <button type="submit"  className={styles.submitBtn}>Sign up</button>
            </form>
        )
    }
}

const mapStateToProps = (state)=> ({
   isAuth: getIsAuthSelector(state)
})

const mapDispatchToProps = {
    register
}


export default connect(mapStateToProps, mapDispatchToProps ) (Register)