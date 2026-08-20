import { useForm } from 'react-hook-form';

const ActivitySignupForm = ({ activityName }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log("Activity Signup Data:", data);
        alert(`Thank you! We have received your interest for ${activityName}. We will contact you shortly.`);
        reset();
    };

    return (
        <div className="signup-form-section">
            <h3>Sign Up for {activityName}</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Student Name</label>
                    <input
                        type="text"
                        {...register("studentName", { required: "Student name is required" })}
                        placeholder="Enter student's full name"
                    />
                    {errors.studentName && <span className="form-error">{errors.studentName.message}</span>}
                </div>

                <div className="form-group">
                    <label>Class / Grade</label>
                    <select {...register("grade", { required: "Please select a grade" })}>
                        <option value="">Select Grade</option>
                        <option value="Pre-Primary">Pre-Primary</option>
                        <option value="Lower Primary">Lower Primary (Grade 1-3)</option>
                        <option value="Upper Primary">Upper Primary (Grade 4-6)</option>
                        <option value="Junior School">Junior School (Grade 7-9)</option>
                        <option value="Senior School">Senior School</option>
                    </select>
                    {errors.grade && <span className="form-error">{errors.grade.message}</span>}
                </div>

                <div className="form-group">
                    <label>Parent/Guardian Name</label>
                    <input
                        type="text"
                        {...register("parentName", { required: "Parent name is required" })}
                        placeholder="Enter parent's name"
                    />
                    {errors.parentName && <span className="form-error">{errors.parentName.message}</span>}
                </div>

                <div className="form-group">
                    <label>Parent Phone Number</label>
                    <input
                        type="tel"
                        {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                                value: /^[0-9+ ]{10,}$/,
                                message: "Please enter a valid phone number"
                            }
                        })}
                        placeholder="e.g. +254 700 000 000"
                    />
                    {errors.phone && <span className="form-error">{errors.phone.message}</span>}
                </div>

                <div className="form-group">
                    <label>Parent Email</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                        placeholder="e.g. parent@email.com"
                    />
                    {errors.email && <span className="form-error">{errors.email.message}</span>}
                </div>

                <button type="submit" className="submit-btn">Submit Interest</button>
            </form>
        </div>
    );
};

export default ActivitySignupForm;
