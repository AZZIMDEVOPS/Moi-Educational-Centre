import { Link } from 'react-router-dom';

const ChairmanCTA = () => {
  return (
    <section className="ldr-cta">
      <div className="ldr-cta-inner">
        <h2 className="ldr-cta-title" style={{ color: '#fff' }}>Become Part of the MEC Legacy</h2>
        <p className="ldr-cta-desc">
          Experience the MEC difference firsthand. Discover how our dedicated leadership, world-class curricula, and commitment to excellence can shape your child's future.
        </p>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/admissions/admission-process" className="nav-apply-btn" style={{ height: '54px', fontSize: '15px' }}>
            Apply Now
          </Link>
          <Link to="/contact" className="nav-apply-btn" style={{ height: '54px', fontSize: '15px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', boxShadow: 'none' }}>
            Book a School Tour
          </Link>
          <Link to="/contact" className="nav-apply-btn" style={{ height: '54px', fontSize: '15px', background: 'transparent', border: '1px solid transparent', boxShadow: 'none' }}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChairmanCTA;
