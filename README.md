# Yell Marketplace MVP

## Overview

As part of the coding challenge for Yell's Front-End Engineering role, this repository contains a minimal viable product (MVP) for the Yell Marketplace. The application allows users to enter their username and view relevant job postings, if there is any, based on their username.

## Features

- **User Authentication Simulation**: Users can simulate logging in by entering their username.
- **Job Listing**: Upon authentication, users are presented with a list of jobs relevant to their business classifications and locations, along with a logout option.
- **Error Handling**: The application features an error component to notify users of any issues with fetching job data.
- **Responsive UI**: The interface is built with modern Vue.js components, providing a seamless experience across various devices.

## Technical Stack

- **Frontend**: Vue.js 3
- **Backend**: Node.js with Express
- **Testing**: Jest for unit and component tests

## Project Structure

### Frontend

The frontend part of the project is structured as follows:

- `src/components`: Contains Vue components used across the application such as `JobItem.vue`, `JobList.vue`, and `ErrorComponent.vue`.
- `src/services`: Includes service modules like `jobService.js` that handle API calls.
- `src/assets`: Houses static assets like stylesheets and images.

### Backend

The backend is built with Express and is structured as follows:

- `controllers`: Contains logic for handling incoming requests and responding to them.
- `routes`: Defines the API routes that map to the controller functions.
- `data`: Includes sample data used by the application.

## How to Run the Application

1. **Start the Backend:**

   - Navigate to the `backend` directory and install dependencies:
     ```bash
     cd backend
     npm install
     npm start
     ```

2. **Start the Frontend:**
   - Navigate to the `frontend` directory and install dependencies:
     ```bash
     cd ../frontend
     npm install
     npm run serve
     ```
   - Open your browser and navigate to `http://localhost:5173` to view the application.

## Testing

#### To run the tests for the frontend:

```bash
cd frontend
npm run test
```

#### To run the tests for the backend:

```bash
cd backend
npm run test
```

## Error Handling

Error handling is managed via the ErrorComponent which takes in an error message as a prop and displays it to the user. This provides a user-friendly way to communicate issues with the service.

## Future Enhancements

With more time, the following features could be added:

- More robust authentication mechanism.
- Pagination for job listings to handle a large number of jobs.
- Advanced filtering options for jobs based on various criteria.
