import React from 'react';
import {Footer,FooterTab,Button,Text,Container} from 'native-base';

const BTC_Footer = () => {
    return (
        <Container>
        <Footer>
            <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
        </Container>
    );
};

export default BTC_Footer;