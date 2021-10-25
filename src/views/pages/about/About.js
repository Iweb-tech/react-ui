// import { useHistory } from "react-router-dom";
// import { history } from "src/_helpers";
export default function About(props){
	// let history = useHistory();
		console.log(props.title)
	// console.log(rest)
	return <>
		<button onClick={()=>props.history.push('/plan')}>Plan page</button>
		<button onClick={()=>props.history.push('/login')}>Login page</button>
	</>
}