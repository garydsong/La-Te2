import React from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/la-te.png"
import './SplashPage.css'
import Collapsible from "../Collapsible/Collapsible";
import pfp from "../../assets/pfp/pfp1.jpg"
import pfp2 from "../../assets/pfp/pfp2.png"
import pfp3 from "../../assets/pfp/pfp3.png"
import alert from "../../assets/icons/alert-icon.svg"
import coin from "../../assets/icons/coin-icon.svg"
import envelope from "../../assets/icons/envelope-icon.svg"
import goal from "../../assets/icons/goal-icon.svg"
import lock from "../../assets/icons/lock-icon.svg"
import ok from "../../assets/icons/ok-icon.svg"
import pic from "../../assets/icons/pic-icon.svg"
import puzzle from "../../assets/icons/puzzle-icon.svg"
import shop from "../../assets/icons/shop-icon.svg"
import star from "../../assets/icons/star-icon.svg"
import target from "../../assets/icons/target-icon.svg"
import tier from "../../assets/icons/tier-icon.svg"
import webpage from "../../assets/icons/webpage-icon.svg"
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

import Carousel from "../Carousel/Carousel";


function SplashPage() {
    const sessionUser = useSelector(state => state.session.user)

    const items = [
        'test-one', 'test-two', 'test-three', 'test-four', 'test-five'
    ]

    const setting = {
        dragSpeed: 1.25,
        itemWidth: 500,
        itemHeight: 300,
        itemSideOffsets: 15,
    }

    const itemStyle = {
        width: `${setting.itemWidth}px`,
        height: `${setting.itemHeight}px`,
        margin: `0px ${setting.itemSideOffsets}px`
    }


    let sessionLinks
    if (sessionUser) {
        sessionLinks = (
            <>
                <div className="la-te-url-grouper">
                    <div className="la-te-url-input">la-te.com/</div>
                    <input placeholder={sessionUser.username} className="input-claim-2"></input>
                </div>

                <div className="claim-button-input-2">That's you!</div>

            </>
        )
    } else {
        sessionLinks = (
            <>
                <div className="la-te-url-grouper">
                    <div className="la-te-url-input">la-te.com/</div>
                    <input className="input-claim"></input>
                </div>
                <NavLink id="link" to="/sign-up">
                    <div className="claim-button-input">Claim</div>
                </NavLink>
            </>
        )
    }

    return (
        <>
            <div className='starting-div'>
                <div className="whitespace"></div>
                <div className='top-splash-page-wrapper'>
                    <div className='top-splash-title'>Make Money and Make a La-Té</div>
                    <div className='top-splash-paragraph'>The all-in-one place to accept donations, memberships and sales from your fans!</div>
                </div>
                <div className="top-splash-input-signup">
                    {/* <div className="la-te-url-grouper"> */}
                    {/* <div className="la-te-url-input">la-te.com/</div>
                        <input className="input-claim"></input> */}
                    {sessionLinks}
                    {/* </div>
                    <NavLink id="link" to="/sign-up">
                        <div className="claim-button-input">Claim</div>
                    </NavLink> */}
                </div>

                <div className="top-splash-below-input">$6 million earned on La-Té last month!</div>

                <div className="whitespace"></div>
                <div className="whitespace"></div>
                <div className="whitespace"></div>


                <div className="under-top-splash-wrapper">
                    <div className="under-splash-title-container">
                        <div className="under-splash-title">We Take 0% of Your Donations</div>
                        <div className="under-splash-paragraph">
                            Unlike other platforms, we don't take a fee on each donation. Keep more of your money with La-Té.
                        </div>
                        <div className="under-splash-earned">
                            Over $150 Million earned so far!
                        </div>
                        <NavLink id="link" to="/sign-up">
                            <div className="under-splash-get-started">
                                Get Started
                            </div>
                        </NavLink>
                    </div>
                </div>

                <div className="mid-splash-wrapper">
                    <img src='https://storage.ko-fi.com/cdn/landing_assets/kofi_second_heroimg.png' />
                </div>

                <div className="mid-under-splash-wrapper">
                    <div className="mid-under-splash-title">1,000,000 Creators Love La-Té</div>
                    <div className="mid-under-splash-paragraph">
                        <div className="mid-under-splash-buttons-1">Artists</div>
                        <div className="mid-under-splash-buttons-2">Cosplayers</div>
                        <div className="mid-under-splash-buttons-3">Musicians</div>
                        <div className="mid-under-splash-buttons-4">Podcasters</div>
                        <div className="mid-under-splash-buttons-5">Developers</div>
                        <div className="mid-under-splash-buttons-6">Streamers</div>
                        <div className="mid-under-splash-buttons-7">Video Creators</div>
                    </div>

                </div>

                <div className="testimonial-wrapper">
                    <img id="testimonial-img" src="https://storage.ko-fi.com/cdn/landing_assets/testimonails_bg-min.png"></img>

                    <div className="testimonial-content">
                        <Carousel _data={items} {...setting}>
                            {/* {
                                items.map((i, _i) => (
                                    <div
                                        key={_i}
                                        className='item'
                                        style={{ ...itemStyle }}>
                                        <p>{i}</p>
                                    </div>
                                ))
                            } */}
                            <div className="testimonial-item" style={{ ...itemStyle }}>
                                <img id="testimonial-pfp-img" src="https://i.imgur.com/VpFihH4.png" />
                                <div className="testimonial-user-name">
                                    Kobe
                                </div>
                                <div id="testimonial-category-wrapper">
                                    <div id="testimonial-category">Podcaster</div>
                                    <div id="testimonial-category">Cosplayer</div>

                                </div>
                                <div id="user-testimonial">
                                    "!FWOOF"
                                </div>
                            </div>
                            <div className="testimonial-item" style={{ ...itemStyle }}>
                            <img id="testimonial-pfp-img" src="https://i.imgur.com/SAF6qvd.png" />
                                <div className="testimonial-user-name">
                                    Keke
                                </div>
                                <div id="testimonial-category-wrapper">
                                    <div id="testimonial-category">Podcaster</div>
                                    <div id="testimonial-category">Cosplayer</div>

                                </div>
                                <div id="user-testimonial">
                                    "!YARROOOOOO"
                                </div>
                            </div>
                            <div className="testimonial-item" style={{ ...itemStyle }}>
                            <img id="testimonial-pfp-img" src="https://i.imgur.com/QN4kwOL.png" />
                                <div className="testimonial-user-name">
                                    Stuart
                                </div>
                                <div id="testimonial-category-wrapper">
                                    <div id="testimonial-category">Minion</div>
                                    <div id="testimonial-category">Dancer</div>

                                </div>
                                <div id="user-testimonial">
                                    "!Banana"
                                </div>
                            </div>
                            <div className="testimonial-item" style={{ ...itemStyle }}>
                            <img id="testimonial-pfp-img" src="https://i.imgur.com/GP6MfOl.png" />
                                <div className="testimonial-user-name">
                                    Jake
                                </div>
                                <div id="testimonial-category-wrapper">
                                    <div id="testimonial-category">Artist</div>
                                    <div id="testimonial-category">Musician</div>

                                </div>
                                <div id="user-testimonial">
                                    "!Great site"
                                </div>
                            </div>
                            <div className="testimonial-item" style={{ ...itemStyle }}>

                            <img id="testimonial-pfp-img" src="https://i.imgur.com/BqrPQVs.png" />
                                <div className="testimonial-user-name">
                                    Boosted B
                                </div>
                                <div id="testimonial-category-wrapper">
                                    <div id="testimonial-category">Developer</div>
                                    <div id="testimonial-category">Streamer</div>

                                </div>
                                <div id="user-testimonial">
                                    "Finally I've been boosted"
                                </div>

                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className="under-testimonial-wrapper">
                    <div className='top-splash-page-wrapper'>
                        <br></br>
                        <div className='top-splash-title'>Everything in One Place</div>
                        <div className='top-splash-paragraph'>Start accepting donations in just 60 seconds. Grow your income by opening your La-Té page.</div>
                    </div>
                    <div className="top-splash-input-signup">
                        <div className="la-te-url-grouper">
                            <div className="la-te-url-input">la-te.com/</div>
                            <input className="input-claim"></input>
                        </div>
                        <NavLink id="link" to="/sign-up">
                            <div className="claim-button-input">Claim</div></NavLink>
                    </div>
                </div>

                <div className="bottom-mid-splash-wrapper-1">
                    <div className="bot-splash-wrapper-1">
                        <div className="bot-splash-desc-1">
                            <div className="bot-desc-title-1">
                                Receive Donations
                            </div>
                            <div className="bot-desc-sub-1">
                                0% Platform Fees
                            </div>
                            <div className="bot-desc-para-1">
                                La-Té is the original, fun and friendly way to receive donations and messages of support from fans of what you do!
                            </div>
                            <div className="bot-desc-para-1">
                                Use it as a tip jar, let fans crowdfund a goal and even get donation alerts while you stream.
                            </div>
                            <div></div><div></div>
                            <NavLink id="get-started-navlink" to="/sign-up">
                            <div className="bot-desc-button-1">Get Started</div>
                            </NavLink>
                        </div>
                        <img src="https://storage.ko-fi.com/cdn/landing_assets/kofi_donation.png" />
                    </div>
                </div>

                <div className="bottom-mid-splash-wrapper-2">
                    <div className="bot-splash-wrapper-2">
                        <img src="https://storage.ko-fi.com/cdn/landing_assets/kofi_commission.png" />
                        <div className="bot-splash-desc-2">
                            <div className="bot-desc-title-2">
                                Offer Commissions or Requests
                            </div>
                            <div className="bot-desc-sub-2">
                                Start for Free!
                            </div>
                            <div className="bot-desc-para-2">
                                Build a menu of creative commissions or offer personalized services like a custom tutorial or a video chat!
                            </div>
                            <div className="bot-desc-para-2">
                                Control available slots, offer add-ons and get paid directly into your PayPal or Stripe account.
                            </div>

                            <div className="bot-desc-button-2">
                                <div className="bot-desc-button-liner">
                                </div>
                                <div className="bot-desc-button-2-content">
                                    <div className="pfp-desc-holder-1">
                                        <img id="pfp1" src={pfp} />
                                        <div className="pfp-desc-title-1"><b>XOK3K3Llif3</b> is offering eat your drywall and scavenge for lizards.</div>
                                    </div>
                                    <NavLink id="un-style-nav-link" to="/users/12">
                                        <div className="visit-button">
                                            Visit
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom-mid-splash-wrapper-3">
                    <div className="bot-splash-wrapper-3">
                        <div className="bot-splash-desc-2">
                            <div className="bot-desc-title-2">
                                Offer Memberships

                            </div>
                            <div className="bot-desc-sub-2">
                                Build a Monthly Income
                            </div>
                            <div className="bot-desc-para-2">
                                Let fans become exclusive members, supporting you monthly at different pricing tiers.
                            </div>
                            <div className="bot-desc-para-2">
                                Reward members with unique benefits like Discord roles, exclusive content or physical items.
                            </div>

                            <div className="bot-desc-button-2">
                                <div className="bot-desc-button-liner">
                                </div>
                                <div className="bot-desc-button-2-content">
                                    <div className="pfp-desc-holder-1">
                                        <img id="pfp1" src={pfp2} />
                                        <div className="pfp-desc-title-1"><b>Taskman</b> offers members task services. You got a task? He's on the case!</div>
                                    </div>
                                    <NavLink id="un-style-nav-link" to="/users/1">
                                        <div className="visit-button">
                                            Visit
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <img src="https://storage.ko-fi.com/cdn/landing_assets/kofi_subscription.png" />
                    </div>
                </div>

                <div className="bottom-mid-splash-wrapper-4">
                    <div className="bot-splash-wrapper-4">
                        <img src="https://storage.ko-fi.com/cdn/landing_assets/kofi_shop.png" />
                        <div className="bot-splash-desc-2">
                            <div className="bot-desc-title-2">
                                Sell Products


                            </div>
                            <div className="bot-desc-sub-2">
                                Share your gift with the world!
                            </div>
                            <div className="bot-desc-para-2">
                                Open your La-Té Shop and add digital or physical items in seconds.
                            </div>
                            <div className="bot-desc-para-2">
                                No listing fees, no site to set up. Just share a link and start making sales!
                            </div>

                            <div className="bot-desc-button-2">
                                <div className="bot-desc-button-liner">
                                </div>
                                <div className="bot-desc-button-2-content">
                                    <div className="pfp-desc-holder-1">
                                        <img id="pfp1" src={pfp3} />
                                        <div className="pfp-desc-title-1"><b>suhspect</b> offers members eternal love and devotion!</div>
                                    </div>
                                    <NavLink id="un-style-nav-link" to="/users/4">
                                        <div className="visit-button">
                                            Visit
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="all-the-feats-wrapper">
                    <div id="feat-title">All the Features You Need</div>
                    <div id="feat-para">La-Té has everything you need to make an income from your work.</div>
                    <div id="feat-link">Let's Get Started</div>
                </div>

                <div className="bottom-grid-wrapper">
                    <div className="bottom-grid">
                        <div className="bottom-grid-card">
                            <img id="grid-icon" src={coin} />
                            <div className="bottom-grid-card-title">
                                Get Paid Directly
                            </div>
                            <div className="bottom-grid-card-para">
                                0% platform fees. Donations go directly to your PayPal or Stripe account.
                            </div>
                        </div>

                        <div className="bottom-grid-card">
                            <img id="grid-icon" src={envelope} />
                            <div className="bottom-grid-card-title">
                                Messages of Support
                            </div>
                            <div className="bottom-grid-card-para">
                                Receive messages of encouragement from your supporters.
                            </div>
                        </div>

                        <div className="bottom-grid-card">
                            <img id="grid-icon" src={alert} />
                            <div className="bottom-grid-card-title">
                                Stream Alerts
                            </div>
                            <div className="bottom-grid-card-para">
                                Get donation messages while you stream on Twitch, YouTube & Facebook.
                            </div>
                        </div>

                        <div className="bottom-grid-card">
                            <img id="grid-icon" src={goal} />
                            <div className="bottom-grid-card-title">
                                Goals
                            </div>
                            <div className="bottom-grid-card-para">
                                Set a crowdfunding goal and encourage fans to contribute to achieve it!
                            </div>
                        </div>

                        <div className="bottom-grid-card">
                            <img id="grid-icon" src={webpage} />
                            <div className="bottom-grid-card-title">
                                Posts
                            </div>
                            <div className="bottom-grid-card-para">
                                Share your creative journey with blog posts, videos and audio clips.
                            </div>
                        </div>

                        <div className="bottom-grid-card">
                            <img id="grid-icon" src={star} />
                            <div className="bottom-grid-card-title">
                                Rewards
                            </div>
                            <div className="bottom-grid-card-para">
                                Let supporters unlock exclusive posts, Discord roles, Member-only products and more.
                            </div>
                        </div>

                        <div className="bottom-grid-card">
                            <img id="grid-icon" src={ok} />
                            <div className="bottom-grid-card-title">
                                Commissions & Services
                            </div>
                            <div className="bottom-grid-card-para">
                                Let fans buy unique work or pay for direct access to you.
                            </div>
                        </div>

                        <div className="bottom-grid-card">
                            <img id="grid-icon" src={tier} />
                            <div className="bottom-grid-card-title">
                                Membership Tiers
                            </div>
                            <div className="bottom-grid-card-para">
                                Let fans support you monthly with La-Té Memberships.
                            </div>
                        </div>

                        <div className="bottom-grid-card">
                            <img id="grid-icon" src={lock} />
                            <div className="bottom-grid-card-title">
                                Supporter-Only Content
                            </div>
                            <div className="bottom-grid-card-para">
                                Make exclusive content available to supporters or members.
                            </div>
                        </div>

                        <div className="bottom-grid-card">
                            <img id="grid-icon" src={puzzle} />
                            <div className="bottom-grid-card-title">
                                Integrations
                            </div>
                            <div className="bottom-grid-card-para">
                                Connect to Discord, Zapier, WordPress and more
                            </div>
                        </div>

                        <div className="bottom-grid-card">
                            <img id="grid-icon" src={pic} />
                            <div className="bottom-grid-card-title">
                                Gallery
                            </div>
                            <div className="bottom-grid-card-para">
                                Create a portfolio of your best work and share your creative process.
                            </div>
                        </div>

                        <div className="bottom-grid-card">
                            <img id="grid-icon" src={shop} />
                            <div className="bottom-grid-card-title">
                                Shop
                            </div>
                            <div className="bottom-grid-card-para">
                                Sell digital and physical products with just a link.
                            </div>
                        </div>

                    </div>
                </div>

                <div className="top-splash-floating-content-1">
                    <img id="top-icon" src={coin} />
                    Donations
                </div>

                <div className="top-splash-floating-content-2">
                    <img id="top-icon" src={puzzle} />
                    Integration
                </div>

                <div className="top-splash-floating-content-3">
                    <img id="top-icon" src={pic} />
                    Daily Posts
                </div>

                <div className="top-splash-floating-content-4">
                    <img id="top-icon" src={ok} />
                    Interactions
                </div>

                <img className="top-splash-background-img" src="https://storage.ko-fi.com/cdn/landing_assets/kofi_heroimg.png" />
                <div className="bottom-about-la-te">
                    <Collapsible id="wat-test" label="What is La-Té?">

                        <p>

                            La-Té is the easiest way for you to start making an income directly from your fans. You can accept donations, create membership tiers, open an online shop, and take commissions all with 0-5% platform fees.
                        </p>
                    </Collapsible>
                    <hr />
                    <Collapsible label="Who should use La-Té?">
                        <p>
                            Artists, Streamers, Podcasters, Writers, Crafters, Photographers, Filmmakers, Cosplayers and all kinds of creators use La-Té.
                        </p>
                    </Collapsible>
                    <hr />
                    <Collapsible label="How do I get paid?">
                        <p>
                            We do not currently have a functioning payout system. But when we do, we take 0% fees from donations and we don't hold onto your money. It goes directly from your supporter to you. Simple!
                        </p>
                    </Collapsible>
                    <hr />
                    <Collapsible label="How much does it cost?">
                        <p>
                            Nothing! La-Té is completely free.
                        </p>
                    </Collapsible>
                    <hr />
                    <Collapsible label="Do I have to buy a latte?">
                        <p>
                            Not at all! We do love lattes, but it's just a friendly metaphor. So many creators have told us it's just much nicer to ask fans to "buy a latte" than just "donate" to support your work. You can also change "latte" to something else, or switch to a traditional donation mode.
                        </p>
                    </Collapsible>
                    <hr />
                    <Collapsible label=" How much can I earn?">
                        <p>
                            Start making an income on La-Té regardless of how big your audience is. Thousands of creators make their first money on La-Té and some have earned more than $100k in donations alone!
                        </p>
                    </Collapsible>
                    <hr />
                    <Collapsible label="I'm not sure if I should use La-Té or Patreon? What's the difference?">
                        <p>
                            Creators tell us La-Té  is a simpler, lower pressure alternative to Patreon and you can also do so much more with La-Té. Take donations, crowdfund, sell products and offer commission requests all from one place.
                        </p>
                    </Collapsible>
                    <hr />
                    <Collapsible label=" What currencies do you offer?">
                        <p>
                            Lattes.
                        </p>
                    </Collapsible>
                    <hr />
                    <Collapsible label=" How can I get in touch with you?">
                        <p>
                            GitHub LinkedIn
                        </p>
                    </Collapsible>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SplashPage
