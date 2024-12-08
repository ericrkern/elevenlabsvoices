import { ElevenLabsClient, play } from "elevenlabs";

const elevenlabs = new ElevenLabsClient({
    apiKey: "sk_9caa3d09d80b88b50001a7da829d98b3774a9c418b46886c", 
});

const text = process.argv[2];

const audio = await elevenlabs.generate({
    voice: "xC4J856jWFu58QWmjnxD",
    text,
    model_id: "eleven_multilingual_v2",
});

await play(audio);