import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";

export function Home({ name }) {
	function salir() {
		return auth.signOut();
		navigate("/");
	}
	return (
		<div className='w-[450px] flex flex-col gap-5 shadow-md rounded-[10px] p-8 bg-white'>
			<div>
				<div>
					<h1>
						<Link to='/login'>Login</Link>
					</h1>
					<br />
					<h1>
						<Link to='/signup'>SignUp</Link>
					</h1>
				</div>
			</div>
			<h2 className='text-2xl font-bold text-center'>
				{name ? `Bienvenido - ${name}` : "Iniciar Sesion"}
			</h2>
			<button
				className='outline-none border-none bg-[#9900ff] text-white rounded-[5px] font-bold text-base py-[10px] px-4 w-full cursor-pointer hover:bg-[#aa2aff]'
				onClick={salir}>
				Salir
			</button>
		</div>
	);
}

Home.propTypes = {
	name: PropTypes.string
};
