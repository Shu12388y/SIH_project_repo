from fastapi import FastAPI, File, UploadFile, HTTPException
from pymongo import MongoClient
import os
from pydantic import BaseModel

app = FastAPI()

# MongoDB setup
client = MongoClient("mongodb://localhost:27017/")  # Replace with your MongoDB URI
db = client["your_database_name"]
collection = db["videos"]

# Pydantic model for video metadata

class VideoMetadata(BaseModel):
    title: str
    description: str

# Function to check if a file has an allowed extension (MP4 in this case)
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() == 'mp4'

@app.post("/upload/")
async def upload_video(file: UploadFile, metadata: VideoMetadata):
    # Check if the uploaded file is in MP4 format
    if not allowed_file(file.filename):
        raise HTTPException(status_code=400, detail="Only MP4 files are allowed")

    # Save the video file to a temporary location or perform processing as needed
    # Example: You can save the file to a temporary location for further processing.

    # Insert metadata into MongoDB
    video_data = {
        "title": metadata.title,
        "description": metadata.description,
        "file_name": file.filename,  # You can save the file name for reference
    }
    collection.insert_one(video_data)

    return {"message": "Video uploaded successfully"}
