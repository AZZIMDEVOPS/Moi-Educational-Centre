import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaInfoCircle, FaCheckCircle } from 'react-icons/fa';
import "../../css/admissions.css";

const AdmissionForm = () => {
    const { register, handleSubmit, watch, setValue, formState: { errors }, reset } = useForm();
    const dob = watch("dob");
    const selectedGrade = watch("grade");
    const [aiSuggestion, setAiSuggestion] = useState("");
    const [checklist, setChecklist] = useState([]);

    useEffect(() => {
        if (dob) {
            const birthDate = new Date(dob);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            // Enhanced Recommendation Logic (CBC vs Cambridge)
            let suggestion = "";
            let path = "";

            if (age === 3) { suggestion = "Playgroup"; path = "CBC"; }
            else if (age === 4) { suggestion = "PP1"; path = "CBC"; }
            else if (age === 5) { suggestion = "PP2 (CBC) or Year 1 (Cambridge)"; path = "Both Pathways Available"; }
            else if (age === 6) { suggestion = "Grade 1 (CBC) or Year 2 (Cambridge)"; path = "Both Pathways Available"; }
            else if (age >= 7 && age <= 11) {
                suggestion = `Grade ${age - 5}`;
                path = "CBC/Cambridge";
            }
            else if (age >= 12 && age <= 14) {
                suggestion = `Grade ${age - 5}`;
                path = "Junior Secondary (CBC)";
            }
            else if (age >= 15 && age <= 18) {
                suggestion = `Grade ${age - 5}`;
                path = "Senior Secondary (CBC/Cambridge)";
            }

            if (suggestion) {
                setAiSuggestion(`Recommending: ${suggestion} (${path}) based on age ${age}`);
            } else {
                setAiSuggestion("");
            }
        }
    }, [dob]);

    useEffect(() => {
        if (selectedGrade) {
            let docs = ["Copy of Birth Certificate", "2 Passport Size Photos", "Immunization Records"];
            if (selectedGrade.includes("Grade 1") || selectedGrade.includes("Grade 2") || selectedGrade.includes("Grade 3") ||
                selectedGrade.includes("Grade 4") || selectedGrade.includes("Grade 5") || selectedGrade.includes("Grade 6")) {
                docs.push("Last Report Form from Previous School");
                docs.push("NEMIS/UPI Number");
            } else if (selectedGrade.includes("Grade 7") || selectedGrade.includes("Grade 8") || selectedGrade.includes("Grade 9")) {
                docs.push("KCPE Result Slip (if applicable)");
                docs.push("Transfer Letter");
                docs.push("Leaving Certificate");
            }
            setChecklist(docs);
        } else {
            setChecklist([]);
        }
    }, [selectedGrade]);

    const onSubmit = (data) => {
        console.log("Admission Data:", data);
        alert("Application submitted successfully! Our admissions team will contact you shortly.");
        reset();
    };

    const applySuggestion = () => {
        const grade = aiSuggestion.split(": ")[1];
        setValue("grade", grade);
    };

    return (
        <div className="admission-form-container">
            <h3>Online Admission Application</h3>
            <p className="form-intro">Please fill out the form below to start the admission process.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="admission-form">
                <div className="form-section">
                    <div className="section-title">
                        <FaInfoCircle /> <h4>Student Information</h4>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                {...register("firstName", { required: "First Name is required" })}
                                placeholder="Student's First Name"
                            />
                            {errors.firstName && <span className="error">{errors.firstName.message}</span>}
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                {...register("lastName", { required: "Last Name is required" })}
                                placeholder="Student's Last Name"
                            />
                            {errors.lastName && <span className="error">{errors.lastName.message}</span>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Date of Birth</label>
                            <input
                                type="date"
                                {...register("dob", { required: "Date of Birth is required" })}
                            />
                            {errors.dob && <span className="error">{errors.dob.message}</span>}
                        </div>
                        <div className="form-group">
                            <label>Gender</label>
                            <select {...register("gender", { required: "Gender is required" })}>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            {errors.gender && <span className="error">{errors.gender.message}</span>}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Grade Applying For</label>
                        <select {...register("grade", { required: "Grade is required" })}>
                            <option value="">Select Grade Level</option>
                            <optgroup label="Pre-Primary">
                                <option value="Playgroup">Playgroup</option>
                                <option value="PP1">PP1</option>
                                <option value="PP2">PP2</option>
                            </optgroup>
                            <optgroup label="Lower Primary">
                                <option value="Grade 1">Grade 1</option>
                                <option value="Grade 2">Grade 2</option>
                                <option value="Grade 3">Grade 3</option>
                            </optgroup>
                            <optgroup label="Upper Primary">
                                <option value="Grade 4">Grade 4</option>
                                <option value="Grade 5">Grade 5</option>
                                <option value="Grade 6">Grade 6</option>
                            </optgroup>
                            <optgroup label="Junior School">
                                <option value="Grade 7">Grade 7</option>
                                <option value="Grade 8">Grade 8</option>
                                <option value="Grade 9">Grade 9</option>
                            </optgroup>
                            <optgroup label="Senior School">
                                <option value="Grade 10">Grade 10</option>
                                <option value="Grade 11">Grade 11</option>
                                <option value="Grade 12">Grade 12</option>
                            </optgroup>
                        </select>
                        {errors.grade && <span className="error">{errors.grade.message}</span>}

                        {aiSuggestion && (
                            <div className="ai-recommender" onClick={applySuggestion}>
                                <FaRobot /> <span>{aiSuggestion}</span>
                                <button type="button">Apply</button>
                            </div>
                        )}
                    </div>
                </div>

                {checklist.length > 0 && (
                    <div className="form-section checklist-section">
                        <h4><FaCheckCircle /> Document Checklist</h4>
                        <p>For {selectedGrade}, please prepare:</p>
                        <ul>
                            {checklist.map((doc, idx) => <li key={idx}>{doc}</li>)}
                        </ul>
                    </div>
                )}

                <div className="form-section">
                    <h4>Parent/Guardian Information</h4>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Parent Name</label>
                            <input
                                {...register("parentName", { required: "Parent Name is required" })}
                                placeholder="Parent/Guardian Full Name"
                            />
                            {errors.parentName && <span className="error">{errors.parentName.message}</span>}
                        </div>
                        <div className="form-group">
                            <label>Relationship</label>
                            <select {...register("relationship", { required: "Relationship is required" })}>
                                <option value="">Select Relationship</option>
                                <option value="Father">Father</option>
                                <option value="Mother">Mother</option>
                                <option value="Guardian">Guardian</option>
                            </select>
                            {errors.relationship && <span className="error">{errors.relationship.message}</span>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                {...register("phone", {
                                    required: "Phone is required",
                                    pattern: {
                                        value: /^[0-9+ ]{10,}$/,
                                        message: "Invalid phone number"
                                    }
                                })}
                                placeholder="+254..."
                            />
                            {errors.phone && <span className="error">{errors.phone.message}</span>}
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email"
                                    }
                                })}
                                placeholder="parent@example.com"
                            />
                            {errors.email && <span className="error">{errors.email.message}</span>}
                        </div>
                    </div>
                </div>

                <button type="submit" className="submit-btn-admission">Submit Application</button>
            </form>
        </div>
    );
};

export default AdmissionForm;
