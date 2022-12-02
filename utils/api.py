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
