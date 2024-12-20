# eLegal - Connecting Legal Service Providers with Clients

**eLegal** is an innovative web application designed to bridge the gap between legal service providers and citizens in need of legal aid. The platform helps clients easily find and schedule their first legal consultation with the right provider based on their needs, budget, and location.

This repository contains the code for the **eLegal** platform, built with **React** for a seamless, interactive user experience.

---

## Table of Contents

- [About eLegal](about-elegal)
- [Features](features)
- [Tech Stack](tech-stack)
- [Setup](setup)
- [How to Use](how-to-use)
- [Contributing](contributing)
- [License](license)

---

## About eLegal

**eLegal** is an online platform aimed at making legal services accessible to all citizens in India. The platform connects legal service providers (advocates, notaries, arbitrators, etc.) with clients seeking legal advice or assistance. 

Key functionalities include:
- Appointment scheduling for first-time consultations.
- A pro-bono feature for clients who cannot afford standard legal services.
- A "first come, first served" system for case assignments to increase transparency and competition among providers.

---

## Features

- **User Registration**: Sign up as a client or a legal service provider.
- **Client Features**:
  - Search for providers based on case type and affordability.
  - Request appointments with specific providers or through the "first come, first served" model.
  - Pro-bono options for clients who cannot afford legal services.
- **Provider Features**:
  - Accept or reject client appointment requests.
  - View nearby case requests for better visibility, especially for new or less established providers.
  - Dashboard for managing appointments and available time slots.
- **Transparency**: Clear categorization of services and affordability options.
- **Security**: Secure user authentication and data protection.
  
---

## Tech Stack

- **Frontend**:
  - React.js
  - CSS/SCSS (for styling)
  
- **Backend** (Optional if you have backend functionality):
  - Node.js / Express.js
  - Firebase for database
  
- **Other Tools**:
  - JWT (JSON Web Tokens) for authentication
  - Axios (for API requests)

---

## Setup

To run the project locally, follow these steps:

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (for running JavaScript outside of a browser)
- [npm](https://www.npmjs.com/) (for dependency management)

### Clone the repository
```bash
git clone https://github.com/mandyy1305/elegal.git
cd elegal
```

### Install dependencies
Using npm:
```bash
npm install
```

### Start the development server
```bash
npm start
```

The app should now be running at [http://localhost:3000](http://localhost:3000).

---

## How to Use

### Client
1. **Sign Up/Login**: Register an account as a client.
2. **Search Providers**: Browse legal service providers based on the case type and affordability.
3. **Request Appointment**: Send a request to a provider for a consultation or use the "first come, first served" option.
4. **Pro-bono**: If you cannot afford a provider, request pro-bono services.

### Provider
1. **Sign Up/Login**: Register an account as a legal service provider.
2. **Manage Appointments**: Accept or reject client requests based on your availability.
3. **Nearby Requests**: View nearby cases that you can respond to on a first-come-first-served basis.

---

## Contributing

We welcome contributions to improve **eLegal**! If you'd like to help out, please follow these steps:

1. Fork the repository.
2. Clone your fork: `git clone https://github.com/mandyy1305/elegal.git`
3. Create a new branch: `git checkout -b feature/your-feature`
4. Make your changes and commit them: `git commit -m "Add feature"`
5. Push to your fork: `git push origin feature/your-feature`
6. Open a pull request with a description of your changes.

---
