import React from 'react';
import {PROFESSIONAL_FONTS, FONT_SIZES} from '../..data/defaults';
import './Topbar.css';

export default function Topbar({
    selectedFont,
    selectedSize,
    onFontChange,
    onSizeChange,
    onReset,
    onDownload,
}){
    return(
        <header className="topbar no-print">
            <div className="brand">
                <span className="brand-mark"> </span>
                <h1>CV BUILDER</h1>
            </div>
            <div className='typography-controls'>
                <div className='control-group'>
                    <label htmlFor="font-select">Font</label>
                    <select
                        id='font-select'
                        value={selectedFont}
                        onChange={(e) => onFontChange(e.target.value)}
                    >
                        {PROFESSIONAL_FONTS.map((font) => (
                            <option key={font.name} value={font.value}>
                                {font.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='control-group'>
                    <label htmlFor="size-selected">Size</label>
                    <select
                        id='size-select'
                        value={selectedSize}
                        onChange={(e) => onSizeChange(e.target.value)}
                    >
                        {FONT_SIZES.map((size) => (
                            <option key ={size.value} value={size.value}>
                                {size.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='topbar-actions'>
                <button type="button" className='btn-ghost' onClick={onReset}>
                    Reset
                </button>
                <button type="button" className='btn-primary' onClick={onDownload}>
                    Download PDF
                </button>
            </div>
        </header>
    );
}