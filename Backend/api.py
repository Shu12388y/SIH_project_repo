from flask import Flask, request, jsonify
from moviepy.editor import VideoFileClip, AudioFileClip
import speech_recognition as sr
from gtts import gTTS
import playsound
import googletrans

app = Flask(__name__)

@app.route('/translate-video', methods=['POST'])
def translate_video():
    try:
        # Check if the request contains a video file
        if 'video' not in request.files:
            return jsonify({'error': 'No video file provided'}), 400

        # Get the video file from the request
        video_file = request.files['video']

        # Save the video file
        video_path = 'input_video.mp4'
        video_file.save(video_path)

        # Extract audio from the video
        clip = VideoFileClip(video_path)
        clip.audio.write_audiofile("input_audio.wav")

        # Recognize speech from the audio
        recognizer = sr.Recognizer()
        with sr.AudioFile('input_audio.wav') as source:
            audio = recognizer.record(source)

        # Translate the recognized text
        translator = googletrans.Translator()
        target_language = request.form.get('target_language', 'en')  # Default to English
        translation = translator.translate(recognizer.recognize_google(audio), dest=target_language)

        # Convert the translation to speech
        converted_audio = gTTS(translation.text, lang=target_language)
        converted_audio.save("output_audio.mp3")

        # Replace the original audio in the video with the translated audio
        translated_audio = AudioFileClip("output_audio.mp3")
        clip = clip.set_audio(translated_audio)

        # Save the final video with the translated audio
        output_video_path = 'output_video.mp4'
        clip.write_videofile(output_video_path)

        # Play the translated audio
        playsound.playsound("output_audio.mp3")

        return jsonify({'message': 'Video translation complete', 'output_video_path': output_video_path}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
