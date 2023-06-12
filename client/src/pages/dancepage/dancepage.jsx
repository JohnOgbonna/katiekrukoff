import React, { useState } from 'react';
import './dancepage.scss';
import dancepic from '../../assets/photos/dancepage/dancepic.png'
import dancepic1 from '../../assets/photos/dancepage/dancepic1.jpg'
import dancepic2 from '../../assets/photos/dancepage/dancepic2.jpg'
import dancepic3 from '../../assets/photos/dancepage/dancepic3.jpg'
import dancepic3Cutout from '../../assets/photos/dancepage/dancepic3Cutout.png'
import dancepic4 from '../../assets/photos/dancepage/dancepic4.jpg'
import dancepic4Cutout from '../../assets/photos/dancepage/dancepic4Cutout.png'
import dancepic5 from '../../assets/photos/dancepage/dancepic5.jpg'
import encorpsdance from '../../assets/photos/dancepage/encorpsdance.png'


function Dancepage() {
    const dancePics = [
        {
            src: dancepic1,
            caption: 'Dancing Angels from "The Gardner"',
        },
        {
            src: dancepic2,
            caption: 'Dancing Angels from "The Gardner"',
        },
        {
            src: dancepic3,
            caption: 'A personal dance portrait for Encorps Dance!',
        },
        {
            src: dancepic4,
            caption: 'A personal dance portrait for Encorps Dance!',
        },
    ]
    const danceStyles = [
        "Jazz",
        "Contemporary",
        "Hip-Hop",
        "Tap",
        "Ballet",
    ]
    const shows = [
        {
            name: 'The Gardner - Musical',
            description: 'Im proud to have been featured the Calgary Original premiere musical “The Garner” as a dancer. I danced in many of the original songs in the throughout the show. It was a blast!',
            picture: dancepic2,
        },
        {
            name: 'Encorps Dance Collective - Emphemeral',
            description: "I'm extremely grateful and proud to have been part of the Emphemeral show presented by Encorps Dance Collective! I was featured in several original dance pieces over the ourse of the show!",
            picture: encorpsdance,
            reverseLayout: true,
        },
    ]

    return (
        <div className='dancepage'>
            <section id='danceHeader'>
                <h2 className='dancepage__header'>DANCE!</h2>
                <div className='dancepage__header-line2'>
                    <p className='dancepage__header-description'>Since the age of 4, I've loved to dance! Currently, I am dancing at En Corps Dance Collective, which provides me with stress-free training and performance opportunities. Most recently, I've participated in the Ephemeral dance show and a local premier musical - The Gardner!</p>
                    <img className='dancepage__picture' src={dancepic3Cutout} />
                </div>
            </section>
            <section id='danceTypes'>
                <div className='dancepage__Types-line1'>
                    <p className='dancepage__Types-description'>I've danced just about every style you can think of over the years:</p>
                    <ul className='dancepage__Types-list'>
                        {
                            danceStyles.map(style => {
                                return (
                                    <li className='dancepage__Types-list--item' key = {style}>{style}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <img className='dancepage__picture' src={dancepic4Cutout} />

            </section>
            <section id='shows'>
                <h2 className='dancepage__header'>What's New</h2>
                <div className='shows'>
                    {
                        shows.map(show => {
                            return (
                                <div className={`shows__show${show.reverseLayout ? 'Reverse' : ''}`}>
                                    <div className='shows__text'>
                                        <h3 className='shows__header'>{show.name}</h3>
                                        <p className='shows__description'>{show.description}</p>
                                    </div>
                                    <img className={`shows__image${show.reverseLayout ? 'Reverse' : ''}`} src={show.picture} />
                                </div>
                            )
                        })
                    }
                </div>

            </section>
            <section id='photoCollection'>
                <h2 className='dancepage__header'>Here Are a Few Of My Recent Favourite Dance moments!</h2>
                <div className='photoCollection__grid'>
                    {
                        dancePics.map(pic => {
                            return (
                                <div className='picWrapper'>
                                    <div className='picBackground'><img className='pic__image' src={pic.src} id='pic__image' />
                                    </div>
                                    <label htmlFor='pic__image' className='pic__caption'>{pic.caption}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}
export default Dancepage