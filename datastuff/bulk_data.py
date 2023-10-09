import os
import csv

folder_path = 'texts/'
csv_file_path = 'bulk.csv'

with open(csv_file_path, 'w', newline='') as csv_file:
    csv_writer = csv.writer(csv_file)

    for filename in os.listdir(folder_path):
        if filename.endswith('.txt'):
            file_path = os.path.join(folder_path, filename)
            with open(file_path, 'r') as text_file:
                content = text_file.read()
                csv_writer.writerow([content])

csv_file.close()