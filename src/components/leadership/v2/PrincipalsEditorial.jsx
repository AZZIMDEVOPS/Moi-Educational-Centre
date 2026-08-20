import { leaders } from '../../../data/leaders';

// We map image paths from data/leaders (which are root relative like "/team/wekesa.jpg")
// to our Vite setup. Ideally, these images are in public/team/ or src/assets/.
// In the current setup, if they are root relative, they are likely in the public folder.

const PrincipalsEditorial = () => {
  const principalSenior = leaders.find(l => l.id === 0);
  const principalPrimary = leaders.find(l => l.id === 276);

  return (
    <>
      {/* Principal Senior School */}
      <section className="ldr-phil reveal">
        <div className="ldr-phil-inner">
          <div className="ldr-phil-text">
            <h2 style={{ color: '#fff' }}>{principalSenior.name}</h2>
            <div className="ldr-chair-title" style={{ marginBottom: '24px' }}>{principalSenior.position}</div>
            
            {principalSenior.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className="ldr-phil-img">
            <img src={principalSenior.image} alt={principalSenior.name} />
            <div className="ldr-quote-block">
              <p className="ldr-quote-text">"{principalSenior.quote.text}"</p>
              <span className="ldr-quote-sig">— {principalSenior.quote.intro.replace(',', '').trim()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Principal Primary & Junior School (Flipped Layout) */}
      <section className="ldr-phil reveal" style={{ background: '#0A0118', paddingTop: '60px', paddingBottom: '120px' }}>
        <div className="ldr-phil-inner" style={{ direction: 'rtl' }}>
          
          <div className="ldr-phil-text" style={{ direction: 'ltr' }}>
            <h2 style={{ color: '#fff' }}>{principalPrimary.name}</h2>
            <div className="ldr-chair-title" style={{ marginBottom: '24px' }}>{principalPrimary.position}</div>
            
            {principalPrimary.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="ldr-phil-img" style={{ direction: 'ltr' }}>
            <img src={principalPrimary.image} alt={principalPrimary.name} />
            <div className="ldr-quote-block" style={{ right: '-20px', left: '40px' }}>
              <p className="ldr-quote-text">"{principalPrimary.quote.text}"</p>
              <span className="ldr-quote-sig">— {principalPrimary.quote.intro.replace(':', '').trim()}</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default PrincipalsEditorial;
