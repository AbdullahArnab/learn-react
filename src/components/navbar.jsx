import React, {Component} from 'react';
//
// const Navbar = ({totalCounters}) => {
//     return(
//         // <!-- As a link -->
//         <nav className="navbar navbar-light bg-light">
//             <a className="navbar-brand" href="http://localhost:3000">Navbar</a>
//             <span>
//                 {totalCounters}
//             </span>
//         </nav>
//     );
// }

class Navbar extends Component{
    render(){
        return(
            // <!-- As a link -->
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="http://localhost:3000">
                    Navbar
                    <span  className="badge badge-pill badge-secondary">
                        {this.props.totalCounters}
                    </span>
                </a>
            </nav>

        );
    }
}

export default Navbar;
