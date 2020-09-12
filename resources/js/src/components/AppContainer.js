import React from 'react';

const AppContainer = ({title, children}) => {
    return(
        <div className="container">
            <div className="card">
                <h1 className="card-header">{title}</h1>
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

// class AppContainer extends React.Component{
//     render(){
//         return (
//             <div className="container">
//                 <div className="card">
//                     <h1 className="card-header">{this.props.title}</h1>
//                     <div className="card-body">
//                         {this.props.children}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default AppContainer;