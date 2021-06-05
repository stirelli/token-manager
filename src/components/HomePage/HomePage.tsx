import { Button, Center, Footer, Navbar, Page } from 'decentraland-ui';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Page>
        <Center screen>
          <Button primary>Connect</Button>
        </Center>
      </Page>
      <Footer />
    </>
  );
};

export default HomePage;
