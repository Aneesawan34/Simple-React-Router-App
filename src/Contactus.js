import React from 'react';
 import { Formik } from 'formik';
import { FormControl, InputGroup } from 'react-bootstrap';
 
 const Contactus = () => (
   <div>
     <h1>This form is created with formik npm</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <InputGroup className="mb-3 col-lg-12 col-md-6 col-sm-3">
           <FormControl
              placeholder="email"
              aria-label="email"
              aria-describedby="basic-addon1"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            </InputGroup>
           {errors.email && touched.email && errors.email}
           <InputGroup className="mb-3 col-lg-12 col-md-6 col-sm-3">
            <FormControl 
                placeholder="password"
                aria-label="password"
                aria-describedby="basic-addon1"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
            />
            </InputGroup>
           {/* <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           /> */}
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
 );
 
 export default Contactus;