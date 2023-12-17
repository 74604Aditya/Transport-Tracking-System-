import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './TrackingPage.css';

const TrackingPage = () => {
  const [trackNumber, setTrackNumber] = useState('');

  const handleTrack = () => {
    if (!trackNumber) {
      alert('Please enter a tracking number.');
    } else {
      console.log('Tracking: ', trackNumber);
    }
  };

  return (
    <section className='track'>
      <div className="container">
        <h2>Track Your Transport</h2>
        <div>
          <label htmlFor="trackNumber">Tracking Number</label>
          <input
            type="text"
            id="trackNumber"
            placeholder='Enter Tracking Number'
            value={trackNumber}
            onChange={(e) => setTrackNumber(e.target.value)}
          />
        </div>
        <br />
        <Button onClick={handleTrack} size="lg" variant="outline-info">
          Track
        </Button>{' '}
      </div>
    </section>
  );
};

export default TrackingPage;
