import React from 'react';
import links from '../assets/data/links.json';

export const Footer = () => {
    const linksJSX = links.map((link) => {
        return (
            <li key = { link.id }>
                <a href = '#'>{ link.message }</a>
            </li>
        );
    });

    return (
        <section className = 'footer'>
            <ul>
              {linksJSX}
            </ul>
        </section>
    );
};
