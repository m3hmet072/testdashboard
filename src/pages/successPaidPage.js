import { createAppShell } from "../components/appShell.js";
import { ensureAuthenticated, logoutAndRedirect } from "../utils/auth.js";

async function initializeSuccessPaidPage(app) {
  if (!app) return;

  try {
    const user = await ensureAuthenticated();
    if (!user) return;

    const { shell, contentArea } = createAppShell({
      activePage: "success-paid",
      title: "Payment Successful",
      headerNote: "Your payment has been processed",
      userEmail: user.user.email,
      onLogout: logoutAndRedirect,
      garage: user.activeGarage,
      isAdmin: user.isAdmin,
    });

    app.replaceChildren(shell);

    contentArea.innerHTML = `
      <section class="success-paid-container">
        <div class="success-paid-card">
          <div class="success-icon">
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="48" cy="48" r="45" fill="#d4edda" stroke="#28a745" stroke-width="3"/>
              <path d="M35 48L45 58L62 38" stroke="#28a745" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>
          </div>
          <h1>Payment Successful!</h1>
          <p class="success-message">Your payment has been processed successfully.</p>
          <p class="success-subtitle">Thank you for your transaction. Your appointment has been confirmed.</p>
          
          <div class="success-actions">
            <a href="./dashboard.html" class="button button-primary">Back to Dashboard</a>
            <a href="./calendar.html" class="button button-secondary">View Calendar</a>
          </div>
        </div>
      </section>
    `;

    const styles = `
      <style>
        .success-paid-container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
          padding: 2rem;
        }

        .success-paid-card {
          background: white;
          border-radius: 12px;
          padding: 3rem 2rem;
          text-align: center;
          max-width: 500px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          animation: slideUp 0.5s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .success-icon {
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .success-paid-card h1 {
          color: #28a745;
          margin: 1rem 0;
          font-size: 2rem;
        }

        .success-message {
          color: #333;
          font-size: 1.1rem;
          margin: 0.5rem 0;
          font-weight: 500;
        }

        .success-subtitle {
          color: #666;
          margin: 0.5rem 0 2rem 0;
          font-size: 0.95rem;
        }

        .success-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .button {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .button-primary {
          background-color: #28a745;
          color: white;
        }

        .button-primary:hover {
          background-color: #218838;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(40, 167, 69, 0.3);
        }

        .button-secondary {
          background-color: #e9ecef;
          color: #333;
        }

        .button-secondary:hover {
          background-color: #dee2e6;
          transform: translateY(-2px);
        }
      </style>
    `;

    document.head.insertAdjacentHTML("beforeend", styles);
  } catch (error) {
    const errorContent = `
      <section class="auth-card page-animate">
        <h1>Error Loading Page</h1>
        <p class="muted">Unable to load the success page. Please try again.</p>
      </section>
    `;
    app.innerHTML = errorContent;
    console.error(error);
  }
}

const appElement = document.querySelector("#app");
initializeSuccessPaidPage(appElement);
