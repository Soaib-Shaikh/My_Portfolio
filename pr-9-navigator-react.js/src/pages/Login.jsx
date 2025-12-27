import React from 'react'

function Login() {
  return (
    <div className='container'>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form action="" method="post">
            <h2>Login</h2>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" name="username" id="username" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" name="password" id="password" className="form-control" />
            </div>
            <button className='btn btn-outline-primary'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
