import "../../styles/add-entry.module.css"
import Button from "../../components/Button"
import { useCallback } from "react"
import FormField from "../../components/FormField"
import { Formik } from "formik"
import * as yup from "yup"
import Link from "next/link"

const validationSchema = yup.object().shape({
  amount: yup.number().required(),
  description: yup.string().required("Description obligatoire"),
})

const initialValues = {
  amount: "",
  description: "",
}

const AddEntry = () => {
  const handleFormSubmit = useCallback(
    async (values, { setFieldError, setFieldValue }) => {
      if (values.amount === 0) {
        setFieldError("amount", "tout sauf 0")

        return false
      }

      let existingEntries = JSON.parse(localStorage.getItem("allEntries"))

      if (existingEntries == null) {
        existingEntries = []
      }

      let formValue = {
        amount: values.amount,
        description: values.description,
      }

      if (values.amount > 0) {
        formValue.from = true
      } else {
        formValue.form = false
      }

      existingEntries.push(formValue)
      localStorage.setItem("allEntries", JSON.stringify(existingEntries))

      setFieldValue("amount", "")
      setFieldValue("description", "")

      return true
    },
    []
  )

  return (
    <>
      <Link href="/dashboard">
        <a>Dashboard!</a>
      </Link>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, isValid, isSubmitting }) => (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4 p-4"
          >
            <FormField name="amount" type="number" placeholder="Add Amount">
              Amount
            </FormField>
            <FormField name="description" type="text" placeholder="Description">
              Description
            </FormField>
            <Button type="submit" disabled={!isValid || isSubmitting}>
              SUBMIT
            </Button>
          </form>
        )}
      </Formik>
    </>
  )
}

export default AddEntry
