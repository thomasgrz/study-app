from http.server import BaseHTTPRequestHandler, HTTPServer

PORT = 8080

class handler(BaseHTTPRequestHandler):
    #handle get requests
    def do_GET(self):
        self.send_response(200)
        self.send_header("content-type","text/html")
        self.end_headers()
        self.se.write("hello world!".encode())
        return

try:
    #create web server and define the handler
    #to manage incoming request
    server = HTTPServer(('',PORT), handler)
    print("started httpserver on port ", PORT)

    #wait forever for incoming http requests
    server.serve_forever()
except KeyboardInterrupt:
    print('^C received, shutting down web server')
    server.socket.close()