import React, { Component } from 'react'
import Top from '../../hoc/Top'
import Header from '../../components/Header'
import PictureSection from '../../components/PictureSection'
import Svg from '../../components/UI/Svg'

import header from '../../assets/img/storyHeader.jpg'
import picture1 from '../../assets/img/image72.jpg'
import picture2 from '../../assets/img/image44.jpg'
import picture3 from '../../assets/img/image45.jpg'

class Story extends Component {
    render() {
        return (
            <Top>
                <main className="main">
                    <Header image = {header} >
                        <div className="header__container">
                            <h1 className="header__heading" data-aos="fade-left" data-aos-delay="2000">
                                Our  <span>Story</span>
                            </h1>
                            <a href="#story" className="header__svg-box">
                                <Svg class="header__svg" src="chevron-down" />
                            </a> 
                        </div>
                    </Header>

                    <section className="section">
                        <div className="section__container section__container--story">
                            <h2 className="heading--2 center" data-aos="fade-right">Our Story as told by Nathan</h2>
                            <p data-aos="fade-up">Penning down these memories that have led us to this beautiful moment fills us with joy so unexplainable we can't help but laugh and be thankful to God for ordering our feet to cross each other's paths. </p>
                            <p data-aos="fade-up">On a cool July evening in 2016, I was scrolling through the then Blackberry Messenger(BBM) Feed when a mutual friend's Display Picture caught my attention. It was the picture of this beautiful girl with lovely eyes calling all my Yoruba names. We finally got talking and had significant interest in each other's lives.</p>
                            <p data-aos="fade-up">A couple of months down the line, Like David in the bible, I enquired of the Lord if I should pursue or stay put <span role="img" aria-label="laugh">😂😂</span>. Getting the "Green Light", I went guns blazing to capturing the love of my life while being careful not to fall in the dreaded friend zone. It took some convincing to get through to Seun but after having her convictions from God and studying my entire person, she made her decision. Phew!!!</p>       
                            <p data-aos="fade-up">We became best friends and partners in everything. God strengthened our relationship through His Word and the revelation of His truth in our lives.</p>
                            <p data-aos="fade-up">Fast forward to the 16th of August 2019, Seun said yes to marrying me. This is only the beginning of our story – a tangible evidence of God’s grace and favour to His children. We rest assured in the confidence of God's promises for us and look forward to all things beautiful that will be written in our years to come.</p>
                        </div>
                    </section>

                    <PictureSection image = {picture1}></PictureSection>

                    <section className="section">
                        <div className="section__container section__container--story">
                            <h2 className="heading--2 center" data-aos="fade-right">How we met ...if you let Seun tell it.</h2>
                            <p data-aos="fade-up">On that evening, our mutual friend reached out to me requesting my consent to share my BBM pin with a friend of hers named Nathan. I had initially thought she had reached out to check up on me as usual but no, it was about man. Sighs!!! Big deal, I told her to go ahead. </p>
                            <p data-aos="fade-up">Nathan reached out to me almost immediately and that was how it all started. He told me how he had seen me on his friend’s status and just wanted to be friends. And as we all know, guys ever hardly want to become “just friends”.</p>
                            <p data-aos="fade-up">We got talking casually for a couple of months and I really enjoyed our conversations; He was really good company. I was in training in Ibadan at the time and Nathan would call me every night. We would talk for hours about everything, my interest in cooking and even to how a chef friend slyed me and didn’t teach me the recipes I had paid him for.</p>
                            <p data-aos="fade-up">Our busy schedules took a toll on communication then sometime in September I stopped hearing from him and couldn’t reach him on BBM. I got to know later that Baba had blocked me! He thought I was doing shakara because of the way I responded during a number of calls he put through during that period. I reached out to him to  know how he was doing when he explained the reason for his silence and all. We got back talking and since then till today, we have spoken every day. </p>
                            <p data-aos="fade-up">We got closer and made it official in December. It was a learning period in the beginning. Nathan is a completely unique breed and understanding him was like a 5-unit course for me <span role="img" aria-label="smile">😁😁</span>. We deliberately made God the centre of our relationship and He has always been there for us.</p>
                            <p data-aos="fade-up">P.S: He didn’t just like the girl, he liked the food as well; dodorishi and goat meat most especially. <span role="img" aria-label="wink">😉😉</span></p>
                        </div>
                    </section>
                    
                    <PictureSection image={picture2}></PictureSection>
                
                    <section className="section">
                        <div className="section__container section__container--story">
                            <h2 className="heading--2 center" data-aos="fade-right">The Proposal</h2>
                            <p data-aos="fade-up">We had begun having conversations about settling down in 2019 but nothing much or defined. Life happened and we needed to at least introduce each other to our families officially. In my head, I had thought I was never going to have the proposal story, but he still made it happen.</p>
                            <p data-aos="fade-up">So, on that faithful day on the 16th of August 2019, I was at his place for most of the day and we had planned to go out to play. We tried out new activities and it was so much fun!!!! <em>(Like I had fun like a child...)</em></p>
                            <p data-aos="fade-up">On our way back to his place he had feigned having a bad tummy and an urgency to ease himself. He dropped from the car and hurriedly got upstairs leaving me after his trail. It was so weird but oh well, we were home. I got upstairs and the door was locked, and I was like <em>'shebi'</em> he knows I’m coming upstairs.</p>
                            <p data-aos="fade-up">I knocked and his niece opened for me. The room was dark and beautifully decorated with candles and roses. I got so emotional and stood still for a couple of seconds until I came around. <em>Baby girl had shed a tear.</em> I got in to see him on his knee. At, this point I was already crying <span role="img" aria-label="cold sweat">😅😅</span>. He asked me to marry him and of course,  I said yes. It was one of the happiest days of my life. It was beautiful and I’m glad we’ll be spending forever with each other. <span role="img" aria-label="heart">❤❤</span></p>
                        </div>
                    </section>

                    <PictureSection image = {picture3}></PictureSection>

                </main>
            </Top>
        )
    }
}

export default Story