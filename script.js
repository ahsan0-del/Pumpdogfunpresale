// CONFIGURATION
const PRESALE_END = new Date("2023-08-04T13:31:00"); // Presale end date
const PRESALE_ADDRESS = "0xDF21B5046cdD2EE9d7dDD2a6f8C01D5676997762"; // Your BSC wallet
const USDT_CONTRACT = "0x55d398326f99059fF775485246999027B3197955"; // USDT BSC
const TOKEN_RATE = 1000; // 1 USDT = 1000 PDF tokens

// State variables
let userAddress;
let paymentVerified = false;

// 1. Initialize Countdown
function updateCountdown() {
  const now = new Date();
  const diff = PRESALE_END - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent = "Presale Ended!";
    document.getElementById("claimButton").disabled = false;
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("countdown").textContent = 
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// 2. Wallet Connection
async function connectWallet() {
  if (window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      userAddress = accounts[0];
      
      document.getElementById("connectButton").textContent = 
        `Connected: ${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`;
      
      checkEligibility();
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  } else {
    alert("Please install MetaMask or Trust Wallet!");
  }
}

// 3. Check Token Claim Eligibility
async function checkEligibility() {
  // In a real contract, you'd check if user participated in presale
  // This is just a UI demo
  if (new Date() > PRESALE_END) {
    document.getElementById("paymentStatus").innerHTML = `
      <div class="payment-success">
        ✅ You can now claim your PDF tokens!
      </div>
    `;
  }
}

// 4. Token Claim Function
async function claimTokens() {
  // This would interact with your smart contract
  alert("Token claim function will be enabled after deploying the contract");
}

// Initialize
document.getElementById("connectButton").onclick = connectWallet;
document.getElementById("claimButton").onclick = claimTokens;
setInterval(updateCountdown, 1000);
updateCountdown();
