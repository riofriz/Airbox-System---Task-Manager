import nextConnect from 'next-connect';
import { dbDump, dbItems } from '../../utils/db-interaction';
import middleware from '../../middleware/database';

const handler = nextConnect();
handler.use(middleware);

handler.get(async (
  req,
  res,
) => {
  const tasks = await dbDump(req, 'tasks');

  if (tasks) {
    res.json(tasks);
  } else {
    res.status(403).json({ error: 'Not Found' });
  }
});

handler.post(async (
  req,
  res,
) => {
  const task = req.body;

  await dbItems(req, 'tasks', JSON.parse(task));
  res.json({ response: 'Task Created' });
});

export default handler;
