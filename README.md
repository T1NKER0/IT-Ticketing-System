# 🛠️ IT Ticketing System

A system designed for the submission, assignment, and management of IT support request tickets within an organization.

> **🛠 Technologies Used**  
> - 📱 Frontend: Flutter (cross-platform mobile & web UI)  
> - 🔙 Backend: Node.js with Express.js (REST API)  
> - 🗄️ Database: MySQL  
> - 📧 Email Notifications: NodeMailer 

---

## 👥 User Roles & Features

### 👤 Regular Users
- Log in securely.
- Submit new support tickets with:
  - A subject line describing the issue.
  - A detailed description of the problem.
- View the status of submitted tickets.

### 🧑‍🔧 Technicians
- Log in to their account.
- View all open tickets.
- View tickets assigned to them by an admin.
- 📩 **Receive email notifications** when a ticket is assigned.

### 🛡️ Administrators
- Log in with elevated privileges.
- View and manage all submitted tickets.
- Assign open tickets to specific technicians.
- Modify ticket status (`Open`, `Closed`) and priority levels.
- Reset or modify user passwords.
- 📩 **Receive email notifications** when a new ticket is submitted.

---

## ✉️ Email Notification System

The system includes automatic email alerts:

- 🔔 **Admins** receive an email each time a new ticket is submitted.
- 📥 **Technicians** receive an email notification when an admin assigns them a ticket.

This ensures faster response times and better coordination among support staff.

---

## 🧩 System Architecture

- **Flutter Frontend**:
  - Modern, responsive UI for mobile and desktop.
  - Communicates with backend via RESTful API.

- **Express.js Backend**:
  - Handles authentication, ticket logic, role-based actions, and email dispatch.
  - Secure endpoints for ticket and user management.

- **MySQL Database**:
  - Stores users, tickets, assignments, and system logs.
  - Ensures data integrity and performance.

---

## 🚀 Key Features

- ✅ Role-based access (Users, Technicians, Admins)
- 📨 Ticket creation and tracking
- 🗂️ Priority and status management
- 👨‍🔧 Technician assignment
- 🔐 User management (including password resets)
- 📱 Cross-platform via Flutter
- ✉️ Email notifications to admins and technicians

---

# Flutter Frontend Setup
cd ../frontend
flutter pub get
flutter run
