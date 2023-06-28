// import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { InputControl } from "../InputControl/InputControl";
import { useState } from "react";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export function Login() {
	const navigate = useNavigate();
	const [values, setvalues] = useState({ email: "", pass: "" });
	const [errorMsg, setErrorMsg] = useState([]);
	const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
	const LogIn = () => {
		if (!values.email || !values.pass) {
			setErrorMsg("Todos los campos son obligatorios");
			return;
		}
		setErrorMsg("");
		setSubmitButtonDisabled(true);
		signInWithEmailAndPassword(auth, values.email, values.pass)
			.then(async (res) => {
				setSubmitButtonDisabled(false);
				navigate("/");
			})
			.catch((err) => {
				setSubmitButtonDisabled(false);
				setErrorMsg(err.message);
				console.log(err.message);
			});
	};

	return (
		<div className='flex flex-col gap-2'>
			<div className='min-w-[450px] h-fit w-fit bg-white shadow-md p-8 flex flex-col gap-8 rounded-[10px]'>
				<h1 className='text-2xl font-semibold'>Login</h1>
				<InputControl
					label={"Email"}
					onChange={(e) =>
						setvalues((prev) => ({ ...prev, email: e.target.value }))
					}
					placeholder='Ingrese su correo'
				/>
				<InputControl
					label={"Contraseña"}
					onChange={(e) =>
						setvalues((prev) => ({ ...prev, pass: e.target.value }))
					}
					placeholder='Ingrese su contraseña'
				/>
				<div className='flex flex-col gap-5'>
					<b className='font-bold text-xs text-[#ff3300] text-center'>
						{errorMsg}
					</b>
					<button
						className={`w-full outline-none border-none bg-[#9900ff] text-white rounded-[5px] font-bold text-base py-[10px] px-4 hover:bg-[#aa2aff] `}
						onClick={LogIn}
						disabled={submitButtonDisabled}>
						Login btn
					</button>
					<p className='font-semibold'>
						Crear cuenta
						<span className='font-bold text-[#9900ff] tracking-[1px] text-base'>
							<Link to={"/signup"}> aqui</Link>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
