import { Link } from "react-router-dom"
import { faqs } from "../../data/faqs"
import FaqMoja from "./FaqMoja";

const FaqsBody = () => {
  console.log([...new Set(faqs.map(item => item.category))])
  return (
    <div className="faqs-wrapper">
            <div className="inner-row">
                        <div className="faqs-wrapper-content">
                                    <div className="faqs-intro">
                                             <h1>Frequently Asked Questions</h1>
                                              <p>Want to learn more about life at MEC? Below you'll find answers to some of the most frequently asked questions from parents and students, covering everything from admissions to daily life at school. If you don’t find what you’re looking for, our <Link to={"/contact"}>Team</Link>  is always here to help.</p>
                                    </div>
                                    <div className="faqs-row">
                                            { [...new Set(faqs.map(item => item.category))].map(stuff => 
                                                  <div className="faq-block-parent" key={stuff}>
                                                           <h2>{stuff}</h2>
                                                           { faqs.filter(kitu => kitu.category === stuff).map(kitu2 =>
                                                                 <FaqMoja kitu={kitu2} key={kitu2.id}/>
                                                           )}
                                                  </div>
                                            )}
                                    </div>
                        </div>
            </div>
    </div>
  )
}

export default FaqsBody