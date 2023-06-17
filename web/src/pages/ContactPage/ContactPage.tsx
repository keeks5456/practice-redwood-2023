// import { Link, routes } from '@redwoodjs/router'
import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  SubmitHandler,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

interface FormValue {
  input: string
  email: string
  message: string
}

const ContactPage = () => {
  const onSubmit: SubmitHandler<FormValue> = (data) => {
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <TextField name="name" />
        <label htmlFor="email">Email</label>
        <TextField name="email" />
        <label htmlFor="message">Message</label>
        <TextAreaField name="message" />
        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
