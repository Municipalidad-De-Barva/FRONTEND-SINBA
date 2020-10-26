import React, {Component} from "react";
import "@fortawesome/fontawesome-free";

export default class DashboardPat extends Component {
	render() {
		return (
			<nav className="col-md-3 d-none d-md-block bg-light sidebar">
				<div className="sidebar-sticky">
					<ul className="nav flex-column">
						<li className="nav-item">
							<a
								href="./PageListSolPatNueva"
								className="nav-link sidebar-heading 
                         d-flex justify-content-between align-items-center"
							>
								<i className="fas fa-book-open"></i>
								Patentes Nuevas
								{/*<span className="badge badge-primary badge-pill">
									{this.state.todos.length}
								</span>
								*/}
							</a>
						</li>
						<li className="nav-item">
							<a
								href="./PageListSolPatNuevaPendiente"
								className="nav-link  sidebar-heading 
                         d-flex justify-content-between align-items-center"
							>
								<i className="fas fa-tasks"></i>
								Patentes Pendientes
								{/* <span className="badge badge-primary badge-pill">
                                    {this.state.todos.length}
                                </span> */}
							</a>
						</li>
						<li className="nav-item">
							<a
								href="./PageListSolPatNuevaAprobadas"
								className="nav-link  sidebar-heading 
                         d-flex justify-content-between align-items-center"
							>
								<i className="fas fa-check"></i>
								Patentes Aprobadas
								{/*<span className="badge badge-primary badge-pill">
									{this.state.todos.length}
								</span>*/}
							</a>
						</li>
						<li className="nav-item">
							<a
								href="./PageListSolPatNuevaRechazadas"
								className="nav-link sidebar-heading 
                         d-flex justify-content-between align-items-center"
							>
								<i className="fas fa-trash"></i>
								Patentes Rechazadas
								{/*<span className="badge badge-primary badge-pill">
									{this.state.todos.length}
								</span>*/}
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
