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





@app.get("/download/{video_id}")
async def download_video(video_id: str):
    # Retrieve video information from MongoDB
    video_info = collection.find_one({"_id": video_id})

    if not video_info:
        raise HTTPException(status_code=404, detail="Video not found")

    # Get the file name and location (you may have stored it differently)
    file_name = video_info["file_name"]

     # Set the file path based on your storage setup
    file_path = f"path_to_video_storage/{file_name}"  # Replace with your actual file path

    # Check if the file exists
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="Video file not found")

    # Define response headers for the video download
    headers = {
        "Content-Disposition": f"attachment; filename={file_name}"
    }

    # Open and read the video file
    with open(file_path, "rb") as video_file:
        video_data = video_file.read()

    # Return the video data as a response
    return Response(content=video_data, headers=headers, media_type="video/mp4")