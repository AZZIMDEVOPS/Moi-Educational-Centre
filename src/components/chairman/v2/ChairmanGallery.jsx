import img1 from '../../../assets/senior.jpg';
import img2 from '../../../assets/events.jpg';
import img3 from '../../../assets/school4.jpg';

const ChairmanGallery = () => {
  return (
    <section className="chair-gal">
      <div className="chair-gal-grid">
        <div className="chair-gal-item">
          <img src={img1} alt="MEC Students Learning" loading="lazy" />
        </div>
        <div className="chair-gal-col2">
          <div className="chair-gal-item">
            <img src={img2} alt="MEC Graduation Ceremony" loading="lazy" />
          </div>
          <div className="chair-gal-item">
            <img src={img3} alt="MEC Campus Life" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanGallery;
