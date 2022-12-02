from http.server import BaseHTTPRequestHandler
import arrand.arrandom

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        max_length = 4
        vocalized = False

        if self.request.args:
            args = self.request.args

            if "sentences_count" in args:
                max_length = int(args["sentences_count"])

            if "vocalized" in args:
                v = False
                if args["vocalized"].lower() == "true":
                    v = True
                vocalized = v
        
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
        # self.wfile.write(t.encode())

        return {
            "result": t
        }

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