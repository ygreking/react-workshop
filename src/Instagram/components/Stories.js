import React from 'react';
import stories from '../assets/data/stories.json';

export const Stories = () => {
    const storiesJSX = stories.map((story) => {
        return (
            <div
                className = 'story'
                key = { story.id } >
                <div>
                    <img
                        alt = { story.message }
                        src = { story.src }
                    />
                </div>
                <span>{ story.message }</span>
            </div>
        );
    });

    return (
        <div className = 'stories'>
            {storiesJSX}
        </div>
    );
};
