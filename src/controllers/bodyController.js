/**
 * 
 * @param {*} color A color from "blue"," yellow","green" 
 * @returns A Javascript object listing PNG bodyParts URLs picked randomly of a specific color to be used on a character
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
    const bodyParts = {};
    bodyParts.arm1 = pickArm(color)
    bodyParts.arm2 = pickArm(color)
    bodyParts.body = pickBody(color)
    bodyParts.detail = pickDetail(color)
    bodyParts.eye1 = pickEye(color)
    bodyParts.eye2 = pickEye(color)
    bodyParts.leg1 = pickLeg(color)
    bodyParts.leg2 = pickLeg(color)
    bodyParts.mouth = pickMouth(color)
    bodyParts.nose = pickNose(color)

    return bodyParts;
}

//Individual body parts, each with their own function to accommodate various variations (duh) and allow for easy new parts.
//Picks 1 arm
function pickArm(color) {
    const armVariations = ["A", "B", "C", "D", "E"]
    const armVariation = getRandomItem(armVariations)
    const assetName = `arm_${color}${armVariation}.png`
    return assetName
}

//Picks a detail
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
    const mouthVariations = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    const mouthVariation = getRandomItem(mouthVariations)
    const assetName = `mouth${mouthVariation}.png`
    return assetName
}

function pickNose(color) {
    const noseVariations = ["brown", "green", "red", "yellow"]
    const noseVariation = getRandomItem(noseVariations)
    const assetName = `nose_${noseVariation}.png`
    return assetName
}

function pickEye(color) {
    const eyeVariations = ["angry_blue", "angry_green", "angry_red", "blue", "closed_feminine", "closed_happy", "cute_dark", "cute_light", "dead", "human", "human_blue", "human_green", "human_red", "psycho_dark", "psycho_light", "red", "yellow"]
    const eyeVariation = getRandomItem(eyeVariations)
    const assetName = `eye_${eyeVariation}.png`
    return assetName
}

// Function to pick a random item from an array
function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}