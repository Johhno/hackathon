/**
 * 
 * @param {*} color A color from "blue"," yellow","green" 
 * @returns A Javascript object listing PNG assets URLs picked randomly of a specific color to be used on a character
 * Example: {"arm1": "arm1_yellow.png","arm2: ..."}
 * Each body part has its own function to be ready for any different variations, or adding new body parts easily
 */
export default function pickBodyPartsFromColor(color) {

    //Accepted colors
    let validColors = ["blue", "yellow", "green"];

    if (!validColors.includes(color)) {
        return new Error("Color not supported");
    }

    //let validBodyParts = ["arm", "body", "detail", "eye", "leg", "mouth", "nose", "snot"];

    //Create the whole body by adding parts separately, each being its own separated code 
    const assets = {};
    assets.arm1 = pickArm(color)
    assets.arm2 = pickArm(color)
    assets.body = pickBody(color)
    assets.detail = pickDetail(color)
    assets.leg1 = pickLeg(color)
    assets.leg2 = pickLeg(color)
    assets.mouth = pickMouth(color)
    assets.nose = pickNose(color)

    return assets;
}

// Function to pick a random item from an array
function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

//Picks 2 arms
//arm_color A to E, needs 2
function pickArm(color) {
    const armVariations = ["A", "B", "C", "D", "E"]
    const armVariation = getRandomItem(armVariations)
    const assetName = `arm_${color}${armVariation}.png`
    return assetName
}

function pickDetail(color) {
    let detailVariations = ["antenna_large", "antenna_small", "ear", "ear_round", "eye", "horn_large", "horn_small"]
    let detailVariation = getRandomItem(detailVariations)
    const assetName = `detail_${color}_${detailVariation}.png`
    return assetName
}

function pickBody(color) {
    const bodyVariations = ["A", "B", "C", "D", "E", "F"]
    const bodyVariation = getRandomItem(bodyVariations)
    const assetName = `body_${color}${bodyVariation}.png`
    return assetName
}

function pickLeg(color) {
    const legVariations = ["A", "B", "C", "D", "E"]
    const legVariation = getRandomItem(legVariations)
    const assetName = `leg_${color}${legVariation}.png`
    return assetName
}

function pickMouth(color) {
    const mouthVariations = ["A", "B", "C", "D", "E"]
    const mouthVariation = getRandomItem(mouthVariations)
    const assetName = `mouth_${color}${mouthVariation}.png`
    return assetName
}

function pickNose(color) {
    const noseVariations = ["A", "B", "C", "D", "E"]
    const noseVariation = getRandomItem(noseVariations)
    const assetName = `nose_${color}${noseVariation}.png`
    return assetName
}


