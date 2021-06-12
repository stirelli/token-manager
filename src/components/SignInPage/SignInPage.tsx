import { Center, Page, Button } from 'decentraland-ui';
import React from 'react';
import { SignInProps } from './SignInPage.types';

const SignInPage = (props: SignInProps) => {
  return (
    <Page>
      <Center screen>
        <Button primary onClick={props.onConnect}>
          Connect
        </Button>
      </Center>
    </Page>
  );
};

export default React.memo(SignInPage);
