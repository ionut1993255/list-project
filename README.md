# List Project

Welcome to `List Project`, a simple and efficient to-do list application designed to help users manage daily tasks.  
Built using modern technologies like `Vite`, `TypeScript`, `HTML` and `CSS`, this app provides a clean and intuitive
user experience.

## Installation Guide

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```

## Key Features

- **Task Management**: Add, remove and check/uncheck to-do items.
- **Persistent Storage**: All tasks are stored in `localStorage`, so they persist after page refresh.
- **Dynamic UI Updates**: The UI updates automatically when items are added or removed.
- **Clear List Button**: If there are tasks in the list, a "Clear" button appears to remove all items at once.
- **Empty State Message**: If there are no tasks, a message `No items found!` is displayed.

## Project Structure

- **`src/css/style.css`** - Contains all styles for the application.
- **`src/models/`** - Defines the data models:
    - `list-item.ts` - Represents a single to-do item.
    - `full-list.ts` - Implements the Singleton Pattern to manage the entire list.
- **`src/templates/`** - Handles UI rendering:
    - `list-template.ts` - Updates the DOM with the current list state.
- **`src/utils/`** - Contains utility functions:
    - `dom-utils.ts` - Functions for interacting with input elements.

## Technologies Used

- **`Vite`** - Fast and modern build tool.
- **`TypeScript`** - Ensures type safety and maintainability.
- **`HTML & CSS`** - Provides the structure and styling for the UI.
- **`localStorage`** - Persists the to-do list data.

## How It Works

1. Enter a task in the input field and click `+` to add it to the list.
2. Click on a checkbox to mark a task as completed.
3. Click `x` on a task to remove it.
4. Click `Clear` to remove all tasks at once.
5. The list is saved in `localStorage` and will persist after reloading.

## Conclusion

`List Project` is a lightweight yet powerful to-do list app following best practices in `clean code` and `OOP`.  
With `TypeScript` and the `Singleton Pattern`, it offers a scalable and maintainable codebase.
Check out the custom favicon 😉
Give it a try and keep your tasks organized! ✅
