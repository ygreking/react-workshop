import React from 'react';
import avatar from '../assets/images/nasa.jpg';
import images from '../assets/data/images.json';
import { Stories } from './Stories';

export const Content = () => {
    const imagesJSX = images.map((image) => {
        return (
            <img
                key = { image.id }
                src = { image.src }
            />
        );
    });

    return (
        <section className = 'content'>
            <div className = 'profile'>
                <img
                    className = 'avatar'
                    src = { avatar }
                />
                <div className = 'main'>
                    <span className = 'nickname'>nasa</span>
                    <div className = 'stats'>
                        <div>
                            <span>2.614</span>&nbsp;posts
                        </div>
                        <div>
                            <span>42.4m</span>&nbsp;followers
                        </div>
                        <div>
                            <span>84</span>&nbsp;following
                        </div>
                    </div>
                    <span className = 'name'>NASA</span>
                </div>
                <Stories />
            </div>
            <div className = 'images'>{imagesJSX}</div>
        </section>
    );
};
