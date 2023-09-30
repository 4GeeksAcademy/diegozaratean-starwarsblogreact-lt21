const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			naves: [],
			message: 'incializado desde flux',
			nombres_cambiados: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			cambiarMensaje: (nombreNave) => {
				console.log('se cambio mensaje')
				const store = getStore();

				setStore({ message: nombreNave });
				

				if(store.nombres_cambiados.includes(nombreNave)){
					console.log('Ya esta el elemento')
					setStore({ nombres_cambiados: store.nombres_cambiados.filter( (item)=> item !== nombreNave  )  });
				}else{
					console.log('Noo esta el elemento')
					setStore({ nombres_cambiados: [...store.nombres_cambiados,nombreNave] });
				}				
				console.log(store.nombres_cambiados)
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				console.log('Se cargo desde Flux')
				fetch('https://swapi.dev/api/starships')
				.then( (response) =>  response.json())
				// .then( (data) =>  console.log(data.results))
				.then( (data) =>  setStore({ naves: data.results }))
				
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
