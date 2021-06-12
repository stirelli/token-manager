import React, { useState } from 'react';
import { Card, Page, Center, Mana, WalletIcon, Field, Button } from 'decentraland-ui';
import { HomePageProps } from './HomePage.types';
import './HomePage.css';

const HomePage = ({ balance, onTransfer }: HomePageProps) => {
  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState('');

  const handleSetAmount = (e: React.FormEvent<HTMLInputElement>) => {
    const intValue = parseInt(e.currentTarget.value, 10);
    if (e.currentTarget.value.length === 0) {
      setAmount(0);
    } else if (!isNaN(intValue)) {
      setAmount(intValue);
    }
  };

  const handleSetTo = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const isValid = /^[0-9a-fA-Fx]{0,42}$/.test(value);
    if (isValid) {
      setTo(value);
    }
  };

  return (
    <Page>
      <Center screen>
        <Card className="card">
          <WalletIcon />
          <div className="title">DUMMY TOKEN</div>
          <div className="amount">
            <Mana size="large">{balance}</Mana>
          </div>
        </Card>
        <Field label="Amount" placeholder="1,000" type="number" value={amount} onChange={handleSetAmount} />
        <Field label="Address (Recipient)" type="address" value={to} onChange={handleSetTo} />
        <Button primary disabled={amount <= 0 || to === ''} onClick={() => onTransfer(to, amount)}>
          Transfer
        </Button>
      </Center>
    </Page>
  );
};

export default React.memo(HomePage);
