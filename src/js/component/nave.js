import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Nave = (props) => {
	const {  actions } = useContext(Context);

	return (
		<div className="card mx-3" style={{width: "18rem"}}>
			<img src="..." className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
                <h5 className="card-title">{props.model}</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={"/nave-info/" + props.uid } className="btn btn-primary">
                    <span >Link to123:</span>
                </Link>
				<button onClick={ ()=> actions.cambiarMensaje(props.name)}>Cambiar mensaje</button>
			</div>
		</div>
	);
};
