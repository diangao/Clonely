import { Alert } from 'react-native';

// Function to convert speech to text using the Flask backend server
export const speechToText = async (audioUri: string) => {
    try {
        const response = await fetch('http://10.0.0.161:3000/api/speech-to-text', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ audio_url: audioUri }),
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.error || 'An error occurred');
        }

        const result = await response.json();
        return result;

    } catch (error: any) {
        if (error instanceof SyntaxError) {
            console.error('Response was not JSON:', error);
            Alert.alert('Error', 'Received non-JSON response from server');
        } else {
            console.error('Error in speechToText:', error);
            Alert.alert('Error', error.message || 'An error occurred');
        }
    }
};

// Function to get a completion from ChatGPT using the transcribed text
export const getCompletion = async (prompt: string) => {
    try {
        const response = await fetch('http://10.0.0.161:3000/api/chat-completion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.error || 'An error occurred');
        }

        const result = await response.json();
        return result;

    } catch (error: any) {
        if (error instanceof SyntaxError) {
            console.error('Response was not JSON:', error);
            Alert.alert('Error', 'Received non-JSON response from server');
        } else {
            console.error('Error in getCompletion:', error);
            Alert.alert('Error', error.message || 'An error occurred');
        }
    }
};
