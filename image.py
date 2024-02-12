import cv2

# Open the default camera (usually the webcam)
cap = cv2.VideoCapture(0)

# Check if the camera opened successfully
if not cap.isOpened():
    print("Error: Unable to open camera.")
    exit()

# Capture a single frame
ret, frame = cap.read()

# Check if the frame was captured successfully
if ret:
    # Display the captured image
    cv2.imshow('Captured Image', frame)

    # Save the captured image to a file
    cv2.imwrite('captured_image.jpg', frame)
    print("Image saved as captured_image.jpg")

# Release the camera
cap.release()
cv2.destroyAllWindows()

