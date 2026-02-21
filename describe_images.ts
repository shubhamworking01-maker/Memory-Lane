
import { GoogleGenAI } from "@google/genai";
import fs from "fs";

async function describeImages() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const ids = [
    "1u1VcMDF1j1WMASnhbrPSBhHd0-va_-UE",
    "1g4q0itZ7hgYCWpGhrS8meNrKi06SbcuU",
    "1vGW2rCEE10wx2L4-QdwS33RQ035j34Pn",
    "1EiW2rAGycFHRiu645Yu2k2UmclzHH16H",
    "1F9cR9JlCX1PbcwJ4hW50hjPbshYhQq5v",
    "13ma4f0KCaBB0dMBY1zeSc3y2axJhB21p",
    "1HDtAqeiPuKhYZ6ZHVn3NywDYsFdQi4DI",
    "13QPkfEvnDcpxPBqZP1t-23pZ2cOtL2QW",
    "1snotUMAbo81g49eFl99D_ihPyuChi9-a",
    "1DNB-pmWkm0hwS7pXlU-oru9uSIiWvWx_",
    "1CPLtaq5LqXYUMoB1EAYLMPEUNlGUiWwp",
    "1ZmJ53uRhN3X8Ovxmp5P7OR5qM6iQHK4s",
    "1D0WBroDAqNaRpxFaCb1suTIGcR8uyEw9",
    "1p-9W5QA2hIu8-E_nMkqPxuVt6L-bB_H0",
    "1XAq7jugms5fYcbX0LyslNdan-XoGrQ31",
    "14u-GXNm8ZTwylLeV1DTkJrCNfzFAapIa",
    "100tzdsARXpLUx1iVYKfIAMXqVx-b13Of",
    "1bbFwU7uOYxPC6EADhlxDWvkF-CUBDq2w",
    "1_0_j14E9M5w9aSpuxE26zeN0uLunPLXU",
    "1N_MAoDatCKStrYVgRwHZPhCQDtxBtRN7",
    "1AUqsDiuRsijWPphui6UIRUp8nNYMeFac",
    "1LGBR8n0gzLnm0gWk-vl6JCxU3D4cBD9R",
    "1mPtVTQKPrVITlKw3mPws8Q7_DFv3PVua",
    "1PPSo34d8A5vMktDv_Jysj0YPEeAl5Mrd"
  ];

  const parts = [];
  for (const id of ids) {
    try {
      const url = `https://lh3.googleusercontent.com/d/${id}=w1000`;
      const response = await fetch(url);
      const buffer = await response.arrayBuffer();
      const base64 = Buffer.from(buffer).toString("base64");
      parts.push({
        inlineData: {
          data: base64,
          mimeType: "image/jpeg"
        }
      });
      console.log(`Fetched ${id}`);
    } catch (e) {
      console.error(`Failed to fetch ${id}`, e);
    }
  }

  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [
          ...parts,
          { text: "Please provide a short, poetic caption (max 10 words) for each of these images in the order they were provided. Focus on friendship, travel, and hostel life vibes. Return as a JSON array of strings." }
        ]
      }
    ],
    config: { responseMimeType: "application/json" }
  });

  console.log(result.text);
}

describeImages();
