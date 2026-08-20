import { useState } from "react";
import { useForm } from "react-hook-form";
const API_PATH = "https://moieducentre.ac.ke/mecphp/contactform.php";
import axios from "axios";
const ContactForm = () => {
  const [ btnMsg, setBtnMsg] = useState("Submit Message")
  const [ serverMsg, setServerMsg ] = useState(" ");
  const [ loader, setLoader ] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const submitInquiryForm = (data) => {
       const formData = {
              name: `${data.firstname} ${data.lastname}`,
              email: data.email,
              phone: data.phone,
              department: data.department,
              honeypot: data.honeypot,
              subject: data.subject,
              message: data.msg
       }
       setLoader(true);
       setBtnMsg("Submitting...")
       axios.post(API_PATH, { formData })
             .then(res => {
                   setServerMsg(res.data.message);
                   reset();
                   setLoader(false);
             }).finally(() => {
                      setBtnMsg("Submitted");
                      setTimeout(() => {
                            setBtnMsg("Submit Message");
                            setServerMsg("")
                      }, 7500)
            })
  }
  return (
    <div className="contact-form">
              <h2>Make an Enquiry</h2>

              <form onSubmit={handleSubmit(submitInquiryForm)}>
                         <div className="form-row split">
                                     <div className="form-row-column">
                                                <label htmlFor="firstname">First name <span className="error">*</span></label>
                                                <input type="text" {...register("firstname", { required: "This input is required"})}  placeholder="First name" className="form-control"/>
                                                { errors.firstname && <span className="error">{errors.firstname.message}</span>}
                                     </div>
                                     <div className="form-row-column">
                                                <label htmlFor="lastname">Last name <span className="error">*</span></label>
                                                <input type="text" {...register("lastname", { required: "This input is required"})} placeholder="Last name" className="form-control"/>
                                                {errors.lastname && <span className="error">{errors.lastname.message}</span>}
                                     </div>
                         </div>
                         <div className="form-row split">
                                     <div className="form-row-column">
                                                <label htmlFor="firstname">Email address<span className="error">*</span></label>
                                                <input type="email" { ...register("email", { required: 'This input is required'})} placeholder="Email address" className="form-control"/>
                                                { errors.email && <span className="error">{errors.email.message}</span>}
                                     </div>
                                     <div className="form-row-column">
                                                <label htmlFor="phone">Phone number<span className="error">*</span></label>
                                                <input type="text" { ...register("phone", { required: "This input is required"})} placeholder="Phone number" className="form-control"/>
                                                { errors.phone && <span className="error">{errors.phone.message}</span>}
                                     </div>
                         </div>
                         <div className="form-row split">
                                   <div className="form-row-column">
                                              <label htmlFor="department">Department<span className="error">*</span></label>
                                              <select className="form-control" {...register("department", { required: "This input is required"})}>
                                                        <option value="">Select Department</option>
                                                        <option value="Senior School">Senior School</option>
                                                        <option value="Primary & Junior School">Primary & Junior School</option>
                                                        <option value="Finance">Finance</option>
                                              </select>
                                              { errors.department && <span className="error">{errors.department.message}</span>}
                                   </div>
                                   <div className="form-row-column">
                                              <label htmlFor="subject">Subject<span className="error">*</span></label>
                                              <input type="text" {...register("subject", { required: "This input is required"})} placeholder="Subject" className="form-control"/>
                                              { errors.subject && <span className="error">{errors.subject.message}</span>}
                                   </div>
                         </div>
                         <input className="spam-hunter" type="text" {...register("honeypot")} />
                         <div className="form-row">
                                     <label htmlFor="message">Message<span className="error">*</span></label>
                                     <textarea placeholder="Write your message" {...register("msg", {required: 'This input is required'})}></textarea>
                                     { errors.msg && <span className="msg">{errors.msg.message}</span>}
                         </div>
                         <div className="form-btn">
                                      <button type="submit" className={ loader ? "inactive": ""}>{btnMsg}</button>
                         </div>

                         <p className="server-msg">{serverMsg}</p>
              </form>
    </div>
  )
}

export default ContactForm