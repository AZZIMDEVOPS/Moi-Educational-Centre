import chairmanImg from '../../../assets/peter-chair.jpg';

const ChairmanEditorial = () => {
  return (
    <section className="chair-ed">
      <div className="chair-ed-inner">
        
        {/* Sticky Profile Sidebar */}
        <aside className="chair-sidebar">
          <div className="chair-profile-card">
            <div className="chair-img-wrap">
              <img src={chairmanImg} alt="Mr. Paul K. Chemng'orem" />
            </div>
            <div className="chair-name">Mr. Paul K. Chemng'orem</div>
            <div className="chair-title">Chairman, Board of Directors</div>
            <div className="chair-badge-sm">Serving with Vision</div>
          </div>
        </aside>

        {/* Editorial Body */}
        <article className="chair-article">
          <p>
            <span className="chair-dropcap">F</span>or over 40 years, Moi Educational Centre has remained a trusted pillar in delivering quality, values-based education. Rooted in our enduring motto, “Strive for Excellence,” we have cultivated a legacy defined by academic strength, moral clarity, and the holistic development of every learner entrusted to us.
          </p>
          <p>
            As Kenya’s education system transforms, MEC continues to lead with vision and readiness. We have fully embraced the Competency-Based Curriculum (CBC), with well-trained teachers and a learning environment designed to meet its demands. Our Senior School is CBC-aligned and prepared to offer the three Ministry-recommended pathways: STEM, Arts and Sports Science, and Social Sciences, ensuring every student is guided toward their strengths, passions, and future career goals. Recognizing the global shift in education, we endevour to give our students access to a world-class academic experience while maintaining a strong foundation in values and identity. Our goal remains the same: raise confident, responsible, and well-prepared young leaders.
          </p>
          
          <div className="chair-quote-block">
            <div className="chair-quote-icon">"</div>
            <div className="chair-quote-text">
              We are more than a school. We are a nurturing community committed to excellence, character, and leadership.
            </div>
          </div>

          <p>
            In a rapidly digitizing world, we are thoughtfully integrating technology into the learning process, not for its novelty, but for its power to enhance understanding while preserving the heart of human connection in education.
          </p>
          <p>
            To every parent exploring the next step of their child, I warmly welcome you to a place where your child's potential is not only seen, it is shaped for a purposeful future.
          </p>

          <div style={{ marginTop: '60px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px' }}>
            <img src={chairmanImg} alt="Signature Placeholder" style={{ width: '120px', height: '40px', objectFit: 'cover', opacity: 0.5, mixBlendMode: 'screen', filter: 'grayscale(100%)' }} />
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 'bold', color: '#fff', marginTop: '16px' }}>Paul K. Chemng'orem</div>
          </div>
        </article>

      </div>
    </section>
  );
};

export default ChairmanEditorial;
