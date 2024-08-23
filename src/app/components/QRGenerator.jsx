'use client';
import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';

const QRGenerator = () => {
    const [inputValue, setInputValue] = useState('');
    const [size, setSize] = useState(256);
    const [fgColor, setFgColor] = useState('#000000');
    const [bgColor, setBgColor] = useState('#ffffff');
    const [errorCorrectionLevel, setErrorCorrectionLevel] = useState('M');
    const qrRef = useRef();

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleDownloadClick = () => {
        const canvas = qrRef.current.querySelector('canvas');
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'qrcode.png';
        link.click();
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Customizable QR Code Generator</h1>
            <input
                type="text"
                placeholder="Enter URL or Text"
                value={inputValue}
                onChange={handleInputChange}
                style={{ padding: '10px', width: '300px', fontSize: '16px', marginBottom: '20px' }}
            />

            <div style={{ marginBottom: '20px' }}>
                <label>
                    Size:
                    <input
                        type="number"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        style={{ marginLeft: '10px', width: '60px' }}
                    />
                </label>
                <label style={{ marginLeft: '20px' }}>
                    Foreground Color:
                    <input
                        type="color"
                        value={fgColor}
                        onChange={(e) => setFgColor(e.target.value)}
                        style={{ marginLeft: '10px' }}
                    />
                </label>
                <label style={{ marginLeft: '20px' }}>
                    Background Color:
                    <input
                        type="color"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        style={{ marginLeft: '10px' }}
                    />
                </label>
                <label style={{ marginLeft: '20px' }}>
                    Error Correction Level:
                    <select
                        value={errorCorrectionLevel}
                        onChange={(e) => setErrorCorrectionLevel(e.target.value)}
                        style={{ marginLeft: '10px' }}
                    >
                        <option value="L">L - Low (7%)</option>
                        <option value="M">M - Medium (15%)</option>
                        <option value="Q">Q - Quartile (25%)</option>
                        <option value="H">H - High (30%)</option>
                    </select>
                </label>
            </div>

            <div style={{ marginTop: '30px', display: 'inline-block' }} ref={qrRef}>
                {inputValue && (
                    <>
                        <QRCode
                            value={inputValue}
                            size={parseInt(size)}
                            fgColor={fgColor}
                            bgColor={bgColor}
                            level={errorCorrectionLevel}
                            includeMargin={true}
                        />
                        <p>Scan the QR Code above or <a href={inputValue} target="_blank" rel="noopener noreferrer">click here</a>.</p>
                        <button
                            onClick={handleDownloadClick}
                            style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
                        >
                            Download QR Code
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default QRGenerator;
