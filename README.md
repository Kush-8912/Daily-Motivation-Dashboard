# Daily Motivation Dashboard 🌞

A simple **React** project that fetches motivational quotes and allows users to like/unlike quotes.

---

## 👨‍🎓 Student Details

- **Name:** Kushagra Aggarwal  
- **Roll Number:** 25BCS10163  
- **Student Mail ID:** kushagra.25bcs10163@sst.scaler.com  
- **Submitted to:** Mrinal Bhattacharya Sir  

---

## 📌 Project Overview

The **Daily Motivation Dashboard** is a React-based web application designed to provide students with daily motivation through random quotes.

The app fetches a random quote from an API and displays it with the author name. Users can:
- fetch a new quote
- like/unlike the current quote ❤️
- view the total number of liked quotes
- search/filter liked quotes
- view a list of liked quotes

---

## 🚀 Features

- ✅ Fetch random quote using API
- ✅ Display quote and author
- ✅ New Quote button
- ✅ Like / Unlike toggle ❤️
- ✅ Total liked quotes count
- ✅ Search/filter liked quotes
- ✅ Loading state handling
- ✅ Error handling
- ✅ Conditional rendering for empty/loading/error states
- ✅ Responsive UI (mobile-friendly)

---

## 🛠️ Technologies Used

- **React**
- **JavaScript**
- **CSS**
- **DummyJSON Quotes API**

---

## 🌐 API Used

- **Random Quote API:** `https://dummyjson.com/quotes/random`

---

## 🧠 React Concepts Used

This project demonstrates the following React concepts:

- `useState` for UI and data state management
- `useEffect` for API call on initial load
- Conditional rendering (`loading`, `error`, `empty`)
- `map()` to render liked quotes list
- `filter()` for search functionality
- Toggle interaction (Like/Unlike)

---

## 📂 Project Structure

```bash
daily-motivation-dashboard/
│── src/
│   ├── App.jsx       # Main component logic
│   ├── App.css       # Component styling
│   ├── index.css     # Global/root full-width styles
│   └── main.jsx      # React entry point
│
├── package.json
└── README.md