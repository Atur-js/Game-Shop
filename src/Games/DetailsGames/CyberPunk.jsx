import React from 'react';
import {Container} from 'react-bootstrap';
import image1 from "./image/cyberpunk.jpg";
import "./rating.css";

const CyberPunk = () => {
    return (
        <React.Fragment>
            <Container>
                <div class="row">
                    <div className="col-sm-6 mt-5">
                        <img alt="farcry"
                            style={
                                {
                                    height: "400px",
                                    margin: "0 auto",
                                    maxHeight: "400px",
                                    borderRadius: "10px"
                                }
                            }
                            src={image1}
                            class="d-block w-100"/>
                    </div>

                    <div className="col-sm-6 col-xl-6 mt-5 d-block w-100">
                        <div id="full-stars-example"
                            style={
                                {textAlign: "center"}
                        }>
                            <div class="rating-group">
                                <input class="rating__input rating__input--none" name="rating" id="rating-none" value="0" type="radio"/>
                                <label aria-label="No rating" class="rating__label" for="rating-none">
                                    <i class="rating__icon rating__icon--none fa fa-ban"></i>
                                </label>
                                <label aria-label="1 star" class="rating__label" for="rating-1">
                                    <i class="rating__icon rating__icon--star fa fa-star"></i>
                                </label>
                                <input class="rating__input" name="rating" id="rating-1" value="1" type="radio"/>
                                <label aria-label="2 stars" class="rating__label" for="rating-2">
                                    <i class="rating__icon rating__icon--star fa fa-star"></i>
                                </label>
                                <input class="rating__input" name="rating" id="rating-2" value="2" type="radio"/>
                                <label aria-label="3 stars" class="rating__label" for="rating-3">
                                    <i class="rating__icon rating__icon--star fa fa-star"></i>
                                </label>
                                <input class="rating__input" name="rating" id="rating-3" value="3" type="radio" checked/>
                                <label aria-label="4 stars" class="rating__label" for="rating-4">
                                    <i class="rating__icon rating__icon--star fa fa-star"></i>
                                </label>
                                <input class="rating__input" name="rating" id="rating-4" value="4" type="radio"/>
                                <label aria-label="5 stars" class="rating__label" for="rating-5">
                                    <i class="rating__icon rating__icon--star fa fa-star"></i>
                                </label>
                                <input class="rating__input" name="rating" id="rating-5" value="5" type="radio"/>
                            </div>
                            <div class="card text-center"
                                style={
                                    {
                                        backgroundColor: "#7243d8",
                                        color: "black",
                                        borderRadius: "10px",
                                        marginTop: "10%"
                                    }
                            }>
                                <div class="card-body">
                                    <h1 class="card-title">Cyberpunk</h1>
                                    <h4 class="card-text">Price: $20</h4>

                                </div>
                            </div>
                            <div className="d-block w-100"
                                style={
                                    {
                                        display: "inline-block",
                                        marginTop: "30px"
                                    }
                            }>
                                <button style={
                                    {
                                        backgroundColor: "#6633d4",
                                        borderRadius: "5px",
                                        maxWidth: "auto",
                                        border: "none",
                                        color: "white",
                                        marginRight: "3px"
                                    }
                                }>action</button>
                                <button style={
                                    {
                                        backgroundColor: "#6633d4",
                                        borderRadius: "5px",
                                        maxWidth: "auto",
                                        border: "none",
                                        color: "white",
                                        marginRight: "3px"
                                    }
                                }>RPG</button>
                                <button style={
                                    {
                                        backgroundColor: "#6633d4",
                                        borderRadius: "5px",
                                        maxWidth: "auto",
                                        border: "none",
                                        color: "white",
                                        marginRight: "3px"
                                    }
                                }>Single Player</button>
                                <button style={
                                    {
                                        backgroundColor: "#6633d4",
                                        borderRadius: "5px",
                                        maxWidth: "auto",
                                        border: "none",
                                        color: "white",
                                        marginRight: "3px"
                                    }
                                }>First Person</button>
                                <button style={
                                    {
                                        backgroundColor: "#6633d4",
                                        borderRadius: "5px",
                                        maxWidth: "auto",
                                        border: "none",
                                        color: "white",
                                        marginRight: "3px"
                                    }
                                }>FPS/TPS</button>


                            </div>
                        </div>

                    </div>
                </div>


                <div class="d-block w-100"
                    style={
                        {
                            width: "60%",
                            backgroundColor: "#4618AC",
                            color: "black",
                            borderRadius: "10px",
                            marginTop: "30px"
                        }
                }>
                    <div class="card-body">
                        <h2 class="card-title"
                            style={
                                {
                                    color: "yellow",
                                    display: "inline-block"
                                }
                        }>Product description</h2>
                        <p class="card-text"
                            style={
                                {color: "whitesmoke"}
                        }>
                            <div class="Wz6WhX XxYK78 L6cSBv">
                                <h5>Cyberpunk 2077</h5>
                                <div itemprop="description">
                                    <p>CD Projekt Red is a Polish developer that is widely recognized in the gaming industry as the leading studio in creating role-playing games, having produced such renowned titles as
                                        <strong>
                                            <a href="https://www.eneba.com/us/gog-the-witcher-3-wild-hunt-goty-gog-com-key-global">The Witcher 3</a>
                                        </strong>
                                        that crowned The Witcher trilogy with a roaring success. Enhancing the games with masterful and compelling storytelling, multifaceted characters that players identify with and relate to as they embark on journeys full of laughter, sorrow, and thrill alike. CD Projekt Red company is dedicated to their work and the goal they set for themselves, so the players are provided with an opportunity to become a part of a tale supported by the powerful variations of REDengine to ensure the smoothest gameplay available at the time of release date. Considering whether to buy Cyberpunk? Reading our review on the title might help you decide!</p>
                                    <p>Cyberpunk 2077 is the most ambitious project of CD Projekt Red so far. It has been in the making for many years and got delayed five times by now to present the players with the best possible version of the game not only to meet the expectations set by the gaming community but to exceed them as well. The game in the discussion, unlike the previously released title of the same studio, focuses not on a medieval fantasy setting – this time we are entering the future imagined in a dystopian light, where body modification has given the freedom that has come to put the minds of people in invisible cages too soon.</p>
                                    <h5>What kind of game is Cyberpunk 2077?</h5>
                                    <p>Let's discuss what Cyberpunk 2077 CD key has in store. In terms of genre, Cyberpunk 2077 PC offers a single-player action role-playing game experienced through the perspective of first-person, but the cinematic cutscenes and certain situations are seen through the third-person point of view. You will get quite a bit of FPS experience in combat where your weapon will be the companion you can rely on the most. You will be able to pick from a wide assortment of futuristic weapons that heavily contribute to the sci-fi element largely present in the game.</p>
                                    <p>Cyberpunk is still a relatively new sub-genre so defining the precise criteria for it is still a challenging task, but it is a fact that cyberpunk involves body modifications using such technological advances, for instance, as a prototype implant, and of course, not forgetting the surveilling mega-corporations - Cyberpunk 2077 GOG key offers all of these! The people around you are cyborgs – human beings whose physical capabilities have been surpassed by implementing mechanical elements into the flesh. Enter the world of sci-fi where humans made solely of the flesh is a thing of the primitive past!</p>
                                    <p>However, the Cyberpunk 2077 PC key brings a more RPG-oriented experience rather than an FPS one, so the main element of the title is a story and your impact on it. Yes, you are the most important figure in GoG's Cyberpunk 2077 as your decisions and actions will have far-reaching consequences each time, so act accordingly! You will assume the role of a character named V, but that is the only predetermined aspect of your character – the game allows the players to modify their character in all aspects possible, from the colour of the eyes to gender, so it is all about your preferences!</p>
                                    <p>Tread carefully or progress in the game with a bang – whichever style you choose will bring you to only one of the possible endings. Although The Witcher 3 has given players much freedom in terms of choice and exploration, the Cyberpunk 2077 release surpasses the title by allowing the players not only to customize their playable character but also in providing many more possible endings. Gamers are offered a narrative-driven experience far more complex and intricate, with a much higher replayability range – you can replay the title many times and each time the gameplay is likely to be unique, and the ending might very feasibly be different - this might affect user reviews as well.</p>
                                    <h5>The dystopian vision of our future</h5>
                                    <p>Ability to replay the game so many times is amazing, but what is the story of Cyberpunk 2077 (PC) that everyone is talking about? So far not much has been revealed by CD Projekt Red, but let’s piece together what the story is about and why the future of the Cyberpunk universe is considered dystopian. We already live in an age of secret data harvesting and violation of virtual privacy in the cybernetic space, and we already acknowledge the issue as that of a criminal nature.</p>
                                    <p>Buy Cyberpunk 2077 GOG key, enter the world and face such issues on a grand scale - the Internet is managed by gigantic corporations and the army, and to an extent, everyday aspects of life. Humans, free to modify their bodies with the help of advanced cyberware technologies if they afford it, have grown obsessed with body modifications. Cyberpunk 2077 PC key offers us a way to explore the world of low life and mind-blowing technologies, creating an absurd contrast that is best reflected in the street life of Night City – the game world in which the whole plot is taking place.</p>
                                    <p>The protagonist of the story, that is you under the name of V, is not the hero who set out to save the Night City from Totalitarian surveillance of the leading cybernetics companies – V is looking for an immortality-granting chip. The feverish pursuit of the mysterious implant symbolizes the extent of collective human lust to achieve more, casting humanity aside. Body augmentation has eaten its way into the minds of most humans in the world of Cyberpunk 2077 (PC) that’s ruled by the plutocratic mega-corporations and democracy is just a farce.</p>
                                    <p>“We have a city to burn” – says Johnny Silverhand, who is played by the famous Keanu Reeves (it was a grandiose reveal, no doubt). These words are no words of the antagonist, these are the words indicating that the whole place is in danger and needs a change, and the change is about to be brought by you and your in-game friends! Are you ready to tackle the challenge that may reveal to be on a much grander scale than first anticipated?</p>
                                    <h5>Is Cyberpunk 2077 an open-world game?</h5>
                                    <p>Buy Cyberpunk 2077 GOG PC key and enter the open world of Night City, breathing life in every corner, in every street. Night City is a futuristic city located in the Free State of North California, filled with shiny lights alongside even shinier advertisements playing all over the place – it is an overwhelming place, leaving you breathless each time you sign in back into the game. The neon wonder place is smaller than the open world of The Witcher 3 – the previous work of CD Projekt Red – but it is denser and has plenty of spaces that are up for exploration to your heart’s content. The surroundings are interactive and the world has more layers than just one as you can traverse the underground sections or enter the high skyscrapers, which, of course, you can explore just as much as any other spot in the vigorous Night City. Don’t worry though, you have a car in your possession which you can summon from any part of the city by pressing the d-pad. Handy, no?</p>
                                    <p>One of the magical elements of world-building in the game is the characters’ performance in this open world. Life is taking place in the streets on its own, without you being the center of it, providing an authentic in-detail view, closely resembling real-life. NPCs are chatting, people are busy, rushing around, and paying no mind to you, however, you can interact with the characters in the game that are not part of the quests – interrupt conversations on the street, talk to someone, attack, and whatnot.</p>
                                    <p>Besides, the Night City offers six districts, each area distinct in its characteristics, allowing the player to easily recognize the area they are present in. The city lights reflecting on the broken mirror of scattered rainwater on the concrete inspire a majestic feeling of being physically present in the game world. The unmatched REDengine 4 gaming engine offers an opportunity for gamers to witness the visually stunning open world where you are free to traverse as much as you like and become part of the boiling everyday life in the futuristic universe unlocked by the Cyberpunk 2077 GoG key!</p>
                                    <h5>Combat mechanics</h5>
                                    <p>When it comes to the most important aspects of action games that concern the gaming community is the combat mechanics as well as the style of the combat. Purchase the Cyberpunk 2077 GOG CD key and try out the FPS combat that requires skill and precision. The situations where fights ensue call for action instantly as the combat is fast-paced and spares no moment for regaining your breath. The combat involves three tactics that you are bound to use if you want to tackle the mission assignments successfully - shooting, stealth, and interestingly enough, hacking. Since the in-game world is interactive, you can use your surroundings to your advantage - crouch and bend to hide behind furniture while bullets are bombarding you, and just the same way you can use the environment for stealth purposes.</p>
                                    <p>Since we are talking about cyberpunk, if your character has the required implants in their body, you will be able to scan the area within the range of a few meters to locate enemies or certain objects, regardless of whether they are in front of you or behind you. Of course, if you want to throw your fists into action - Cyberpunk 2077 PC has you covered. The melee combat that is involving fists works similarly as in The Witcher 3, where a certain key triggers the blow, and the other key blocks the blow or gets V to dodge.</p>
                                    <p>The Cyberpunk 2077 PC key offers the players to test a modern combat playstyle that's a mixture of RPG and FPS experience. Fists and shooting, stealth, and hacking provide the necessary variety for a game so huge that you may replay several times and dedicate hundreds of for every detail. Let's talk about something that arouses curiosity - hacking. The game seems to have two types of processes: hacking and quick hacking. The first in line is a regular hacking where you'll be required to break into a private system, but the quick hacking is the same information extraction action, just done through distance.</p>
                                    <p>Since the game belongs to the cyberpunk sub-genre, it is meant to involve futuristic means of combating, namely hacking, and having even two variations of hacking seems to be a promising addition to combat mechanics, not enough of a reason to buy Cyberpunk 2077 key yet? In fact, having hacking integrated into the combat system regards the dystopian sci-fi setting where most of the battles take form in the virtual world rather than the physical one. The first-person perspective and high-tech visualization together provide an immersive gameplay experience in regards to combat, which varies from intense and stealthy hacking to fast-paced confrontation with enemies using either fists or innovative weaponry. Purchase Cyberpunk 2077 gog.com CD key to try out the next generation single-player combat system that requires determination and skills!</p>
                                    <h5>Cyberpunk 2077 technicalities</h5>
                                    <p>Are you ready to embark on an adventure of a lifetime with Keanu Reeves and walk through the masterfully crafted world of Cyberpunk 2077? Then buy the CD key of a game that earned magnificent rankings and received exceedingly positive feedback from those that already got the chance to test the gameplay of the title in the making! For those who desire to play Cyberpunk, but are not sure whether their computer is capable enough to support the gaming products, there are system requirements provided below. The Cyberpunk 2077 game is supported on these gaming platforms:</p>
                                    <ul>
                                        <li>•PlayStation 4;</li>
                                        <li>•Xbox One;</li>
                                        <li>•PlayStation 5;</li>
                                        <li>•Xbox Series X;</li>
                                        <li>•Google Stadia;</li>
                                        <li>•PC.</li>
                                    </ul>
                                    <p>That's right, your cyber adventures will be supported on next-gen consoles for the best possible gameplay experience - all these serve as a key to entertainment after all! Unfortunately, it is unlikely that Nintendo Switch portable consoles could support the immensity of Cyberpunk 2077, and it's unlikely that we'll see the game's key release on this console any time soon. The game will also be backwards compatible on both consoles and that means that your PS4 or Xbox One game will work on their respective successors from the launch day! Such platform compatibility ensures that you will not need to buy the products of CP 2077 twice if you decide to switch to next-generation gaming consoles.</p>
                                    <p>Speaking of country restrictions, it seems that the game will only be censored in Japan, so the product is available to for regions of United States, United Kingdom, Europe, Asia and so forth - you can check out the list of supported countries at the top of the page along with the rest necessary information regarding the product purchase. The gog.com key is activated on the GOG platform - the activation process is provided here. Compare prices and see for yourself that we have some of the best deals/offers for video games such as the fans' long-awaited Cyberpunk 2077 PC key, so buy the title at a cheaper price, enter the virtually mesmerizing environments and release the overwhelming magic of the cyberpunk universe accompanied by exquisite story-telling that you are in control of - after all, there is a city you need to burn!</p>
                                </div>
                            </div>
                        </p>

                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
}

export default CyberPunk;
