import React, { useState, useEffect } from 'react';
import * as donationsAPI from '../../utilities/donations-api';
import DonationDetail from '../../components/DonationDetail/DonationDetail';
import DonationList from '../../components/DonationList/DonationList';
import './DonationRecordPage.css';

export default function DonationRecordPage({ user, setUser }) {
  
  const [donations, setDonations] = useState([]);
  const [activeDonation, setActiveDonation] = useState(null);

  
  useEffect(function () {
    async function getDonationRecords() {
    const donations = await donationsAPI.getDonationHistory();
    setDonations(donations);
    setActiveDonation(donations[0] || null);
    }
    getDonationRecords();
  }, []);

  function handlePaidDonation(donation) {
    setActiveDonation(donation);
  }

  return (
    <main className="DonationRecordPage">
      <DonationList
        donations={donations}
        activeDonation={activeDonation}
        handlePaidDonation={handlePaidDonation}
      />
						<DonationDetail/>
    </main>
  );
}