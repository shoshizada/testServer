const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

//פונקציה לקידום תשעה תמונות
app.get("/api/photos", (req, res) => {
  const itemsPerPage = 9;
  const currentPage = parseInt(req.query.currentPage, 10) || 1;
  const photos = (req.query.photos || "[]");


  const startIndex = currentPage +1;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPhotos = photos.slice(startIndex, endIndex);
  console.log(paginatedPhotos);

  try {
    res.send({ hits: paginatedPhotos }); // אם אין שגיאות, שלח תשובה
  } catch (error) {
    console.error("Error:", error); // הדפס שגיאה ללוגים אם קיימת
    res.status(500).send("Internal Server Error"); // שלח קוד שגיאה 500 בתשובה
  }
});

module.exports = app;
