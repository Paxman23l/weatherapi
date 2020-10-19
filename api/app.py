#!/usr/bin/env python
from importlib import import_module
import os
from flask import Flask, render_template, Response
from dotenv import load_dotenv
from weather import Weather
import json
import threading
load_dotenv()


# import camera driver
if os.environ.get('CAMERA'):
    Camera = import_module('camera_' + os.environ['CAMERA']).Camera
else:
    from camera import Camera

# Raspberry Pi camera module (requires picamera package)
# from camera_pi import Camera

app = Flask(__name__)


@app.route('/')
def index():
    """Video streaming home page."""
    return render_template('index.html')


def gen(camera):
    """Video streaming generator function."""
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/weather/inside')
def inside_temperature():    
    resultJson = {
        'temperature': Weather.get_inside_temp(),
        'humidity': Weather.get_inside_humidity(),
        'pressure': Weather.get_inside_pressure(),
        }
    return json.dumps(resultJson)
@app.route('/weather/outside')
def outside_temperature():    
    resultJson = Weather.get_outside_weather()
    return json.dumps(resultJson)

@app.route('/video_feed')
def video_feed():
    """Video streaming route. Put this in the src attribute of an img tag."""
    return Response(gen(Camera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

@app.after_request
def apply_caching(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response

if __name__ == '__main__':
    t1 = threading.Thread(target=Weather.start_weather_polling)
    t1.start()
    app.run(host='0.0.0.0', threaded=True)
