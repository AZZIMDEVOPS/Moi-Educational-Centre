import { leaders } from '../../../data/leaders';

const LeadershipGrid = () => {
  // Filter out Chairman (78), Principals (0, 276) and empty entries
  const featuredIds = [78, 0, 276];
  const gridLeaders = leaders.filter(l => !featuredIds.includes(l.id) && l.name);

  return (
    <section className="ldr-grid-sec">
      <div className="ldr-sec-header">
        <h2 className="ldr-sec-title" style={{ color: '#fff' }}>Our Core Leadership</h2>
        <p className="ldr-sec-sub">
          Meet the dedicated team of deputy principals, heads of sections, and administration driving our vision forward.
        </p>
      </div>

      <div className="ldr-grid">
        {gridLeaders.map((leader) => (
          <div key={leader.id} className="ldr-card">
            <div className="ldr-img">
              <img src={leader.image} alt={leader.name} loading="lazy" />
            </div>
            <div className="ldr-info">
              <h3 style={{ color: '#fff' }}>{leader.name}</h3>
              <div className="role">{leader.position}</div>
              
              <div style={{ maxHeight: '200px', overflowY: 'auto', paddingRight: '8px', marginBottom: '16px' }} className="custom-scrollbar">
                {leader.description.map((paragraph, idx) => (
                  <p key={idx} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginBottom: '12px' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {leader.quote && (
                <div style={{ background: 'rgba(168,85,247,0.1)', padding: '16px', borderRadius: '12px', borderLeft: '4px solid #A855F7' }}>
                  <p style={{ fontStyle: 'italic', color: '#fff', fontSize: '13px', marginBottom: '0' }}>"{leader.quote.text}"</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(168,85,247,0.5);
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default LeadershipGrid;
