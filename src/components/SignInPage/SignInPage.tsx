import { Center, Page, Button } from 'decentraland-ui';
import React, { useEffect } from 'react';
import { SignInProps } from './SignInPage.types';
import './SignInPage.css';
import { useState } from 'react';

const SignInPage = (props: SignInProps) => {
  const [existMetamask, setExistMetamask] = useState(false);

  useEffect(() => {
    setExistMetamask(!!(window as any).ethereum);
  }, []);

  return (
    <Page>
      <Center screen>
        <Button primary onClick={props.onConnect} disabled={!existMetamask}>
          Connect
        </Button>
        {!existMetamask && (
          <p className="metamask-message">
            You must install the{' '}
            <a href="https://metamask.io" target="_blank" rel="noreferrer">
              Metamask
            </a>{' '}
            extension
          </p>
        )}
      </Center>
    </Page>
  );
};

export default React.memo(SignInPage);
