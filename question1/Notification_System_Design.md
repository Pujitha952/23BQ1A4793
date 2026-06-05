# Notification Prioritization System

## Problem Statement

The system fetches campus notifications from the API and prioritizes them based on importance and recency.

## Priority Rules

- Placement = Highest Priority
- Result = Medium Priority
- Event = Lowest Priority

## Approach

1. Fetch notifications from API.
2. Assign priority score:
   - Placement = 3
   - Result = 2
   - Event = 1
3. Sort notifications by priority and timestamp.
4. Select top 10 notifications.
5. Display notifications.

## Logging Middleware

A logging middleware (logger.js) is used to log application events.

## Time Complexity

O(n log n)

## Space Complexity

O(n)