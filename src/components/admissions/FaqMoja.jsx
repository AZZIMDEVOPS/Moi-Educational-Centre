
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { PiMinusLight } from "react-icons/pi";
import { HiCheckCircle } from "react-icons/hi2";
const FaqMoja = ({ kitu }) => {
   const [ isActive, setIsActive ] = useState(false);
  return (
   <div className={ isActive ? "faq-block active" : "faq-block"}>
                <div className="faq-block-question" onClick={() => setIsActive(!isActive)}>
                        <h3>{kitu.question}</h3>
                        <div className="faq-block-action">
                                   { isActive ? <span><PiMinusLight /></span> :  <span><BsPlusLg /></span>}
                        </div>
                </div>
                <div className="faq-block-answer">
                        <div className="faq-block-answer-inner">
                                    { kitu.answer.straight.map(kitu2 => <p key={kitu2}>{kitu2}</p>)}
                                    { kitu.answer.list && 
                                            <div className="answer-list-wrap">
                                                    { kitu.answer.list.map((kitu2, index) => 
                                                            <div className="answer-list-block" key={kitu2.id}>
                                                                        <h4>{`${index+1}. ${kitu2.title}`}</h4>
                                                                        <ul>
                                                                                { kitu2.explanations.map(kitu3 => <li key={kitu3}>{kitu3}</li>)}
                                                                        </ul>
                                                            </div>
                                                    )}
                                            </div>
                                    }
                                    { kitu.answer.simple_list &&
                                          <div className="answer-list-wrap">
                                                  <ul>
                                                         { kitu.answer.simple_list.map(kitu2 => 
                                                               <li key={kitu2}><span><HiCheckCircle /></span>{kitu2}</li>
                                                         )}
                                                  </ul>
                                          </div>
                                    }
                        </div>
                </div>
    </div>
  )
}

export default FaqMoja