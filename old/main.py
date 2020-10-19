from flask import Flask, Response
from camera import camera

app = Flask(__name__)

@app.route('/')
def index():
    return "welcome to the home page"

def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
        b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/video_feed')
def video_feed():
    return Response(gen(Camera()), mimetype="multipart/x-mixed-replace; boundary=FRAME")

if __name__=='__main__':
    app.run(host='0.0.0.0', debug=True)