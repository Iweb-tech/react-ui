import { Redirect } from 'react-router-dom';
export default function Plan(props){

	const handleClick = () =>{
		console.log('called');
		return 
	}
	return <>
	<Redirect to="/login" />
	<p>this is plan page</p>
		<button onClick={handleClick}>About page</button>
	</>
}