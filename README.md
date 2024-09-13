# E-commerce Cart

This project is a simple e-commerce cart built using React, Redux Toolkit, and Axios.
It allows users to add products to a cart, update quantities by increment and decrement, and view the total price.

Clone the project

```bash
  git clone https://github.com/NicoTiNe-XI/EcommerceCart
```

Go to the project directory

```bash
  cd .\EcommerceCart
```

Install dependencies

```bash
npm create vite@latest
  npm install
  npm i axios
```

Start the server

```bash
  npm run start
```

## Project Structure:

- src/: Contains the source code for the project.
- components/: Stores reusable React components.
- features/: Houses the application's logic and state management.
- App.js: The main application component.
- index.css: Global styles for the application.

## Tech Stack:

**Client-Side:** React, ReduxJs, vanilla CSS

## Required Features:

- Browse through the available products.
- Click the "Add +" button to add a product to the cart.
- The cart will open, displaying the added product and its quantity.
- You can increase or decrease the quantity using the "+" and "-" buttons.
- To remove an item, click the "Remove" button.
- To clear the cart, click the "Clear" button.
- The total price will be displayed in the cart footer.

## UI Changes:

- Removed Borders: Borders around the product title and "Add" button have been removed for a cleaner look.
- Button Styling: Changed the button color to black with white text for better contrast and visibility.
- Product Title Adjustment: Made the product title take the full width to accommodate long text.

## Added Features:

- Close Button: Added a user-friendly close button with a reddish background color to easily close the cart.
- Remove Button: Introduced a remove button to allow users to remove items from the cart directly without decrementing the quantity to zero.

## Notes:

- The focus was on implementing the core logic and functionality of the cart.
- The UI design is kept simple and functional
- adhering closely to the provided reference.
- The UI changes made can be reversed back to match the original reference if desired.
