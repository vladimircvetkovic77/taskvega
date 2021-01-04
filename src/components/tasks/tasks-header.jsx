import React, { useState, useEffect } from 'react'
import PlusIcon from '../../assets/icons/icon-plus.svg';
import CalendarIcon from '../../assets/icons/icon-calendar.svg';
import VegaItLogo from '../../assets/images/vegait-logo.svg'
import Icon from '../common/icon'
import HeaderQuote from './tasks-header-quote'
import { quotes } from '../../data/quotes'
import { randomItem } from '../../services/arrService'

export default function TasksHeader(props) {
  const { onClick, date } = props;

  const [headerQuote, setHeaderQuote] = useState('');

  useEffect(() => {
    setHeaderQuote(randomItem(quotes));
  }, [])

  return (
    <div>
      <header className="header">
        <div className="wrap">
          <Icon
            spanClasses="btn-icon"
            iconClasses="icon icon-plus js-modal-init"
            src={PlusIcon}
            alt="Add New Item"
            onClick={onClick}
          />
          <HeaderQuote
            quote={headerQuote.quote}
            author={headerQuote.author}
          />
        </div>
        <div className="header-inner">
          <div className="wrap">
            <Icon
              spanClasses=""
              iconClasses="logo"
              src={VegaItLogo}
              alt="VegaIT"
            />
            <Icon
              spanClasses="date-wrap"
              iconClasses="icon"
              src={CalendarIcon}
              alt="Calendar"
            >
              <time>{date[0]}/{date[1]}/{date[2]}</time>
            </Icon>
          </div>
        </div>
      </header>
    </div>
  )
}
