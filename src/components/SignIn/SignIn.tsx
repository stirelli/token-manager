import { Button, Center, Page } from 'decentraland-ui';
import React from 'react';
import { SignInProps } from './SignIn.types';

const SignIn = (props: SignInProps) => {
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

export default React.memo(SignIn);
