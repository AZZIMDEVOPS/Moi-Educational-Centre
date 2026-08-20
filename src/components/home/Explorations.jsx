import { Link } from "react-router-dom"
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import parent from "../../assets/parents.jpg"
import podcast from "../../assets/podcast.jpg"
import alumni from "../../assets/alumni.jpg"
const Explorations = () => {
  return (
    <div className="explore-section">
             <div className="inner-row">
                        <div className="explore-section-content">
                                    <h2>Explore More about MEC</h2>

                                    <div className="explore-items-group">
                                                <div className="events-hub">
                                                           <div className="events-hub-texts">
                                                                      <h3>School Events</h3>
                                                                      <p>From fun-filled sports days to inspiring talent shows and community celebrations, our school events bring learning to life and create lasting memories. There’s always something exciting happening at MEC!</p>
                                                                      <Link to={"/about-MEC/school-events"}>Explore <span><HiOutlineArrowUpRight /></span></Link>
                                                           </div>
                                                </div>
                                                <div className="item-group-flex">
                                                          <div className="hub">
                                                                   <div className="hub-image">
                                                                             <img src={parent} alt="" />
                                                                   </div>
                                                                   <div className="hub-texts">
                                                                                <div className="hub-texts-column">
                                                                                        <h3>Parents Hub</h3>
                                                                                          <p>Your one-stop resource center for updates, school calendars, communication tools and parenting resources</p>
                                                                                </div>
                                                                                <Link to={"/"}><HiOutlineArrowUpRight /></Link>
                                                                   </div>
                                                          </div>
                                                          <div className="hub">
                                                                   <div className="hub-image">
                                                                             <img src={podcast} alt="" />
                                                                   </div>
                                                                   <div className="hub-texts">
                                                                                <div className="hub-texts-column">
                                                                                        <h3>Podcast Hub</h3>
                                                                                          <p>Where student voices and inspiring stories come to life. Tune in for fresh takes on school life, learning, and everything in between.</p>
                                                                                </div>
                                                                                <Link to={"/"}><HiOutlineArrowUpRight /></Link>
                                                                   </div>
                                                          </div>
                                                          <div className="hub last">
                                                                   <div className="hub-image">
                                                                             <img src={alumni} alt="" />
                                                                   </div>
                                                                   <div className="hub-texts">
                                                                                <div className="hub-texts-column">
                                                                                        <h3>Alumni</h3>
                                                                                          <p>Our alumni network is a testament to the strength of an MEC education — and we invite you to stay connected, share your story, and invest in the next generation.</p>
                                                                                </div>
                                                                                <Link to={"/"}><HiOutlineArrowUpRight /></Link>
                                                                   </div>
                                                          </div>
                                                </div>
                                    </div>
                        </div>
             </div>
    </div>
  )
}

export default Explorations