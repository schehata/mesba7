from http.server import BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
from utils.api import clean_results
import json
import arrand.arrandom

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        max_length = 4


        query = urlparse(self.path).query
        parsed_query = parse_qs(query)

        if "sentences_count" in parsed_query:
            max_length = int(parsed_query["sentences_count"])

        t = []
        needed_count = max_length
        while needed_count > 0:
            res = arrand.arrandom.rand_sentences(needed_count)
            res = clean_results(res, "")
            t.extend(res)
            needed_count -= len(res)

        self.send_response(200)
        self.send_header('Content-type','application/json')
        self.end_headers()
        self.wfile.write(json.dumps(t).encode())
