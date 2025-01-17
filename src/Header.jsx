import bankLogo from './assets/investment-calculator-logo.png';

export default function Header() {

    console.log(bankLogo);
    return (
        <header id="header"> 
                <img src={bankLogo}/>
                <h1>Ray's Investment Calculator</h1>
        </header>
    );
}