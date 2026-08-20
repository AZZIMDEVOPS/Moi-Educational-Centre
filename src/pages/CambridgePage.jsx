import Navbar from "../components/common/navigation/Navbar"
import cambridge from "../assets/cambridge.jpg"
import Footer from "../components/common/Footer"
import SEO from "../components/common/SEO"

const CambridgePage = () => {
  return (
    <>
      <SEO
        title="Cambridge International Curriculum"
        description="Moi Educational Centre offers the world-class Cambridge International Curriculum, focusing on inquiry-based learning and global perspectives from Year 1 to Year 12."
      />
      <Navbar />
      <div className="cambridge-page section-padding" style={{ padding: '120px 0 80px' }}>
        <div className="inner-row">
          <div className="cambridge-page-content">
            <h1 style={{ color: 'var(--main-color)', marginBottom: '30px' }}>Cambridge International Curriculum</h1>

            <p className="lead" style={{ fontSize: '1.2rem', color: '#444', marginBottom: '30px' }}>
              At Moi Educational Centre, our Cambridge program offers learners access to an internationally recognized curriculum that emphasizes inquiry, critical thinking, and global awareness.
            </p>
            <p>With an academic year running from September to June, the program provides a dynamic and well-rounded learning experience tailored to prepare students for success in a rapidly evolving world.</p>

            <div style={{ margin: '40px 0' }}>
              <img src={cambridge} alt="Cambridge Learning at MEC" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
            </div>

            <p>Learners benefit from a structured yet flexible academic journey, engaging in diverse subjects such as:</p>
            <ul className="custom-list" style={{ columns: 2, marginBottom: '40px' }}>
              <li>English Language & Literature</li>
              <li>Mathematics</li>
              <li>Experimental Sciences</li>
              <li>Arts & Design</li>
              <li>Global Perspectives</li>
              <li>ICT & Computer Science</li>
            </ul>

            <h2 style={{ color: 'var(--main-color)', marginTop: '50px' }}>Cambridge Key Stages at MEC</h2>

            <div className="stages-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '30px' }}>
              <div className="stage-card" style={{ background: '#f9f9f9', padding: '30px', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.4rem' }}>Key Stage 1: Year 1 to Year 2</h3>
                <p>Foundational skills in literacy and numeracy. Learners explore their environment through nature-based learning and storytelling, developing early reasoning and social skills.</p>
              </div>

              <div className="stage-card" style={{ background: '#f9f9f9', padding: '30px', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.4rem' }}>Key Stage 2: Year 3 to Year 6</h3>
                <p>Introduction to basic research skills and guided discovery. Confidence and independence are nurtured through personal projects and early public speaking opportunities.</p>
              </div>

              <div className="stage-card" style={{ background: '#f9f9f9', padding: '30px', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.4rem' }}>Key Stage 3: Year 7 to Year 9</h3>
                <p>Learners explore a broader curriculum and identify academic interests. Emphasis is placed on teamwork, critical thinking, and prepared subject specialization.</p>
              </div>

              <div className="stage-card" style={{ background: '#f9f9f9', padding: '30px', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.4rem' }}>Senior High: Year 10 to Year 12</h3>
                <p>Final stage of the Cambridge journey. Students specialize in subjects aligned with university and career aspirations, focusing on global leadership and resilience.</p>
              </div>
            </div>

            <p style={{ marginTop: '50px', fontStyle: 'italic', color: '#666' }}>
              At Moi Educational Centre, our Cambridge learners enjoy seamless progression across the stages. Through interactive and inquiry-based instruction, we cultivate well-rounded individuals equipped with global perspectives.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default CambridgePage