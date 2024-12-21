# Crypto-Pay

**Crypto-Pay** is a software solution for managing crypto payments. The platform allows users to create payment intentions, monitor blockchain transactions, and track payment statuses directly from the dashboard.

---

## Features

### Planned for First Version
- **Login System:** Secure authentication for users.
- **Create Payment Intentions:** Generate payment requests with details for users to pay.
- **Automated Blockchain Observation:** Automatically monitor blockchain transactions to detect completed payments and update the status in the dashboard.

---

## Tech Stack

### Frontend
- **Framework:** Angular
- **UI Library:** CoreUI (using the default template for rapid development)

### Backend
- **Language:** Node.js with TypeScript
- **Blockchain Data Fetching:** Moralis
- **Database:** MySQL

---

## Installation

### Prerequisites
Ensure you have the following installed:
- Docker

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/tailoralm/crypto-pay.git
   cd crypto-pay
   ```

2. **Run the Application**
   ```bash
   docker-compose up
   ```

3. **Access the Application**
   Open your browser and navigate to `http://localhost:4200`.

---

## Development

### Folder Structure
- **backend/**: Contains the Node.js backend code.
- **frontend/**: Contains the Angular frontend code.

### Scripts
- **Backend:**
  - `npm run start`: Start the development server.
  - `npm run build`: Build the backend for production.
- **Frontend:**
  - `ng serve`: Start the Angular development server.
  - `ng build`: Build the frontend for production.

---

## Contribution
Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

---

## License
This project is licensed under the [MIT License](LICENSE).

