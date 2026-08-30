import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { 
  FaUserGraduate, FaUserFriends, FaCompass, FaBus, 
  FaCheckCircle, FaArrowRight, FaArrowLeft, FaCheck, FaInfoCircle, FaPhoneAlt, FaEnvelope 
} from 'react-icons/fa';
import "../../css/admissions.css";

const AdmissionForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState("");

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  
  const dob = watch("dob");
  const selectedPathway = watch("curriculumPathway") || "cbc";

  // Dynamic AI Age-to-Grade Recommendation Engine
  useEffect(() => {
    if (dob) {
      const birthDate = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      let suggestion = "";
      let path = "";

      if (age < 3) { suggestion = "Cre'che / Playgroup"; path = "Early Years"; }
      else if (age === 3) { suggestion = "Cre'che / Playgroup"; path = "CBE"; }
      else if (age === 4) { suggestion = "PP1"; path = "CBE"; }
      else if (age === 5) { suggestion = "PP2 (CBE) or Year 1 (Cambridge)"; path = "Dual Pathway Available"; }
      else if (age === 6) { suggestion = "Grade 1 (CBE) or Year 2 (Cambridge)"; path = "Dual Pathway Available"; }
      else if (age >= 7 && age <= 11) {
        suggestion = `Grade ${age - 5} (CBE) or Year ${age - 4} (Cambridge)`;
        path = "Primary";
      }
      else if (age >= 12 && age <= 14) {
        suggestion = `Grade ${age - 5} (Junior School)`;
        path = "Junior Secondary (CBE)";
      }
      else if (age >= 15 && age <= 18) {
        suggestion = "Senior School — Grade 10";
        path = "High School (CBE)";
      }

      if (suggestion) {
        setAiSuggestion({ grade: suggestion, age, path });
      } else {
        setAiSuggestion(null);
      }
    }
  }, [dob]);

  const onSubmit = (data) => {
    console.log("2026 Admission Application Submitted:", data);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    reset();
    setStep(1);
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="admission-success-card">
        <div className="success-icon-wrap">
          <FaCheckCircle className="success-check-icon" />
        </div>
        <h2>Application Submitted Successfully!</h2>
        <p className="success-sub">
          Thank you for applying to Moi Educational Centre for the 2026 academic intake.
        </p>
        <div className="success-next-steps">
          <h4>What Happens Next?</h4>
          <ol>
            <li><strong>Application Review:</strong> Our admissions registrar will review your application within 24–48 hours.</li>
            <li><strong>Assessment Invitation:</strong> You will receive an SMS and email with the learner's assessment date.</li>
            <li><strong>Formal Admission Offer:</strong> Following the assessment, formal admission documents will be issued.</li>
          </ol>
        </div>
        <div className="success-contact-note">
          <span>Need immediate assistance? Contact Admissions directly at:</span>
          <strong>+254-20-6004155 / 0702 090 213</strong> | <strong>info@moieducentre.ac.ke</strong>
        </div>
        <button onClick={handleReset} className="adm-btn-primary" style={{ marginTop: '24px' }}>
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="admission-form-wrapper">
      <div className="form-card-header">
        <span className="form-header-badge">ONLINE ADMISSIONS 2026</span>
        <h2 className="form-header-title">Student Admission Application</h2>
        <p className="form-header-desc">
          Complete the 4 quick steps below to initiate your child's 2026 admission process.
        </p>

        {/* Step Wizard Tracker */}
        <div className="form-wizard-track">
          {[
            { num: 1, title: "Student Info", icon: <FaUserGraduate /> },
            { num: 2, title: "Parent/Guardian", icon: <FaUserFriends /> },
            { num: 3, title: "Pathway & Grade", icon: <FaCompass /> },
            { num: 4, title: "Transport & Needs", icon: <FaBus /> }
          ].map((s) => (
            <div 
              key={s.num} 
              className={`wizard-step ${step === s.num ? "active" : ""} ${step > s.num ? "completed" : ""}`}
              onClick={() => step > s.num && setStep(s.num)}
            >
              <div className="wizard-icon-box">
                {step > s.num ? <FaCheck /> : s.num}
              </div>
              <span className="wizard-label">{s.title}</span>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="adm-interactive-form">
        
        {/* ─── STEP 1: Student Information ──────────────────── */}
        {step === 1 && (
          <div className="form-step-pane">
            <h3 className="step-pane-title">
              <FaUserGraduate /> 1. Student Personal Information
            </h3>
            
            <div className="form-grid-2">
              <div className="form-field">
                <label>First Name <span className="req">*</span></label>
                <input 
                  type="text" 
                  placeholder="e.g. David"
                  {...register("firstName", { required: "First Name is required" })}
                />
                {errors.firstName && <span className="field-err">{errors.firstName.message}</span>}
              </div>

              <div className="form-field">
                <label>Last / Surname <span className="req">*</span></label>
                <input 
                  type="text" 
                  placeholder="e.g. Kiprono"
                  {...register("lastName", { required: "Last Name is required" })}
                />
                {errors.lastName && <span className="field-err">{errors.lastName.message}</span>}
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-field">
                <label>Date of Birth <span className="req">*</span></label>
                <input 
                  type="date" 
                  {...register("dob", { required: "Date of Birth is required" })}
                />
                {errors.dob && <span className="field-err">{errors.dob.message}</span>}
              </div>

              <div className="form-field">
                <label>Gender <span className="req">*</span></label>
                <select {...register("gender", { required: "Gender is required" })}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errors.gender && <span className="field-err">{errors.gender.message}</span>}
              </div>
            </div>

            {/* Smart AI Age Suggestion */}
            {aiSuggestion && (
              <div className="ai-suggestion-box">
                <FaInfoCircle className="ai-icon" />
                <div>
                  <strong>Learner Age ({aiSuggestion.age} years old):</strong>
                  <span> Suggested entry level: <strong>{aiSuggestion.grade}</strong> ({aiSuggestion.path})</span>
                </div>
              </div>
            )}

            <div className="form-field">
              <label>Current / Previous School (If transferring)</label>
              <input 
                type="text" 
                placeholder="e.g. Previous Kindergarten or Primary School"
                {...register("previousSchool")}
              />
            </div>

            <div className="form-actions-row">
              <span />
              <button 
                type="button" 
                className="adm-btn-primary" 
                onClick={() => setStep(2)}
              >
                Continue to Parent Details <FaArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* ─── STEP 2: Parent & Guardian Details ─────────────── */}
        {step === 2 && (
          <div className="form-step-pane">
            <h3 className="step-pane-title">
              <FaUserFriends /> 2. Parent / Guardian Information
            </h3>

            <div className="form-grid-2">
              <div className="form-field">
                <label>Parent / Guardian Full Name <span className="req">*</span></label>
                <input 
                  type="text" 
                  placeholder="e.g. Dr. Sarah Wanjiku"
                  {...register("parentName", { required: "Parent name is required" })}
                />
                {errors.parentName && <span className="field-err">{errors.parentName.message}</span>}
              </div>

              <div className="form-field">
                <label>Relationship to Student <span className="req">*</span></label>
                <select {...register("relationship", { required: "Relationship is required" })}>
                  <option value="Mother">Mother</option>
                  <option value="Father">Father</option>
                  <option value="Legal Guardian">Legal Guardian</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-field">
                <label>Primary Phone Number <span className="req">*</span></label>
                <input 
                  type="tel" 
                  placeholder="e.g. +254 712 345 678"
                  {...register("parentPhone", { required: "Phone number is required" })}
                />
                {errors.parentPhone && <span className="field-err">{errors.parentPhone.message}</span>}
              </div>

              <div className="form-field">
                <label>Email Address <span className="req">*</span></label>
                <input 
                  type="email" 
                  placeholder="e.g. sarah.wanjiku@gmail.com"
                  {...register("parentEmail", { required: "Email address is required" })}
                />
                {errors.parentEmail && <span className="field-err">{errors.parentEmail.message}</span>}
              </div>
            </div>

            <div className="form-field">
              <label>Residential Area / Estate in Nairobi <span className="req">*</span></label>
              <input 
                type="text" 
                placeholder="e.g. South C, Lang'ata, Karen, Kilimani, Nairobi West"
                {...register("residentialArea", { required: "Residential area is required" })}
              />
            </div>

            <div className="form-actions-row">
              <button 
                type="button" 
                className="adm-btn-outline dark" 
                onClick={() => setStep(1)}
              >
                <FaArrowLeft /> Back
              </button>
              <button 
                type="button" 
                className="adm-btn-primary" 
                onClick={() => setStep(3)}
              >
                Continue to Pathway Selection <FaArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* ─── STEP 3: Pathway & Grade Selection ─────────────── */}
        {step === 3 && (
          <div className="form-step-pane">
            <h3 className="step-pane-title">
              <FaCompass /> 3. Curriculum Pathway & Grade Level
            </h3>

            <div className="form-field">
              <label>Select Curriculum Track <span className="req">*</span></label>
              <div className="pathway-radio-group">
                <label className={`pathway-radio-label ${selectedPathway === "cbc" ? "selected" : ""}`}>
                  <input 
                    type="radio" 
                    value="cbc" 
                    {...register("curriculumPathway")}
                    defaultChecked 
                  />
                  <div>
                    <strong>Competency-Based Curriculum (CBC)</strong>
                    <span>Pre-Primary, Lower/Upper Primary, Junior School & Senior High School</span>
                  </div>
                </label>

                <label className={`pathway-radio-label ${selectedPathway === "cambridge" ? "selected" : ""}`}>
                  <input 
                    type="radio" 
                    value="cambridge" 
                    {...register("curriculumPathway")} 
                  />
                  <div>
                    <strong>Cambridge International Curriculum</strong>
                    <span>British International Track (Early Years to Year 6)</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="form-field">
              <label>Target Grade / Level for 2026 Intake <span className="req">*</span></label>
              <select {...register("grade", { required: "Grade level is required" })}>
                <option value="">Select Entry Grade</option>
                {selectedPathway === "cbc" ? (
                  <>
                    <optgroup label="Pre-Primary">
                      <option value="Cre'che (Playgroup)">Cre'che (Playgroup)</option>
                      <option value="Reception">Reception</option>
                      <option value="PP1">PP1 (Pre-Primary 1)</option>
                      <option value="PP2">PP2 (Pre-Primary 2)</option>
                    </optgroup>
                    <optgroup label="Lower Primary">
                      <option value="Grade 1">Grade 1</option>
                      <option value="Grade 2">Grade 2</option>
                      <option value="Grade 3">Grade 3</option>
                      <option value="Grade 4">Grade 4</option>
                    </optgroup>
                    <optgroup label="Upper Primary">
                      <option value="Grade 5">Grade 5</option>
                      <option value="Grade 6">Grade 6</option>
                    </optgroup>
                    <optgroup label="Junior School">
                      <option value="Grade 7">Grade 7 (Junior Secondary)</option>
                      <option value="Grade 8">Grade 8 (Junior Secondary)</option>
                      <option value="Grade 9">Grade 9 (Junior Secondary)</option>
                    </optgroup>
                    <optgroup label="Senior High School">
                      <option value="Grade 10">Grade 10 (Senior High School)</option>
                    </optgroup>
                  </>
                ) : (
                  <optgroup label="Cambridge International">
                    <option value="Cambridge Early Years">Cambridge Early Years</option>
                    <option value="Cambridge Year 1">Cambridge Year 1</option>
                    <option value="Cambridge Year 2">Cambridge Year 2</option>
                    <option value="Cambridge Year 3">Cambridge Year 3</option>
                    <option value="Cambridge Year 4">Cambridge Year 4</option>
                    <option value="Cambridge Year 5">Cambridge Year 5</option>
                    <option value="Cambridge Year 6">Cambridge Year 6</option>
                  </optgroup>
                )}
              </select>
              {errors.grade && <span className="field-err">{errors.grade.message}</span>}
            </div>

            <div className="form-field">
              <label>Intended Start Term</label>
              <select {...register("startTerm")}>
                <option value="Term 1 2026 (January Intake)">Term 1 2026 (January Intake)</option>
                <option value="Term 2 2026 (May Intake)">Term 2 2026 (May Intake)</option>
                <option value="Term 3 2026 (September Intake)">Term 3 2026 (September Intake)</option>
              </select>
            </div>

            <div className="form-actions-row">
              <button 
                type="button" 
                className="adm-btn-outline dark" 
                onClick={() => setStep(2)}
              >
                <FaArrowLeft /> Back
              </button>
              <button 
                type="button" 
                className="adm-btn-primary" 
                onClick={() => setStep(4)}
              >
                Continue to Transport & Needs <FaArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* ─── STEP 4: Transport & Additional Needs ──────────── */}
        {step === 4 && (
          <div className="form-step-pane">
            <h3 className="step-pane-title">
              <FaBus /> 4. Transport, Special Talents & Final Submission
            </h3>

            <div className="form-field">
              <label>School Bus Transport Required?</label>
              <select {...register("transportRequired")}>
                <option value="Yes">Yes, I will need school bus transport</option>
                <option value="No - Private Dropoff">No, we will do private morning/evening drop-off</option>
              </select>
            </div>

            <div className="form-field">
              <label>Co-Curricular Talents & Interests</label>
              <input 
                type="text" 
                placeholder="e.g. Music/Piano, Football, Swimming, Robotics, Chess, Debate"
                {...register("talents")}
              />
            </div>

            <div className="form-field">
              <label>Any Medical Conditions, Allergies or Special Learning Needs</label>
              <textarea 
                rows={3}
                placeholder="Please specify any allergies, dietary restrictions, or medical history we should note."
                {...register("medicalNotes")}
              />
            </div>

            <div className="form-field">
              <label className="checkbox-consent">
                <input 
                  type="checkbox" 
                  {...register("declaration", { required: "Please agree to the application declaration" })}
                />
                <span>I confirm that the information provided is accurate to the best of my knowledge and agree to be contacted by the MEC admissions team regarding this application.</span>
              </label>
              {errors.declaration && <span className="field-err">{errors.declaration.message}</span>}
            </div>

            <div className="form-actions-row">
              <button 
                type="button" 
                className="adm-btn-outline dark" 
                onClick={() => setStep(3)}
              >
                <FaArrowLeft /> Back
              </button>
              <button 
                type="submit" 
                className="adm-btn-submit"
              >
                Submit Application for 2026 <FaCheckCircle />
              </button>
            </div>
          </div>
        )}

      </form>
    </div>
  );
};

export default AdmissionForm;
