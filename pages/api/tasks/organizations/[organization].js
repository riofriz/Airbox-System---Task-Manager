import nextConnect from 'next-connect';
import { dbFind } from '../../../../utils/db-interaction';
import middleware from '../../../../middleware/database';

const handler = nextConnect();
handler.use(middleware);

handler.get(async (
  req,
  res,
) => {
  const organization = req.query.organization ?? '';
  const tasks = await dbFind(req, 'tasks', 'organization', organization);

  if (tasks) {
    res.json(tasks);
  } else {
    res.status(200).json({ response: 'Not Found' });
  }
});

export default handler;
