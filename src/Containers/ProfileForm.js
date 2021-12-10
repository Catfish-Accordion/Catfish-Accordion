import React, { useState } from 'react';
import { checkValidity, checkMatch } from '../utility';
import { useNavigate } from 'react-router';

const ProfileForm = () => {
	const history = useNavigate();
	const [firstName, setFirstName] = useState({
		placeholder: 'your first name',
		value: '',
		validation: {
			required: true,
			alphabeticOnly: true,
		},
		valid: false,
		touched: false,
	});
	const [lastName, setLastName] = useState({
		placeholder: 'your last name',
		value: '',
		validation: {
			required: true,
			alphabeticOnly: true,
		},
		valid: false,
		touched: false,
	});
	const [email, setEmail] = useState({
		placeholder: 'your email',
		value: '',
		validation: {
			required: true,
			isEmail: true,
		},
		valid: false,
		touched: false,
	});

	const [birthday, setBirthday] = useState({
		placeholder: 'your birthday',
		value: '',
		validation: {
			required: true,
			isDate: true,
		},
		valid: false,
		touched: false,
	});

	const [formInvalid, setFormInvalid] = useState(false);
	const [errorMessages, setErrorMessages] = useState({
		firstNameError: '',
		lastNameError: '',
		emailError: '',
		birthdayError: '',
	});

	const inputChangedHandler = (event) => {
		const property = event.target.name;
		const value = event.target.value;
		switch (property) {
			case 'first name':
				setFirstName((prev) => {
					return { ...prev, value, touched: true };
				});
				break;
			case 'last name':
				setLastName((prev) => {
					return { ...prev, value, touched: true };
				});
				break;
			case 'email':
				setEmail((prev) => {
					return { ...prev, value, touched: true };
				});
				break;
			case 'birthday':
				setBirthday((prev) => {
					return { ...prev, value, touched: true };
				});
				break;
			default:
				console.warn('unhandled input name!');
				break;
		}
	};

	const checkValidFields = () => {
		let errors = 0;
		if (!checkValidity(firstName.value, firstName.validation)) {
			errors++;
			setErrorMessages((prev) => {
				return { ...prev, firstNameError: 'Enter your first name' };
			});
		}
		if (!checkValidity(lastName.value, lastName.validation)) {
			errors++;
			setErrorMessages((prev) => {
				return { ...prev, lastNameError: 'Enter your last name' };
			});
		}
		if (!checkValidity(email.value, email.validation)) {
			errors++;
			setErrorMessages((prev) => {
				return { ...prev, emailError: 'Enter a valid email address' };
			});
		}
		if (!checkValidity(birthday.value, birthday.validation)) {
			errors++;
			setErrorMessages((prev) => {
				return { ...prev, birthdayError: 'Enter a valid birth date' };
			});
		}
		if (errors) return false;
		else return true;
	};
	const submitHandler = (e) => {
		e.preventDefault();
		if (checkValidFields()) {
			console.log(
				'success, firstName =',
				firstName.value,
				'lastName',
				lastName.value,
				'email',
				email.value,
				'birthday',
				birthday.value
			);
			clearForm()
		} else {
			setFormInvalid(true);
		}
	};

	const clearForm = () => {
		setFirstName({
			placeholder: 'your first name',
			value: '',
			validation: {
				required: true,
				alphabeticOnly: true,
			},
			valid: false,
			touched: false,
		});
		setLastName({
			placeholder: 'your last name',
			value: '',
			validation: {
				required: true,
				alphabeticOnly: true,
			},
			valid: false,
			touched: false,
		});
		setBirthday({
			placeholder: 'your birthday',
			value: '',
			validation: {
				required: true,
				isDate: true,
			},
			valid: false,
			touched: false,
		});
		setEmail({
			placeholder: 'your email',
			value: '',
			validation: {
				required: true,
				isEmail: true,
			},
			valid: false,
			touched: false,
		});
	};
	let displayError = null;

	if (formInvalid) {
		const arrayOfErrors = [];
		for (const property in errorMessages) {
			arrayOfErrors.push(errorMessages[property]);
		}
		displayError = (
			<div>
				<h5>There was a problem</h5>
				<ul>
					{arrayOfErrors.map((msg) => {
						if (msg.length) {
							return <li key={msg}>{msg}</li>;
						}
					})}
				</ul>
			</div>
		);
	}

	return (
		<div>
			{formInvalid ? displayError : null}

			<form onSubmit={submitHandler}>
				<h3>Create account</h3>
				<label htmlFor="fname">Your first name</label>

				<input
					type="text"
					name="first name"
					value={firstName.value}
					onChange={(e) => inputChangedHandler(e)}
				/>

				<label htmlFor="fname">Your last name</label>
				<input
					type="text"
					name="last name"
					value={lastName.value}
					onChange={(e) => inputChangedHandler(e)}
				/>

				<label htmlFor="email">Email</label>

				<input
					type="email"
					name="email"
					value={email.value}
					onChange={(e) => inputChangedHandler(e)}
				/>

				<label htmlFor="birthday">Birthday</label>

				<input
					type="date"
					name="birthday"
					value={birthday.value}
					onChange={(e) => inputChangedHandler(e)}
				/>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default ProfileForm;
