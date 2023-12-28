import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useRef } from 'react'
import * as yup from "yup";
import styles from './InputPage.module.css'
import MyError from './MyError';
const InputPage = () => {
 
    const formFields={
      username:"",
      password:"",
    }
    const submitHandler=(values)=>{
      console.log(json.stringify(values))

    }
    const validationSchema=yup.object({
      username:yup.string().required("*enter name"),
      password:yup.string().required("*enter password"),
    })
    const formRefrence=useRef()
  
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.formBox}`}>
   <h2>login</h2>  
<Formik  
onSubmit={submitHandler}
initialValues={formFields}
validationSchema={validationSchema}
innerRef={formRefrence}
// validateOnBlur={false}
// validateOnChange={false}

>
<Form>
  
  <div className={`${styles.inputContainer}`}>
    {/* <label>name</label> */}
  <Field className={`${styles.FieldContainer}`} type="text" name="username" 
  />
  <ErrorMessage  name='username' component={MyError}/>
  
  </div>
  

  <br/>
 <div className={`${styles.inputContainer}`}> 
  {/* <label>password</label> */}
  <Field  className={`${styles.FieldContainer}`} type="password" name="password"/>
  <ErrorMessage  name='password' component={MyError}/>
  </div>
  
 
</Form>

</Formik>

<div  className={`${styles.buttonContainer}`}>
    <span>login</span>
  </div>
</div>

</div>


  )
  
};


export default InputPage