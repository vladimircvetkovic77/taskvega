import React from 'react'

export default function TasksListItem({ largeLabelTitle, smallLabelTitle, text }) {
    return (
        <div className="item-row" >
            <div className="check-flag">
                <span className="small-text-label">{largeLabelTitle}</span>
                <span className="small-text-label hours">{smallLabelTitle}</span>
                <span className="check-flag-label">
                    {text}
                </span>
                <span className="hours-box"></span>
            </div>
        </div>
    )
}
