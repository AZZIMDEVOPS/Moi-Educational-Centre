import { HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom"
import { useArticlesFetch } from "../../hooks/articleshook";

const NewsHero = () => {
  const { posts } = useArticlesFetch();
  const articles = localStorage.getItem("MEC Articles") ? JSON.parse(localStorage.getItem("MEC Articles")) : posts;

  return (
    <div className="news-hero">
            <div className="inner-row">
                      <div className="news-hero-content">
                                  <div className="news-intro">
                                           <h1>Latest News & Updates</h1>
                                           <p>Stay up to date with what's happening at MEC! Read our Blog and browser our events.</p>
                                  </div>

                                  <div className="news-body-strip">
                                             <div className="purple-strip"></div>
                                             <div className="news-body-row">
                                                           <div className="news-body-header">
                                                                     <h3>All News</h3>
                                                                     <select>
                                                                             <option value="">Filter by</option>
                                                                     </select>
                                                           </div>
                                                         { articles && articles.length > 0 ?
                                                                <div className="news-body-group">
                                                                          { articles.map(item => 
                                                                                <Link to={`/news-and-updates/${item.slug}`} className="blog-moja" key={item.id}>
                                                                                        <img src={item._embedded["wp:featuredmedia"] ?  item._embedded["wp:featuredmedia"][0].source_url: ''} alt="item.slug" />

                                                                                        <div className="blog-texts">
                                                                                                <h3>{item._embedded['wp:term'][0][0].name.replace(/&amp;/g, '&' )}</h3>
                                                                                                <h2>{item.title.rendered}</h2>
                                                                                                <Link to={`/news-and-updates/${item.slug}`}>Read more <span><HiChevronRight /></span></Link>
                                                                                        </div>
                                                                                </Link>
                                                                          )}
                                                                </div>
                                                          :
                                                               <div className="loader-box">
                                                                        <div className="spin-loader"></div>
                                                               </div>
                                                          }
                                             </div>
                                  </div>
                      </div>
            </div>
    </div>
  )
}

export default NewsHero