# by Adam Blvck

# Produce `777.js`, such that I can do the following:

# ```javascript
# import _777 from './777/'

# const render_markdown = () => {
# 	const air_explanation = _777.air;
# 	return <MarkdownComponent md={air_explanation} />
# }

# ```

import os
import json

def scan_directory(directory, collection):
	""" Scan provided directory for markdown files, and read them into collection
		using the filename (without extension) as key

		Returns a dictionary
	"""
	for file in os.listdir(directory):
		filename = os.fsdecode(file)
		if filename.endswith(".md"):
			path = os.path.join(directory, filename)

			with open(path) as f:

				# read markdown
				md = f.read()

				# read name of file without extension
				key = filename.split('.')[0]

				# assign markdown to object
				collection[key] = md
			continue
		else:
			continue

# this object will collect all markdown files in this repository
markdowns = {}
markdowns['app'] = {}
markdowns['app']['changelog'] = {}

# read directories
scan_directory('./777/elements', markdowns)
scan_directory('./777/planets', markdowns)
scan_directory('./777/app', markdowns['app']) # add
scan_directory('./777/app/changelog', markdowns['app']['changelog']) # add

# dump markdowns to javascript
js_dump = json.dumps(markdowns, indent=4)

# write importable javascript file
filehandle = open('777.js', 'w')
filehandle.write(f'export default {js_dump}')
filehandle.close()
