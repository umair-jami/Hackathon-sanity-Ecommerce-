
# E-Commerce Website

A fully responsive and dynamic e-commerce platform built using **Next.js** and **Sanity CMS**, deployed on **Vercel**. The platform focuses on selling clothes and offers a seamless user experience with efficient content management and dynamic features.

---

## 🚀 Features

- **Dynamic Product Management**: All product data is managed via Sanity CMS, making it easy to update inventory, descriptions, and images.
- **Product Categories**: Organized layout to filter products by categories, making it user-friendly for customers.
- **Responsive Design**: Optimized for all devices, including mobile, tablet, and desktop.
- **Cart Functionality**: Add, remove, and view items in the cart.
- **Payment Integration**: Future integration of payment gateways for secure transactions.
- **Shipment Tracking**: Using ShipEngine API for real-time order tracking.
- **SEO Optimized**: Built-in support for SEO to boost search engine visibility.
- **High Performance**: Leveraging Next.js for optimized page loading and fast user interactions.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **CMS**: [Sanity.io](https://www.sanity.io/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Styling**: Tailwind CSS (or any CSS framework you've used)
- **API Integration**: ShipEngine API for shipment tracking
- **State Management**: React Context API (or Redux if applicable)

---

## 📂 Project Structure

├── components/       # Reusable UI components
├── pages/            # Application pages (Next.js routing)
├── sanity/           # Sanity CMS configurations
├── public/           # Static assets (images, fonts, etc.)
├── styles/           # Global styles (Tailwind or CSS files)
├── utils/            # Helper functions
├── package.json      # Project dependencies
├── sanity.config.js  # Sanity CMS setup
└── README.md         # Project documentation
```

---

## ⚙️ Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo-name
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Set up Sanity CMS:

   - Visit [Sanity.io](https://www.sanity.io/) and create a project.
   - Configure the schema in the `sanity/` directory.
   - Connect the Sanity dataset with the project.

5. Add environment variables:

   Create a `.env.local` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SHIPENGINE_API_KEY=your-shipengine-api-key
   ```

6. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

7. Build for production:

   ```bash
   npm run build
   ```

---

## 🚀 Deployment

This project is deployed on **Vercel**. To deploy your project:

1. Push your project to a Git repository (GitHub, GitLab, etc.).
2. Connect your repository to [Vercel](https://vercel.com/).
3. Configure environment variables on Vercel.
4. Deploy and enjoy your live e-commerce website!

---

## 👨‍💻 Author

- **Name**: Umair Baloch
- **GitHub**: [UmairJami](https://github.com/umair-jami)
- **LinkedIn**: [Umair Jami](https://www.linkedin.com/in/umair-jami/)
- **Portfolio**: [umairbaloch.dev](https://portfolio-core-cs-smile-stone1-78.vercel.app/)
