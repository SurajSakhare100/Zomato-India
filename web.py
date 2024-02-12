from flask import Flask, request, jsonify
import cv2
import numpy as np
import os

app = Flask(__name__)

@app.route('/index.html', methods=['POST'])
def capture_image():
    # Open the default camera (usually the webcam)
    cap = cv2.VideoCapture(0)
    
    # Capture a single frame
    ret, frame = cap.read()
    
    # Generate a unique filename for the image
    image_filename = 'captured_image.jpg'
    
    # Save the captured image to a file
    cv2.imwrite(image_filename, frame)
    
    # Release the camera
    cap.release()
    
    # Return the filename or path of the captured image
    return jsonify({'image_path': image_filename})

if __name__ == '__main__':
    app.run(debug=True)
