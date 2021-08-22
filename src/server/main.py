import socket
import threading
import serial
import argparse
import cv2
from flask import Flask, Response

parser = argparse.ArgumentParser()
parser.add_argument('--port', help='PORT ID', default=None)
parser.add_argument('--cam', help='CAM ID', default=0)
args = parser.parse_args()

debug_mode = False

if args.port:
    port = args.port
    ser = serial.Serial(baudrate=115200, port=port)
else:
    debug_mode = True
    ser = None

cap1 = cv2.VideoCapture(args.cam)
app = Flask(__name__)


def gen_frames(camera):
    while True:
        success, frame = camera.read()  # read the camera frame
        if not success:
            break
        else:
            ret, image = cv2.imencode('.jpg', frame)

            frame = image.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


@app.route('/video.jpg')
def video_feed0():
    return Response(gen_frames(cap1), mimetype='multipart/x-mixed-replace; boundary=frame')

PORT = 9780
SERVER = "0.0.0.0"
ADDR = SERVER, PORT

sck = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sck.bind(ADDR)

def handle_client(conn : socket.socket, addr):
    print(f"[INFO] New connection {addr[0]}:{addr[1]}")

    connected = True
    while connected:
        msg = conn.recv(64)
        if msg:
            print(f"[{addr[0]}:{addr[1]}] New message: {msg}")
            ser.write(msg)
    print(f"[{addr[0]}:{addr[1]}] Disconnecting")
    conn.close()


def start():
    sck.listen(0)
    print(f"[INFO] Server is listening on {ADDR[0]}:{ADDR[1]}")
    while True:
        conn, addr = sck.accept()
        thread = threading.Thread(target=handle_client, args=(conn, addr))
        thread.start()

print("[INFO] Starting server...")
threading.Thread(target=start).start()
app.run(host="0.0.0.0", port=9999)
