🚀 Overview

CarStore features a powerful Admin Dashboard that allows complete control over the platform, built using Next.js, Node.js, Prisma ORM, and PostgreSQL. Unlike traditional applications that rely on third-party mock APIs, I have implemented a fully custom backend, ensuring better performance, security, and scalability.

The Admin Dashboard is the core of this platform, offering functionalities such as product management, banner control, and advanced sales analytics with real-time data synchronization using Upstash. Additionally, UploadThing is integrated for seamless media handling.

🛠️ Tech Stack

Technology Usage

Next.js (App Router) : Frontend framework for SSR, ISR, and optimized rendering

TypeScript : Type safety and better developer experience

Tailwind CSS: Styling for a modern UI

Prisma ORM: Database management using PostgreSQL

PostgreSQL(NEON DB) : Relational database for efficient and scalable storage

Stripe: Payment gateway for secure checkout

Kinde Auth: Authentication & authorization management

Chart.js & Recharts: Sales analytics visualization with graphs

Upstash: Real-time caching and data synchronization

UploadThing : File and media uploads

Vercel: Deployment and serverless hosting

🎯 Admin Dashboard Features

🔹 Comprehensive Product Management

Create, edit, and delete products directly from the admin panel.

Bulk product updates to streamline workflow.

Real-time inventory tracking.

🔹 Banner Control

Add, edit, and remove promotional banners dynamically.

Control homepage aesthetics directly from the admin panel.

🔹 Advanced Sales Analytics

Graphical reports of sales trends, revenue breakdowns, and customer insights.

Real-time statistics powered by Upstash.

Export reports for business intelligence.

🔹 Seamless File Management with UploadThing

Upload and manage product images and banners easily.

Secure and optimized media storage with UploadThing.

🔹 Secure & Scalable Authentication

Kinde Auth integration for role-based authentication.

Admin-only access to the dashboard.

🔹 Payment Gateway Integration

Stripe-powered transactions with webhook verification.

Supports multiple currencies and payment methods.

🛍️ Storefront Flow

Users can browse products seamlessly with dynamic filtering and search functionality.

Product pages display detailed descriptions, high-quality images, and stock availability.

Cart management allows users to add, update, and remove items before checkout.

Authenticated checkout flow ensures that only verified users can place orders.

Real-time order tracking using Upstash provides customers with live order updates.

💳 Stripe Checkout Sessions

Secure Payment Processing using Stripe Checkout Sessions.

Users are redirected to Stripe for a seamless and secure payment experience.

After successful payment, users are redirected back to the site with real-time order confirmation.

Stripe webhooks ensure that order statuses are updated automatically in the database.

🚀 Installation & Setup

1️⃣ Clone the Repository
git clone https://github.com/your-username/CarStore.git
cd CarStore

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file and add your credentials:
DATABASE_URL=your_postgres_database_url
STRIPE_SECRET_KEY=your_stripe_secret_key
KINDE_SITE_URL=https://yourapp.com
KINDE_POST_LOGOUT_REDIRECT_URL=https://yourapp.com
KINDE_POST_LOGIN_REDIRECT_URL=https://yourapp.com/api/auth/creation
UPSTASH_REDIS_URL=your_upstash_redis_url
UPLOADTHING_SECRET=your_uploadthing_secret_key

4️⃣ Migrate Database & Seed Data
npx prisma migrate dev --name init
npx prisma db seed

5️⃣ Start the Development Server
npm run dev

Access the app at: http://localhost:3000

📈 Admin Dashboard Preview

The Admin Dashboard empowers store owners with:
✅ Product & Inventory Management
✅ Banner & Promotions Control
✅ Advanced Sales Analytics with Real-Time Sync
✅ Secure File Uploads & Media Management

📦 Deployment

Deployed on Vercel for seamless scalability and performance.

📩 Contributions & Feedback

If you have suggestions or want to contribute, feel free to submit a PR or open an issue!
