import imgChair from '../../../assets/peter-chair.jpg';

const ChairmanMessage = () => {
  return (
    <section className="ldr-chair">
      <div className="ldr-chair-inner">
        <div className="ldr-chair-img">
          <img src={imgChair} alt="Mr. Paul K. Chemng'orem, Chairman" />
        </div>
        
        <div className="ldr-chair-msg">
          <span className="ldr-quote-mark">"</span>
          <h2 style={{ color: '#fff' }}>Hear from our Board Chairman</h2>
          <p>
            For over 40 years, Moi Educational Centre has remained a trusted pillar in delivering quality, values-based education. Rooted in our enduring motto, “Strive for Excellence,” we have cultivated a legacy defined by academic strength, moral clarity, and the holistic development of every learner entrusted to us.
          </p>
          <p>
            As Kenya’s education system transforms, MEC continues to lead with vision and readiness. We have fully embraced the Competency-Based Curriculum (CBC), with well-trained teachers and a learning environment designed to meet its demands. Our Senior School is CBC-aligned and prepared to offer the three Ministry-recommended pathways: STEM, Arts and Sports Science, and Social Sciences, ensuring every student is guided toward their strengths, passions, and future career goals. Recognizing the global shift in education, we endevour to give our students access to a world-class academic experience while maintaining a strong foundation in values and identity. Our goal remains the same: raise confident, responsible, and well-prepared young leaders.
          </p>
          <p>
            In a rapidly digitizing world, we are thoughtfully integrating technology into the learning process, not for its novelty, but for its power to enhance understanding while preserving the heart of human connection in education. We are more than a school. We are a nurturing community committed to excellence, character, and leadership.
          </p>
          <p>
            To every parent exploring the next step of their child, I warmly welcome you to a place where your child's potential is not only seen, it is shaped for a purposeful future.
          </p>
          
          <div style={{ marginTop: '40px' }}>
            <div className="ldr-chair-name">Mr. Paul K. Chemng'orem</div>
            <div className="ldr-chair-title">Chairman, Board of Directors</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
