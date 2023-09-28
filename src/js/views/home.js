import React, { useContext } from "react";
import "../../styles/home.css";
import {Nave} from '../component/nave'
import { Context } from "../store/appContext";


export const Home = () => {
	
	const { store, actions } = useContext(Context);	

	return(
		<div className="text-center mt-5">
			<h1>Home</h1>	
			<h2>Desde FLux</h2>		
			{store.naves.map( (item) => <Nave key={item.uid} uid={item.uid} name={item.name} model={item.model}/>   )}

		</div>
	)
};
