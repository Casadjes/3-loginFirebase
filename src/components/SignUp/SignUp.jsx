import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { InputControl } from "../InputControl/InputControl";

export function SignUp() {
	const navigate = useNavigate();
	const [values, setValues] = useState({
		name: "",
		email: "",
		pass: ""
	});
	const [erroMsg, setErrorMsg] = useState([]);
	const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

	const registro = () => {
		if (!values.name || !values.email || !values.pass) {
			setErrorMsg("Todos los campos son obligatorios");
			return;
		}
		setErrorMsg("");
		setSubmitButtonDisabled(true);
		createUserWithEmailAndPassword(auth, values.email, values.pass)
			.then(async (res) => {
				setSubmitButtonDisabled(false);
				const user = res.user;
				await updateProfile(user, {
					displayName: values.name
				});
				navigate("/");
			})
			.catch((err) => {
				setSubmitButtonDisabled(false);
				setErrorMsg(err.message);
			});
	};

	return (
		<div className='h-full min-h-screen w-full bg-yellow-200 flex items-center justify-center'>
			<div className='min-w-[450px] h-fit w-fit bg-white shadow-md p-8 rounded-[10px] flex flex-col gap-8'>
				<h1 className='text-2xl font-semibold'>Registro</h1>
				<InputControl
					label='Nombre'
					placeholder='Ingrese un nombre'
					onChange={(e) =>
						setValues((prev) => ({ ...prev, name: e.target.value }))
					}
				/>
				<InputControl
					label='Email'
					placeholder='Ingrese un correo'
					onChange={(e) =>
						setValues((prev) => ({ ...prev, email: e.target.value }))
					}
				/>
				<InputControl
					label='Contraseña'
					placeholder='Ingrese un contraseña'
					onChange={(e) =>
						setValues((prev) => ({ ...prev, pass: e.target.value }))
					}
				/>
				<div className='flex flex-col gap-5'>
					<b className='font-bold text-sm text-[#ff3300] text-center'>
						{erroMsg}
					</b>
					<button
						className='outline-none border-none bg-[#9900ff] text-white rounded-[5px] font-bold text-base py-[10px] px-4 w-full cursor-pointer hover:bg-[#aa2aff]'
						onClick={registro}
						disabled={submitButtonDisabled}>
						Guardar
					</button>
					<p className='font-semibold text-black'>
						Si ya tienes una cuenta
						<span className='font-bold text-[#9900ff] tracking-[1px] text-base '>
							<Link to={"/login"}> Inicia sesión</Link>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
