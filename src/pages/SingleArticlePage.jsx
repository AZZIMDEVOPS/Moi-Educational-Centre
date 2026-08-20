import { useParams } from "react-router-dom"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import { Markup } from "interweave";
import { useArticlesFetch } from "../hooks/articleshook";

const SingleArticlePage = () => {
    const { title } = useParams();
    const { posts } = useArticlesFetch();
  const articles = localStorage.getItem("MEC Articles") ? JSON.parse(localStorage.getItem("MEC Articles")) : posts;
    const data = articles && articles.find(item => item.slug === title);
  return (
    <>
            <Navbar />
            <div className="single-article-page">
                     <div className="inner-row">
                              <div className="single-article-content">
                                      { data ? 
                                            <div className="single-article-wrapper">
                                                     <img className="intro-image" src={data._embedded["wp:featuredmedia"] ?  data._embedded["wp:featuredmedia"][0].source_url: ''} alt="item.slug" />
                                                     <div className="single-article-title">
                                                             <h3>{data._embedded['wp:term'][0][0].name.replace(/&amp;/g, '&' )}</h3>
                                                             <h2>{data.title.rendered}</h2>
                                                    </div>
                                                    <div className="single-article-body">
                                                               <Markup content={data.content.rendered} />
                                                    </div>
                                            </div> 
                                            :
                                            <div className="single-article-loader">
                                                      <div className="spin-loader"></div>
                                                      <h3>Just a moment</h3>
                                            </div>
                                       }
                              </div>
                                {/* <div className="single-article-content">
                                           <img className="intro-image" src={data.image} alt="" />
                                           <div className="single-article-title">
                                                     <h3>{data.category}</h3>
                                                    <h2>{data.title}</h2>
                                                    { data.intro && <h4>{data.intro}</h4>}
                                           </div>
                                           <div className="single-article-body">
                                                    { data.body.map(item => <p key={item}>{item}</p>)}
                                                    { data.body_list && 
                                                           <>
                                                                 <ul>
                                                                          { data.body_list.data.map(item => <li key={item}>{item}</li>)}
                                                                 </ul>
                                                                 <p>{data.body_list.justification}</p>
                                                           </>
                                                    }
                                                    { data.expectations && 
                                                          <>
                                                                 <h3>{data.expectations.intro}</h3>
                                                                 <ul>
                                                                         { data.expectations.list.map(item => <li key={item}>{item}</li>)}
                                                                 </ul>
                                                          </>
                                                    }
                                                    { data.extra_info && <p>{data.extra_info}</p>}
                                                    { data.pitch && <p><span>{data.pitch}</span></p>}

                                                    <div className="body-block">
                                                             { data.location && <p><span><ImLocation2 /></span>{data.location}</p>}
                                                             { data.date && <p><span><LuCalendarDays /></span>{data.date}</p>}
                                                    </div>
                                           </div>
                                </div> */}
                     </div>
            </div>
            <Footer />
    </>
  )
}

export default SingleArticlePage