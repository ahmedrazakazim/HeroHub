import os
hero_files = [
    'assets/css/batman.css',
    'assets/css/ironman.css',
    'assets/css/deadpool.css',
    'assets/css/spiderman.css',
    'assets/css/superman.css'
]
css_appends = "\n#headings { top: 350px !important; }\n#numbers { top: 200px !important; }\n@media screen and (max-width: 768px) { #headings { top: auto !important; position: relative !important; } #numbers { top: auto !important; position: relative !important; } }\n"

for f in hero_files:
    if os.path.exists(f):
        with open(f, 'a', encoding='utf-8') as file:
            file.write(css_appends)
print("Tops restored.")
