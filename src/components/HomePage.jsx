import React from 'react'
import './style.css'

function HomePage (){
    return (
        <div className='bg-dark container-md'>
            <div className="row">
                <div className="offset-md-1 text-light col-md-7 text-center text-md-start text-start py-5 h1 "> olá, eu sou <br />
                <span className='text-primary'> HMRdev.</span> <br />Desenvolvedor web 
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12 col-md-5 offset-md-7 text-light fs-5 mb-5 fw-bold '>
                    <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat itaque autem earum sit dolore sapiente aliquam at explicabo mollitia eveniet recusandae, unde impedit, maxime, aliquid a ullam consectetur maiores possimus.</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage