
import googletrans
import speech_recognition
import gtts
import playsound

# importing the videofielclip libarary and clipping the audio from the video
from moviepy.editor import VideoFileClip
clip = VideoFileClip("english_10sec_1.mp4")
clip.audio.write_audiofile("my_audio.wav")



recognizer = speech_recognition.Recognizer()
# source of audio( here it is an audio file)
with speech_recognition.AudioFile('my_audio.wav') as source:
    audio = recognizer.record(source)  # read the entire audio file
        
    # to which the language translate
    text = recognizer.recognize_google(audio, language="en")#from which language
    print(text) 


translator = googletrans.Translator()
langTO = input("Enter the language to translate to: ") # Take input from user
translation = translator.translate(text, dest=langTO)
print (translation.text)
converted_audio = gtts.gTTS(translation.text, lang=langTO)
converted_audio.save("hello.mp3")
playsound.playsound("hello.mp3")

#print (googletrans.LANGUAGES) #(langugaes that google can convert)
