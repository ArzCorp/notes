import React, { useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Context } from '../../context/CommentsContext'

import Button from '../Button'
import styled from 'styled-components'
import { BIG_TEXT_SIZE, SMALL_TEXT_SIZE } from '../../assets/fonts'
import { DARK_COLOR, SECONDARY_COLOR } from '../../assets/colors'

const Form = styled.form`
	font-size: ${BIG_TEXT_SIZE};
	display: flex;
	align-items: center;
	gap: 20px;
`

const Input = styled.input.attrs((props) => ({ type: 'text' }))`
	font-size: ${BIG_TEXT_SIZE};
	color: ${DARK_COLOR};
	padding: 10px 30px;
	border: 1px solid ${DARK_COLOR};
	border-radius: 10px;
`

const ErrorForm = styled.p`
	color: ${SECONDARY_COLOR};
	font-size: ${SMALL_TEXT_SIZE};
	margin: 10px 0px;
`

export default function CommentForm() {
	const { dispatch, selectedComment } = useContext(Context)

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
			if (selectedComment.message) {
				return editComment(data)
			}
			handleReset()
			return addComment(data)
		},
		enableReinitialize: true,
		initialValues: {
			comment: selectedComment.message || '',
		},
		validationSchema: Yup.object().shape({
			comment: Yup.string().required('Campo requerido'),
		}),
	})

	const addComment = (data) => {
		dispatch({ type: 'comment/add', payload: data })
	}

	const editComment = (data) => {
		dispatch({
			type: 'comment/edit',
			payload: {
				...selectedComment,
				message: data.comment,
			},
		})
	}

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
					placeholder={
						selectedComment.message
							? 'Editar comentario...'
							: 'Agregar comentario...'
					}
				/>
				{errors.comment && touched.comment ? (
					<ErrorForm>{errors.comment}</ErrorForm>
				) : null}
			</div>
			<Button type="submit">
				{selectedComment.message ? 'Editar' : 'Enviar'}
			</Button>
			{selectedComment.message ? (
				<Button
					type="button"
					onClick={() => dispatch({ type: 'comment/selected', payload: {} })}
				>
					cancelar
				</Button>
			) : null}
		</Form>
	)
}
