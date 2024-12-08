import { ElevenLabsClient, play } from "elevenlabs";

//Update the apiKey and Voice ID with your own here:
const apiKey = "sk_9caa3d09d80b88b50001a7da829d98b3774a9c418b46886c";
const voice = "xC4J856jWFu58QWmjnxD";

// Create a new ElevenLabsClient using the apiKey from above
const elevenlabs = new ElevenLabsClient({
    apiKey, 
});

// Set the text to convert to voice using the passed argument
const text = process.argv[2];

// generate the voice from the text using the desired paramenters
// additional parameters can be added below and are defined here:
// https://elevenlabs.io/docs/api-reference/text-to-speech
const audio = await elevenlabs.generate({
    voice,
    text,
    model_id: "eleven_multilingual_v2",
});

// Pause while the audio plays through ffplay.exe
await play(audio);