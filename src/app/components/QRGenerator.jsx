'use client';
import React, {useState} from 'react'
import QRCode from 'qrcode.react';
const QRGenerator = () => {
    const [inputValue, setInputValue]=useState('')
    const [qrValue, setQrValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    
      const handleGenerateClick = () => {
        setQrValue(inputValue);
      };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter URL or Text"
        value={inputValue}
        onChange={handleInputChange}
        style={{ padding: '10px', width: '300px', fontSize: '16px' }}
      />
      <button
        onClick={handleGenerateClick}
        style={{ padding: '10px 20px', marginLeft: '10px', fontSize: '16px' }}
      >
        Generate QR Code
      </button>

      {qrValue && (
        <div style={{ marginTop: '30px' }}>
          <QRCode value={qrValue} size={256} />
          <p>Scan the QR Code above or <a href={qrValue} target="_blank" rel="noopener noreferrer">click here</a>.</p>
        </div>
      )}
    </div>
  )
}

export default QRGenerator