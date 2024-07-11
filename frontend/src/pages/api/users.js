import { createUser } from '@/controllers/userController';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const newUser = await createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Failed to create user. Please try again.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
