import React from 'react';

function SoftwareSelector(params) {
    return (
        <div className="input-group pt-3">
            <select className="custom-select" onChange={ (event) => params.onChange(event.target.value) }>
                <option value="0">Home Biz Scraper</option>
                <option value="1">Local Biz Lead Finder</option>
                <option value="2">Guru Fan Scraper</option>
                <option value="3">Friend Fetcher</option>
            </select>
        </div>
    );
}

export default SoftwareSelector;