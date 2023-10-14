const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const pdfjs = require('pdfjs-dist');
const app = express();
const port = 5000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.use(bodyParser.json());

app.post('/submit-form', upload.single('file'), async (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  const filePath = file.path;
  const data = await extractTextFromPDF(filePath);

  res.status(200).json({ text: data });
});

async function extractTextFromPDF(filePath) {
  return new Promise((resolve, reject) => {
    const loadingTask = pdfjs.getDocument(filePath);

    loadingTask.promise
      .then((pdfDocument) => {
        const numPages = pdfDocument.numPages;
        const textContentPromises = [];

        for (let i = 1; i <= numPages; i++) {
          textContentPromises.push(
            pdfDocument.getPage(i).then((page) => {
              return page.getTextContent();
            })
          );
        }

        Promise.all(textContentPromises)
          .then((textContents) => {
            const textArr = textContents.map((textContent) => {
              return textContent.items
                .map((item) => item.str)
                .join(' ');
            });

            const text = textArr.join('\n');
            resolve(text);
          })
          .catch((error) => reject(error));
      })
      .catch((error) => reject(error));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
