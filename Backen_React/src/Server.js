import dotenv from 'dotenv'
import fs from "fs"
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import path from 'path'
import { fileURLToPath } from 'url';

/*<--Importación de rutas-->*/
import authRoutes from './routes/auth.route.js'
import router from './routes/Registro.route.js'
import uploadRoute from './routes/upload.route.js'
import lisRoutes from './routes/listado.route.js'
import upUser from './routes/uploadUsei.route.js'
import upImag from './routes/user.route.js'
import userRoutes from './routes/users.route.js'

import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";

const clearCache = async () => {
  const modulePath = fileURLToPath(import.meta.url);
  const moduleDir = path.dirname(modulePath);

  for (const key of Object.keys(import.meta.resolve)) {
    if (key.startsWith(moduleDir)) {
      delete import.meta.resolve[key];
    }
  }
};

await clearCache();
console.log("🧹 Caché limpiada antes de iniciar el servidor");

dotenv.config();
const PORT = process.env.PORT || 5001;

// Obtener el directorio raíz
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Configuración de límites para archivos grandes (debe ir antes de las rutas)
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());

// ✅ CORS global
app.use(
  cors({
    origin: "http://192.168.106.102:5173",
    methods: ["GET", "POST", "PUT", "OPTIONS", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Rutas del sistema de autenticación
app.use("/api/auth", authRoutes);
app.use("/api", router);
app.use("/api", uploadRoute);
app.use("/api/usuario", upUser, upImag);
app.use("/api/list", lisRoutes);
app.use("/api/usuario/Permiss", userRoutes)



// Crear directorio de uploads si no existe
const directories = [
  'uploads',
  'uploads/profile-pics'
];

directories.forEach((dir) => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

server.listen(PORT, () => {
  console.log("Server running on PORT:", PORT);
  connectDB();
});



