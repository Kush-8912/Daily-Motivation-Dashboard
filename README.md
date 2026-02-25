# Daily Motivation Dashboard 🌞

A React project that fetches motivational quotes and allows users to like/unlike quotes with search functionality.

---

## 👨‍🎓 Student Details

- **Name:** Kushagra Aggarwal
- **Roll Number:** 25BCS10163
- **Student Mail ID:** kushagra.25bcs10163@sst.scaler.com
- **Submitted to:** Mrinal Bhattacharya Sir

---

## 📌 Project Overview

The **Daily Motivation Dashboard** is a React-based web application that displays a random motivational quote from an API.

Users can:
- Fetch a new quote
- Like / Unlike the current quote ❤️
- View total liked quotes
- Search and filter liked quotes
- View all liked quotes in a list

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
- ✅ Conditional rendering (loading / error / empty states)
- ✅ Responsive UI

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

This project demonstrates:

- `useState` for managing UI and data state
- `useEffect` for API call on initial load
- Conditional rendering using `if/else` statements
- `map()` for rendering liked quotes list
- `filter()` for search functionality
- Toggle interaction (Like/Unlike)
- Controlled input (`searchTerm`)
- Component-based architecture (separation of concerns)

---

## 📂 Project Structure

```bash
daily-motivation-dashboard/
│── src/
│   ├── components/
│   │   ├── QuoteCard.jsx        # Displays the current quote and author
│   │   ├── ActionButtons.jsx    # New Quote and Like/Unlike buttons
│   │   ├── StatsBar.jsx         # Shows total liked quotes count
│   │   ├── SearchBox.jsx        # Search/filter input for liked quotes
│   │   ├── LikedQuotesList.jsx  # Renders the list of liked quotes
│   │   └── Footer.jsx           # Footer component
│   ├── App.jsx                  # Root component — state & logic
│   ├── App.css                  # Styling for dashboard UI
│   ├── index.css                # Global styles (full-width layout)
│   └── main.jsx                 # React entry point
│
├── package.json
└── README.md
```

---

## 🗂️ Component Breakdown

| Component | Responsibility |
|---|---|
| `App.jsx` | Manages all state and passes props to child components |
| `QuoteCard.jsx` | Renders the current quote, author, loading and error states |
| `ActionButtons.jsx` | Handles "New Quote" and "Like / Unlike" button interactions |
| `StatsBar.jsx` | Displays the count of liked quotes |
| `SearchBox.jsx` | Controlled input for filtering the liked quotes list |
| `LikedQuotesList.jsx` | Renders filtered liked quotes; shows empty state messages |
| `Footer.jsx` | Static footer displayed at the bottom of the dashboard |