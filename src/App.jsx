import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import HomePage from './components/HomePage'
import ErrorPage from './components/ErrorPage'
import PorqueTerUmSite from './components/PorqueTerUmSite'
import Skills from './components/Skills'

function App() {
    return (

        <BrowserRouter>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <span class="navbar-brand text-primary fw-bold ms-3"  >HMRdev.  |</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link text-dark" aria-current="page" to={'/'}>Página principal</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-dark" to={'/PorqueTerUmSite'}>Porque ter um site?</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-dark" to={'/Skills'}>Minhas Skills</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/PorqueTerUmSite' element={<PorqueTerUmSite />} />
                <Route path='/Skills'  element={<Skills />}/>
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App  