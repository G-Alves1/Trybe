from socketserver import TCPServer, StreamRequestHandler

ADDRESS = "", 8085

class EchoHandler(StreamRequestHandler):
    def handle(self):
        self.wfile.write(b"Ola, client!\n")
        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode('ascii').strip())

if __name__ == "__main__":
    with TCPServer(ADDRESS, EchoHandler) as server:
        server.serve_forever()