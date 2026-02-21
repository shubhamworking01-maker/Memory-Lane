
import fs from "fs";

async function fetchImages() {
  const ids = [
    "1u1VcMDF1j1WMASnhbrPSBhHd0-va_-UE",
    "1g4q0itZ7hgYCWpGhrS8meNrKi06SbcuU",
    "1vGW2rCEE10wx2L4-QdwS33RQ035j34Pn",
    "1EiW2rAGycFHRiu645Yu2k2UmclzHH16H",
    "1F9cR9JlCX1PbcwJ4hW50hjPbshYhQq5v"
  ];

  for (const id of ids) {
    try {
      const url = `https://lh3.googleusercontent.com/d/${id}=w200`; // Small thumbnail
      const response = await fetch(url);
      const buffer = await response.arrayBuffer();
      const base64 = Buffer.from(buffer).toString("base64");
      console.log(`ID: ${id}`);
      console.log(`DATA: ${base64}`);
      console.log("---");
    } catch (e) {
      console.error(`Failed to fetch ${id}`);
    }
  }
}

fetchImages();
