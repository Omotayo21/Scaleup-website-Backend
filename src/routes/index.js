import express from 'express';
const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome message
 *     responses:
 *       200:
 *         description: Returns a welcome message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Welcome to ScaleUp API
 */
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to ScaleUp API' });
});

export default router;
