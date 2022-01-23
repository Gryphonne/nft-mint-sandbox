const { expect } = require("chai");
const { recoverAddress } = require("ethers/lib/utils");
const { ethers } = require("hardhat");

describe("PrimeNFT", function () {
  it("Should mint new token", async function () {
    const PrimeNFT = await ethers.getContractFactory("PrimeNFT");
    const primenft = await PrimeNFT.deploy();
    await primenft.deployed();

    const recipient = '0x2546bcd3c84621e976d8185a91a922ae77ecec30';
    const metadataURI = 'cid/test.png';

    let balance = await primenft.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newlyMintedToken = await primenft.payToMint(recipient, metadataURI, { value: ethers.utils.parseEther('0.05')});

    await newlyMintedToken.wait();

    balance = await primenft.balanceOf(recipient);
    expect(balance).to.equal(1);

    expect(await primenft.isContentOwned(metadataURI)).to.equal(true);
  });
});

