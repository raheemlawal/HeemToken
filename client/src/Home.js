import { React } from 'react';
import './Home.css';
import {Container, Button, Image, Row, Col} from 'react-bootstrap';
import SocialMediaBar from './SocialMediaBar';
import heem from './babyheem.png';
import Chart from "react-google-charts";
import { GiReceiveMoney } from 'react-icons/gi';

function Home() {

    return (
      <>
        <Container id = "home">
            <Row id = "main-row">
                <Col id = 'left-col' xs = {12} sm = {12} md = {6} lg = {6}>
                        <h1 className = "big-title">HEEM TOKEN</h1>
                        <p className = "pmain">A decentralized coin focused on revolutionizing the crypto market!</p>
                        <Button href = "#how-to-buy" id = "howtobuy-button">HOW TO BUY</Button>
                        <Button href = "#tokenomics" id = "tokenomics-button">TOKENOMICS</Button>
                        <Button href = "https://bscscan.com/token/0x361725d9041f6044c7ec16adfcb72237b4c047af" id = 'viewprice-button'>COIN OVERVIEW</Button>
                        <Button href = "#disclosure" id = 'disclosure-button'>DISCLOSURE</Button>
                </Col>
                <Col id = 'right-col' xs = {12} sm = {12} md = {6} lg = {6} >
                        <Image src= {heem} responsive = "true"/>
                </Col>
            </Row>
            <Row id = "social-row">
                <SocialMediaBar />
                <h3 className = "contract-addy">Token Address: 0x361725d9041f6044c7ec16adfcb72237b4c047af</h3>
            </Row>
        </Container>
        <Container id = "how-to-buy">
          <Row id = "main-row2">
            <h1 className = "howtobuy-title">HOW TO BUY:</h1>
            <h3 id = 'head1'>Step 1: Purchase BNB</h3>
            <h5>You can purchase BNB on Binance, Crypto.com or another exchange.</h5>
            <h3 id = 'head2'>Step 2: Send BNB to Trust Wallet</h3>
            <h5>Create a Trust wallet (can be downloaded on app store). Then send your BNB from your exchange of choice to your Trust wallet.</h5>
            <h3 id = 'head3'>Step 3: Swap BNB for Smart Chain BNB</h3>
            <h5>This can easily be done when viewing the BNB balance in your Trust wallet.</h5>
            <h3 id = 'head4'>Step 4: Swap $BNB For $HEEM on PancakeSwap</h3>
            <h5>Connect your Trust wallet to PancakeSwap, then paste our contract address into the token field to swap $BNB for $HEEM. Always confirm the official contract address: 0x361725d9041f6044c7ec16adfcb72237b4c047af</h5>
          </Row>
        </Container>
        <Container id = "tokenomics">
          <Row id = "main-row3">
            <h1 className = "tokenomics-title">TOKENOMICS:</h1>
            <h2 className = "supply-title">Starting Token Supply: 1,000,000,000 Coins</h2>
            <Col id = 'left-col-token' xs = {12} sm = {12} md = {6} lg = {6}>
                <Chart
                  responsive
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['Owner', 'Percentage of Coins'],
                    ['Initial coins allocated to creator', 1000000000],
                    ['Initial coins allocated to liquidity pool', 9000000000],
                  ]}
                  options={{ backgroundColor: 'yellow', chartArea: { left: 0, top: 0, right: 0, bottom: 0 }, textStyle: {fontSize: 25} }}
                  rootProps={{ 'data-testid': '1' }}
                  />
            </Col>
            <Col id = 'right-col-token' xs = {12} sm = {12} md = {6} lg = {6}>
                <h4 className = "func-title">MINT and BURN functionality in smart contract to enable price stabalization!</h4>
                <GiReceiveMoney size={80}/>   
            </Col>
          </Row>
        </Container>
        <Container id = "disclosure">
          <Col id = "disclosure-col">
            <Row id = "main-row4">
              <h1 className = "disclosure-title">Disclosure:</h1>
              <h3>By purchasing HEEM Token, you agree that you are not purchasing a security or investment contract 
                and you agree to hold the team harmless and not liable for any losses or taxes you may incur. Although 
                HEEM is a community driven DeFi Ecosystem and not a registered digital currency, always make sure that 
                you are in compliance with local laws and regulations before you make any purchase. Cryptocurrencies are 
                not legal tender and are not investments.</h3>
            </Row>
          </Col>
        </Container>
        </>
  );
}

export default Home;