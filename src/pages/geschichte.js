import React from "react";
import SpotLight from '../images/Albers.png'
import Layout from "../components/layout";
import SEO from "../components/seo";
function Geschichte() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Geschichte"
      />

      <section className="flex flex-col items-center ">
        <div className="">
         
          <p className="text-center text-yellow-600 text-5xl font-bold -z-30 uppercase">Geschichte</p>
          
        </div>

        <figure className="w-10/12 py-2/12 mx-20">
          <img 
          alt="Spotlight Rettungsanker" 
          className="w-6/12"
          src={SpotLight} />
        </figure>
      </section>

      <section>
      
		<div className="container">
			
			
			<div className="preload">
				<img src="images/preloader.gif" alt="" />
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
								<img src="images/bar_rot_2.png" alt="" />
								<img src="images/" alt="" />
								<img src="images" alt="" />
								<img src="images/content_img_4.png" alt="" />
								<img src="images/content_img_5.png" alt="" />
								<img src="images/content_img_6.jpg" alt="" />
							</div>
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
											<a href="images/gallery_sample_01.jpg" data-rel="prettyPhoto[sample_gallery]" title="Gallery sample 02"></a>
											<a href="images/gallery_sample_03.jpg" data-rel="prettyPhoto[sample_gallery]" title="Gallery sample 03"></a>
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
										<span><img src="images/logos.png" alt="" /></span>
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
											<a href="images/gallery_sample_02.jpg" data-rel="prettyPhoto[sample_gallery2]" title="Gallery sample 02"></a>
											<a href="images/gallery_sample_03.jpg" data-rel="prettyPhoto[sample_gallery2]" title="Gallery sample 03"></a>
										</div>
									</div>
								</div>
								
							</div> 
							
						</div> 
						
						
					
						<div className="audio_player">
							<audio src="mp3/music.mp3" preload="auto"></audio>
						</div>
										
				
				</div> 
				
				
				
				<div className="shadow">
					<img src="images/shadow.png" alt="" />
				</div>
			
			
			</div>

		</div> 

	<timeline></timeline>


      </section>
    </Layout>
  );
}

export default Geschichte;