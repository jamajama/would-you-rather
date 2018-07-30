import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <nav className="navbar navbar-expand navbar-light bg-light">
                    <div className='projectContainer'>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <a href="#" className="nav-item active nav-link">Home</a>
                                <a href="#" className="nav-item nav-link">New Question</a>
                                <a href="#" className="nav-item nav-link">Leaderboard</a>
                            </ul>

                            <span className="navbar-text margin-left-100 margin-right-25 text-info">
                             Hello LoggedInUser
                        </span>
                            <span className="navbar-nav">
                            <button  className="btn-sm btn-info">Logout</button>
                        </span>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;