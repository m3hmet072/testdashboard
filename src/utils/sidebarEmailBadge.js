/**
 * Utility to fetch and update email unread count on sidebar across all pages
 */

import { summarizeEmailInbox } from "../services/emailService.js";

/**
 * Fetch unread email count from Supabase and update the sidebar badge
 * @param {Function} setUnreadEmailCount - Function to update the unread count (from createAppShell)
 * @param {Array} garageIds - Array of garage IDs to fetch emails for
 * @returns {Promise<void>}
 */
export async function updateSidebarEmailBadge(setUnreadEmailCount, garageIds) {
  try {
    if (!setUnreadEmailCount || !garageIds || garageIds.length === 0) {
      return;
    }

    const summary = await summarizeEmailInbox({
      garageIds: Array.isArray(garageIds) ? garageIds : [garageIds],
    });

    if (summary && typeof summary.unread === "number") {
      setUnreadEmailCount(summary.unread);
    }
  } catch (error) {
    console.debug("Failed to update sidebar email badge:", error);
    // Silently fail - this is not critical functionality
  }
}
