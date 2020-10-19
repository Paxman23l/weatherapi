from sense_hat import SenseHat, SenseStick
import threading
from queue import Queue
from time import sleep
import json
import multiprocessing
import requests
from dotenv import load_dotenv
import os
load_dotenv()

sense = SenseHat()

currentWeather = {}

class Weather():
    def get_inside_temp():
        return sense.get_temperature()
    
    def get_inside_humidity():
        return sense.get_humidity()

    def get_inside_pressure():
        return sense.get_pressure()

    def get_outside_weather():
        global currentWeather
        return currentWeather
    def poll_outside_weather():
        global currentWeather

        while True:
            res = requests.get('http://api.openweathermap.org/data/2.5/weather?q=missoula&units=metric&appid=' + os.environ['WEATHER_API_KEY'])
            if res.status_code == 200:
                currentWeather = res.json()
            sleep(600)

    def start_weather_polling():
        t1 = threading.Thread(target=Weather.poll_outside_weather)
        t1.start()