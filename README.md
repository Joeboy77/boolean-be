# Backend README

## Setup Instructions

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the `backend` folder and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the backend server:**
   ```bash
   npm start
   ```

## Endpoints

### Process Boolean Function
- **URL:** `POST /api/v1/boolean/process`
- **Description:** Processes a Boolean function to return Canonical SOP, POS, Minimized SOP, and K-Map verification.
- **Request Body Example:**
  ```json
  {
    "functionString": "F(A, B, C, D)=Σm(1, 3, 4, 6, 9, 11, 12, 13, 14, 15)"
  }
  ```

## Technologies Used
- Node.js
- Express.js
- MongoDB

---
