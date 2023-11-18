const main = async () => {
  const LearningContract = await ethers.getContractFactory("LearningContract");
  const learningContract = await LearningContract.deploy({
    value: href.ethers.utils.parseEther("0.1"),
  });

  await learningContract.deployed(); 
  console.info("Contract deployed to:", learningContract.address);
};
