import React from "react";
import Container from "../components/container" ;
import Preloader from '../images/preloader.gif';
import BarRotlicht from '../images/bar_rot_2.png';
import Img4 from '../images/content_img_4.png';
import Img5 from '../images/content_img_5.png';
import Img6 from '../images/content_img_6.jpg';
const timeline = () => {
    return (
        <>
        <section className="max-w-md w-16 mx-auto">
        <Container>
            
         <div className="container">
                  
                  
                  <div className="preload">
                  <img
                  alt="Preloader"
                  className="h-12"
                  src={Preloader}/>
          
                  </div>
                  
                  
                  
                  <div id="timeline_container">
                      
                      
                      <div id="timeline" 
                          data-fadeInDelay="3000"
                          data-width="952"
                          data-height="450"
                          data-imagesWidth="3400"
                          data-imagesHeight="265"
                          data-contentWidth="1670"
                          data-contentHeight="174"
                          data-draggerWidth="59"
                          data-draggerHeight="21"
                          data-mouseWheel="1"
                      >
      
                              
                              
                              <div className="viewport">
                                  <div className="images">
                                      <img 
                                              src={BarRotlicht}
                                              className="w-60 h-12"
                                               alt=""/> 
                                      <img src="../images/" alt=""/>
                                      <img src="../images" alt=""/> 
                                      <img 
                                          src={Img4}
                                              className="w-60 h-12"
                                               alt=""/> 
                                      <img 
                                          src={Img5}
                                              className="w-60 h-12"
                                               alt="" />
                                      <img 
                                          src={Img6}
                                              className="w-60 h-12"
                                               alt=""/>
                                                                    
                                  </div>
                            
                              
                              
                              <div className="scrollbar">
                                  <div className="track">
                                  
                                      
                                      <div className="marks">
                                          <div id="m0" className="mark" data-xpos="360" data-label="MARCH 2018"></div>
                                          <div id="m1" className="mark" data-xpos="520" data-label="2005"></div>
                                          <div id="m2" className="mark" data-xpos="700" data-label="2020 - PARTNERS"></div>
                                          <div id="m3" className="mark" data-xpos="810" data-label="2021"></div>
                                      </div>
                                      
                                      <div className="dragger"></div>
                                  </div>
                              </div>
                            
                              
                              
                              <div className="milestones">
                              
                                  <div className="content">
                                  
                                      
                                      
                                      <div className="column_first">
                                          <div className="c200">
                                              <span className="date">SEPTEMBER 2017 - EROEFFNUNG</span>
                                              <span className="txt">Michael Schreck und Volker Schneider erรถffnen in Hommage an eine typische Kiezkneipe auf St. Pauli - in der Altstadt <strong>den Rettungsanker - Freiburg</strong><br/> </span>
                                          </div>
                                      </div>
                                      
                                      
                                      <div className="column">
                                          <div className="c125">
                                              <span className="date">2018</span>
                                              <span className="txt">Der Retungsanker hat sich in der Freiburger<br/><br/>Knepipenszene voll etabliert</span>
                                              <span className="thumb"><a href="#extended_text1" data-rel="prettyPhoto" title=""><img src="images/read_more.png" alt="" className="readmore" title="READ MORE" /></a></span>
                                              
                                              <div id="extended_text1" className="hidden">	<p><strong>Sample of extended content opened with lightbox</strong><br/><br/>
                                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <a href="http://www.themeforest.net" target="_blank">sample of external link</a>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                              </div>
                                          </div>
                                      </div>
                                      
                                      <div className="column">
                                          <div className="c125">
                                              <span className="date">SEPTEMBER 2019</span>
                                              <span className="txt">Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
                                              <span className="date"><br/>NOVEMBER 2019</span>
                                              <span className="txt">Duis aute irure dolor in voluptate velit esse.</span>
                                          </div>
                                      </div>
                                      
                                      
                                      <div className="column">
                                          <div className="c125">
                                              <span className="date">2020 - 20 YEARS<br/>ANNIVERSARY VIDEO</span>
                                              <span className="thumb"><a href="http://vimeo.com/24492485" data-rel="prettyPhoto" title="20 Years Anniversary Video" className="video_rollover"><img src="images/video_sample_thumb.png" alt="" /></a></span>
                                              <span className="thumb_description">Short video description</span>
                                          </div>
                                      </div>
                                      
                                      
                      
                                      <div className="column">
                                          <div className="c150">
                                              <span className="date">2021</span>
                                              <span className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                                              <span className="big_link"><a href="images/gallery_sample_02.jpg" data-rel="prettyPhoto[sample_gallery]" title="Gallery sample 01">IMAGE GALLERY</a></span>
                                              
                                              <div className="hidden">	
                                                  <a href="../images/gallery_sample_01.jpg" data-rel="prettyPhoto[sample_gallery]" title="Gallery sample 02"></a>
                                                  <a href="../images/content_img_3.png" data-rel="prettyPhoto[sample_gallery]" title="Gallery sample 03"></a>
                                              </div>
                                              
                                          </div>
                                      </div>
                                      
                                      
                                      <div className="column">
                                          <div className="c125">
                                              <span className="date">2022 - WPA PARTNERS</span>
                                              <span className="txt">Sample of external links:</span>
                                              <span className="link"><br/><a href="http://themeforest.net/user/pezflash" target="_blank">www.envato.com</a></span>
                                              <span className="link"><a href="http://themeforest.net/user/pezflash" target="_blank">www.themeforest.net</a></span>
                                              <span className="link"><a href="http://themeforest.net/user/pezflash" target="_blank">www.codecanyon.net</a></span>
                                          </div>
                                      </div>
                                      
                              
                                      <div className="column">
                                          <div className="c225">
                                              <span className="date">2023 - WIDE COLUMN SAMPLE</span>
                                              <span><img src="../images/logos.png" alt="" /></span>
                                              <span className="txt">Ut enim ad minim veniam, quis nostrud exercit ullamco. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span>	
                                              <span className="thumb"><a href="#extended_text2" data-rel="prettyPhoto" title=""><img src="images/read_more.png" alt="" className="readmore" title="READ MORE" /></a></span>
                                              
                                              <div id="extended_text2" className="hidden">	
                                                  <p><strong>Sample of extended content opened with lightbox</strong><br/><br/>
                                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <a href="http://www.themeforest.net" target="_blank">sample of external link</a>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                              </div>
                                          </div>
                                      </div>
                                      
                                      <div className="column">
                                          <div className="c125">
                                              <span className="date">2024 - PRESENT</span>
                                              <span className="thumb"><a href="images/gallery_sample_01.jpg" data-rel="prettyPhoto[sample_gallery2]" title="10 Years Anniversary Video" className="image_rollover"><img src="images/image_sample_thumb.png" alt="" /></a></span>
                                              <span className="thumb_description">Image description</span>
                                              
                                              <div className="hidden">	
                                                  <a href="../images//gallery_sample_02.jpgg" data-rel="prettyPhoto[sample_gallery2]" title="Gallery sample 02"></a>
                                                  <a href="../images/gallery_sample_03.jpg" data-rel="prettyPhoto[sample_gallery2]" title="Gallery sample 03"></a>
                                              </div>
                                          </div>
                                      </div>
                                      
                                  </div> 
                                  
                              </div> 
                              
                              
                          
                              <div className="audio_player">
                                  <audio src="mp3/music.mp3" preload="auto"></audio>
                              </div>
                                              
                      
                      </div> 
                      </div>
                      
                      
                      <div className="shadow">
                          <img src="../images//shadow.png" alt="" />
                      </div>
                  
                  
                  </div>
      
              
      
          </div>
    
          
      </Container>  
      </section>
    </>
    ) 
}
export default timeline
