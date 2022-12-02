from http.server import BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
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
            res = self.clean_results(res, "")
            t.extend(res)
            needed_count -= len(res)

        self.send_response(200)
        self.send_header('Content-type','application/json')
        self.end_headers()
        self.wfile.write(json.dumps(t).encode())

    def clean_results(res, category):
        new_res = []
        for r in res:
            if r == '':
                continue
            elif len(r) < 30:
                continue
            elif '****' in r:
                continue
            elif 'a' in r:
                # skip if its in english
                continue

            if '</t>' in r:
                r.replace('</t>', '')
            elif r[-1] == '/':
                r = r[:-1]

            # if string starts with number, remove the number
            if r[:1].isdigit() and category == "poem":
                r = r[2:]

            print(r[-1])

            r.strip()
            r.strip('/')
            r.strip('\/')
            r.strip('\\')
            r.strip(' /')

            new_res.append(r)

        return new_res
