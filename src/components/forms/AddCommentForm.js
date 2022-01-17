import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import useComments from '../../hooks/useComments'

import Button from '../Button'
import styled from 'styled-components'
import { NORMAL_TEXT, SMALL_TEXT } from '../../assets/fonts'
import { DARK_COLOR, SECONDARY_COLOR } from '../../assets/colors'

const Form = styled.form`
	font-size: ${NORMAL_TEXT};
	display: flex;
	align-items: center;
	gap: 20px;
`

const Input = styled.input.attrs((props) => ({ type: 'text' }))`
	font-size: ${NORMAL_TEXT};
	color: ${DARK_COLOR};
	padding: 10px 30px;
	border: 1px solid ${DARK_COLOR};
	border-radius: 10px;
`

const ErrorForm = styled.p`
	color: ${SECONDARY_COLOR};
	font-size: ${SMALL_TEXT};
	margin: 10px 0px;
`

export default function CommentForm({ onSubmit }) {
	const { setComment } = useComments({ onSubmit: () => handleReset() })
	const {
		values,
		errors,
		touched,
		handleChange,
		handleSubmit,
		handleBlur,
		handleReset,
	} = useFormik({
		onSubmit: (data) => {
			setComment(data)
			onSubmit()
		},
		initialValues: {
			comment: '',
		},
		validationSchema: Yup.object().shape({
			comment: Yup.string().required('Campo requerido'),
		}),
	})
	return (
		<Form onSubmit={handleSubmit}>
			<div>
				<Input
					value={values.comment}
					name="comment"
					id="comment"
					onKeyDown={handleBlur}
					onChange={handleChange}
					autoComplete="off"
					placeholder="Agregar comentario..."
				/>
				{errors.comment && touched.comment ? (
					<ErrorForm>{errors.comment}</ErrorForm>
				) : null}
			</div>
			<Button type="submit">Enviar</Button>
		</Form>
	)
}
