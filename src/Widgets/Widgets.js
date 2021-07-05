import { FiberManualRecord, Info } from '@material-ui/icons';
import React from 'react';
import './Widgets.css';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <Info/>
            </div>
            {newsArticle("Rex is deploying!", "Top news - 8,772 readers")}
            {newsArticle("Apple pushes back on remote work", "4d ago - 107,772 readers")}
            {newsArticle("Latest recruiting perk: WFH forever", "5d ago - 53,470 readers")}
            {newsArticle("Moderna vaccination gets approval", "5d ago - 141,010 readers")}
            {newsArticle("Keep calm and job hunt", "5d ago - 1,027 readers")}
        </div>
    );
}

export default Widgets;
