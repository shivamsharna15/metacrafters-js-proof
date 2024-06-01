// create a variable to hold your NFT's
let collectionofNft = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, description, image) {
  let nft = {
    name: name,
    description: description,
    image: image
  };
  collectionofNft.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNft () {
  for (let i = 0; i < collectionofNft.length; i++) {
    console.log("Name: " + collectionofNft[i].name);
    console.log("Description: " + collectionofNft[i].description);
    console.log("Image: " + collectionofNft[i].image);
    
  }
}

// print the total number of NFTs we have minted to the console
function TotalSupply() {
  console.log("Total NFTs: " + collectionofNft.length);
}

// call your functions below this line
mintNFT("Exosama", "chain : ethereum", "imageX.JPEGs");
mintNFT("The hall pass", "chain:  bnb chain", "imageY.JPEGs");
mintNFT("Bomber hero", "chain: polygon", "imageZ.JPEGs");

listNft();

TotalSupply();
