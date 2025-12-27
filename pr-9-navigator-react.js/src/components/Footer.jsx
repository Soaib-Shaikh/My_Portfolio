import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-dark text-light pt-4 pb-3 mt-5 border-top">
            <div className="container">
                <div className="row">
                    {/* Brand Section */}
                    <div className="col-md-4 mb-3">
                        <h5>Your Company</h5>
                        <p className="small text-muted">
                            A simple and clean footer built using Bootstrap. Modify text as needed.
                        </p>
                    </div>


                    {/* Quick Links */}
                    <div className="col-md-4 mb-3">
                        <h6>Quick Links</h6>
                        <ul className="list-unstyled small">
                            <li><Link to="#" className="text-decoration-none text-light">Home</Link></li>
                            <li><Link to="#" className="text-decoration-none text-light">About</Link></li>
                            <li><Link to="#" className="text-decoration-none text-light">Services</Link></li>
                            <li><Link to="#" className="text-decoration-none text-light">Contact</Link></li>
                        </ul>
                    </div>


                    {/* Newsletter */}
                    <div className="col-md-4 mb-3">
                        <h6>Subscribe</h6>
                        <form>
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                />
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>


                <hr className="border-secondary" />


                <div className="d-flex justify-content-between small text-muted">
                    <span>© {new Date().getFullYear()} Your Company. All rights reserved.</span>


                    <div className="d-flex gap-3">
                        <Link to="#" className="text-light text-decoration-none">Privacy</Link>
                        <Link to="#" className="text-light text-decoration-none">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
