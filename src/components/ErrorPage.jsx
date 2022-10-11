import React from 'react'
import {Link} from 'react-router-dom'

function ErrorPage() {
    return (
        <div className='container-md mt-5 py-5'>
            <div className=' text-light fw-bold text-center my-3'>
                Ops, ocorreu algum erro. Verifique a URL <br />
            </div>
            <div className=' text-light fw-bold text-center my-3'>
                ou <br />
                <Link to={'/'} >clique aqui para volta a pagina principal</Link><br />
                html code: 404
            </div>
        </div>
    )
}

export default ErrorPage